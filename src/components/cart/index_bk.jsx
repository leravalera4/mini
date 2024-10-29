"use client";
import React, { useRef } from "react";
import Image from "next/image";
import basket from "../../app/images/icon.svg";
import localFont from "next/font/local";
import axios from "axios";
import { useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../products/products.css";
import generatePDF, { Margin } from "react-to-pdf";
import Spiner from "../spiner";
import del from "../../app/images/de.svg";

const options = {
  filename: "test.pdf",
  //   page: {
  //     margin:Margin.SMALL,
  //  },
};

const noir = localFont({
  src: [
    {
      path: "../../app/fonts/NoirPro-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../app/fonts/NoirPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../app/fonts/NoirPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

// Retrieve cart dFromata from localStorag
const Cart = () => {
  const [theme, setTheme] = useState([]);
  const [sale, setSale] = useState([]);
  const [data, setData] = useState([]);
  const [special, setSpecial] = useState();
  const [len, setLen] = useState(null);
  const [name, setName] = useState([]);
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  const pdfRef = useRef();

  // useEffect(() => {
  //   const handleStorage = () => {
  //     const stores = localStorage.getItem("stores");
  //     const storesArray = JSON.parse(stores);
  //     setStores(storesArray);
  //     console.log(storesArray);
  //   };

  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('storage', handleStorage);
  //   }
  //   return () => window.removeEventListener('storage', handleStorage);
  // }, []);

  // React.useEffect(() => {
  //   window.addEventListener("storage", () => {
  //     const theme = JSON.parse(localStorage.getItem("stores_1234"));
  //     const sale = JSON.parse(localStorage.getItem("cart"));
  //     const name = JSON.parse(localStorage.getItem("storesName"));
      
  //     const special = JSON.parse(localStorage.getItem("special"));
  //     console.log(theme);
  //     console.log(sale);
  //     console.log("STORESNAME",name);
  //     console.log(special);
  //     setTheme(theme);
  //     setSale(sale);
  //     setSpecial(special);
  //     setName(name);
  //     sendDataToBackend(theme, sale, name);
  //   });
  // }, []);

  React.useEffect(() => {
    const handleStorageChange = () => {
      console.log('Storage event triggered');
      const theme = JSON.parse(localStorage.getItem("stores_1234"));
      const sale = JSON.parse(localStorage.getItem("cart"));
      const name = JSON.parse(localStorage.getItem("storesName"));
      const special = JSON.parse(localStorage.getItem("special"));
  
      console.log('Theme:', theme);
      console.log('Sale:', sale);
      console.log('StoresName:', name);
      console.log('Special:', special);
      
      if (name === null) {
        console.log('StoresName is null or not set.');
      }
  
      setTheme(theme);
      setSale(sale);
      setSpecial(special);
      setName(name);
      sendDataToBackend(theme, sale);
      getNames(sale, theme, name)
    };
  
    window.addEventListener("storage", handleStorageChange);
  
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  

  React.useEffect(() => {
    if (data && data.length > 0 && data[0].value) {
      const len = data[0].value.length;
      setLen(len);
    }
  }, [data, len]);


  const getNames = async (sale, theme, name) =>{
    console.log("Sending to backend:", { sale, theme, name })
    try {
      const response = await axios.post(
        "http://localhost:8080/api/sale/name",
        { sale:sale, theme:theme, name: name} // Wrap the sale data in an object with the key "sale"
      );
      const responses = response.data;
      console.log("NAMES", responses);
    }
    catch(error){
      console.error();
    }
  }

  const sendDataToBackend = async (theme, sale) => {
    console.log("Sending to backend:", { sale, theme }); // Проверьте значения
    try {
      // Send the data to the appropriate backend endpoint based on the type
      const response = await axios.post(
        "http://localhost:8080/api/sale/setsale",
        { sale: sale, theme: theme } // Wrap the sale data in an object with the key "sale"
      );
      const responses = response.data;
      console.log("REPPP", responses);
      console.log("Before sorting:", responses);
      const sortedItems = responses.sort((a, b) => {
        const productID1 = a.productID || "";
        const productID2 = b.productID || "";
        if (productID1 < productID2) return -1;
        if (productID1 > productID2) return 1;
        return 0;
      });
      console.log("After sorting:", sortedItems);

      // const sortedItems = responses.sort((a, b) => {
      //   const productID1 = a.productID || "";
      //   const productID2 = b.productID || "";

      //   if (productID1 < productID2) {
      //     return -1;
      //   }
      //   if (productID1 > productID2) {
      //     return 1;
      //   }
      //   return 0;
      // });

      console.log("ТУТ ТО ЧТО ПРИХОДИТ С БЕК", sortedItems);

      const orderMap = new Map(sale.map((id, index) => [id, index]));

      // Сортируем массив объектов по порядку из массива идентификаторов
      const milk = sortedItems.sort((a, b) => {
        const indexA = orderMap.get(a.productID);
        const indexB = orderMap.get(b.productID);

        // Если индекс не найден, поставьте объект в конец списка
        if (indexA === undefined) return 1;
        if (indexB === undefined) return -1;

        return indexA - indexB;
      });

      const flattenedResponses = milk.flat();

      console.log("ТУТ ТО ЧТО ПОТОМ ФОРМАТИРУЕТСЯ", flattenedResponses);
      // Function to group items by a specific property
      const groupBy = (arr, prop) =>
        arr.reduce((acc, item) => {
          const key = item[prop];
          if (key) {
            (acc[key] = acc[key] || []).push(item);
          }
          return acc;
        }, {});

      // Group by 'storeid'
      const groupedByStoreID = groupBy(flattenedResponses, "storeID");

      // Transform the grouped data into the desired format
      const transformedObject = Object.entries(groupedByStoreID).map(
        ([key, value]) => ({
          id: parseInt(key), // Convert storeid to integer if needed
          value: value, // Store the grouped items under 'value'
        })
      );

      console.log("Transformed", transformedObject);
      try {
        // Loop through each store in transformedObject
        transformedObject.forEach((store) => {
          // Initialize sum of prices for this store
          let sum = 0;

          function extractNumber(str) {
            // Use a regular expression to remove the dollar sign and parse the number
            let cleanedStr = str
              .replace(/^\$|^'about'\s*/g, "")
              .replace(/[^0-9.,-]/g, "");

            // Parse the cleaned string into a float
            return parseFloat(cleanedStr) || 0; // Return 0 if parsing fails
          }

          // Loop through each item in the value array of the current store
          store.value.forEach((item) => {
            if (item.stock === "Out of Stock") {
              const newPrice = 0;
              sum += newPrice;
            }
            if (item.regprice && item.stock !== "Out of Stock") {
              const newPrice = extractNumber(item.regprice);
              sum += newPrice;
            }
            if (
              item.saleprice &&
              item.non_member_price == null &&
              item.stock !== "Out of Stock"
            ) {
              const newPrice = extractNumber(item.saleprice);
              sum += newPrice;
            }
            if (item.non_member_price && item.stock !== "Out of Stock") {
              const newPrice = extractNumber(item.non_member_price);
              sum += newPrice;
            } else {
              const newPrice = 0;
              sum += newPrice;
            }
          });

          // Add the sumOfPrices property to the store object
          store.sumOfPrices = sum;
        });
        setData(transformedObject);
        // Log the updated transformedObject to console
        console.log(
          "Updated transformedObject with sum of prices:",
          transformedObject
        );
      } catch (error) {
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //Вывод для проверки

  console.log("Тут какая=то дата", data);

  const removeStore = (storeId) => {
    // Filter out the store with the given ID from the data array
    const updatedData = data.filter((store) => store.id != storeId);
    // Update the data array with the filtered data
    setData(updatedData);
    const get = JSON.parse(localStorage.getItem("stores_1234"));
    console.log(get);
    const da = get.filter((store) => store != storeId);
    console.log(da);
    const updatedData3 = JSON.parse(localStorage.getItem("storesName"));
    const updatedData4 = updatedData3.filter((store) => store.id != storeId);
    localStorage.setItem("storesName", JSON.stringify(updatedData4));
    if (updatedData.length < 1) {
      localStorage.removeItem("cart");
      localStorage.removeItem("names");
    }
    localStorage.setItem("stores_1234", JSON.stringify(da));
  };

  let title, storesName;
  if (typeof window !== "undefined") {
    title = JSON.parse(localStorage.getItem("names"));
    storesName = JSON.parse(localStorage.getItem("storesName"));
  }

  const mergedData = data.map((item) => {
    const match = storesName.find((store) => store.id == item.id);
    if (match) {
      return { ...item, store: match.store, location: match.location };
    }
    return item;
  });

  console.log("Merged Data", mergedData);

  let length = 0;
  if (
    mergedData &&
    mergedData.length > 0 &&
    mergedData[0] &&
    mergedData[0].value
  ) {
    length = mergedData[0].value.length;
  }
  let titleLength = 0; // Declare titleLength variable outside of the conditional block and initialize it

  if (title && title.length > 0) {
    titleLength = title.length; // Update titleLength if conditions are met
  }

  console.log(title);
  console.log(titleLength);
  console.log(length);

  // const renderedNames = data.flatMap((obj) =>
  //   obj.value.map((item) => <p key={item.id}>{item.title}</p>)
  // );

  const targetRef = useRef();

  console.log("Тут дата дата", data);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginLeft: "133px",
      }}
    >
      <div style={{ display: "flex", cursor: "pointer" }}>
        <Image
          alt="shopping"
          src={basket}
          width={40}
          height={40}
          onClick={() => setState({ isPaneOpen: true })}
        />
        <p
          className={noir.className}
          onClick={() => setState({ isPaneOpen: true })}
        >
          List
        </p>
        {len === null ? <p>(0)</p> : <p>({len})</p>}
      </div>

      <SlidingPane
        width="90%"
        overlayClassName="overlay"
        className={noir.className}
        isOpen={state.isPaneOpen}
        title="List"
        onRequestClose={() => {
          setState({ isPaneOpen: false });
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {mergedData.length === 0 ? (
            " "
          ) : (
            <button
              className={`${noir.className} box`}
              style={{
                marginLeft: "auto",
                width: "190px",
                outline: "0",
                cursor: "pointer",
                height: "38px",
                padding: "5px 16px",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "20px",
                verticalAlign: "middle",
                border: "1px solid",
                borderRadius: " 6px",
                color: " #24292e",
                backgroundColor: "#fafbfc",
                borderColor: "#1b1f2326",
                transition: "0.2s cubic-bezier(0.3, 0, 0.5, 1)",
              }}
              onClick={() => generatePDF(targetRef, options)}
            >
              Download products List
            </button>
          )}
          {length === titleLength ? (
            <div
              ref={targetRef}
              style={{
                display: "flex",
                flexDirection: "row",
                opacity: "100",
                marginTop: "-13px",
                transition: "all .75s ease",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  paddingRight: "30px",
                }}
              >
                {mergedData.length === 0 ? (
                  <p>
                    Nothing here yet, but you can add 3 stores in total to
                    compare prices
                  </p>
                ) : (
                  <>
                    {title ? (
                      <div style={{ marginRight: "24px" }}>
                        <p
                          style={{
                            width: "144px",
                            height: "69px",
                            alignContent: "center",
                          }}
                        >
                          <b>Products</b>
                        </p>
                        <table>
                          {title.map((tit) => (
                            <tr>
                              <td style={{ borderBottom: "1px solid #000" }}>
                                <p
                                  style={{
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    width: "200px",
                                  }}
                                >
                                  {tit}
                                </p>
                              </td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    ) : null}
                  </>
                )}
              </div>

              {mergedData.map((store) => (
                <div
                  style={{
                    paddingRight: "24px",
                  }}
                  key={store.id}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        width: "144px",
                        height: "69px",
                        alignContent: "center",
                      }}
                    >
                      <b>{store.location}</b>
                    </p>
                    <button
                      style={{
                        outline: "0px",
                        // marginLeft: "20px"
                        fontSize: "21px",
                        fontWeight: "500",
                        lineHeight: "20px",
                        verticalAlign: "middle",
                        color: "red",
                        border: "0px",
                        cursor: "pointer",
                        backgroundColor: "transparent",
                      }}
                      className={noir.className}
                      onClick={() => removeStore(store.id)}
                      title="Delete Store"
                    >
                      <Image src={del} width={30} height={30} />
                    </button>
                  </div>
                  <table style={{ width: "100%", textAlign: "center" }}>
                    {store.value.map((item) => {
                      // Check if results array exists and has at least one item
                      if (item.productID) {
                        {
                          return (
                            <tr>
                              {" "}
                              <td
                                style={{
                                  borderBottom: "1px solid #000",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {" "}
                                <img
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    paddingRight: "20px",
                                  }}
                                  src={item.image}
                                  alt={item.title}
                                />
                                {item.stock === "Out of Stock" ? (
                                  <p style={{ color: "rgb(225, 37, 27)" }}>
                                    Out of Stock ($0)
                                  </p>
                                ) : (
                                  <>
                                    {item.non_member_price != null && (
                                      <p>{item.non_member_price}</p>
                                    )}
                                    {item.non_member_price == null &&
                                      item.saleprice != null && (
                                        <p>{item.saleprice}</p>
                                      )}
                                    {item.regprice != null && (
                                      <p>{item.regprice}</p>
                                    )}
                                  </>
                                )}
                              </td>
                            </tr>
                          );
                        }
                      }
                      return null; // Return null if no suitable data found
                    })}
                  </table>
                  <p style={{ paddingTop: "16px" }}>
                    <b>Total price: {store.sumOfPrices.toFixed(2)}$</b>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <>
              <Spiner />
              <p>Checking latest prices for you...</p>
            </>
          )}
        </div>
      </SlidingPane>
    </div>
  );
};

export default Cart;
