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
import plus from "../../app/images/plus.svg";
import minus from "../../app/images/minus.svg";

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
  const [response, setResponseData] = useState(null);
  const [special, setSpecial] = useState();
  const [len, setLen] = useState(null);
  const [name, setName] = useState([]);
  const [num, setNum] = useState();
  const [carttt, setCart] = useState([]);
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
      console.log("Storage event triggered");
      const theme = JSON.parse(localStorage.getItem("stores_1234"));
      const sale = JSON.parse(localStorage.getItem("cart"));
      const name = JSON.parse(localStorage.getItem("storesName"));
      const special = JSON.parse(localStorage.getItem("special"));

      console.log("Theme:", theme);
      console.log("Sale:", sale);
      console.log("StoresName:", name);
      console.log("Special:", special);

      if (name === null) {
        console.log("StoresName is null or not set.");
      }

      setTheme(theme);
      setSale(sale);
      setSpecial(special);
      setName(name);
      //sendDataToBackend(theme, sale);
      // getNames(sale, theme, name);
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

  const getNames = async (sale, theme, name) => {
    console.log("Sending to backend:", { sale, theme, name });
    try {
      const response = await axios.post(
        "http://localhost:8080/api/sale/name",
        { sale: sale, theme: theme, name: name } // Wrap the sale data in an object with the key "sale"
      );
      const responses = response.data;
      setResponseData(responses);
      console.log("NAMES", responses);
    } catch (error) {
      console.error();
    }
  };

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

  let title, storesName, cart;
  if (typeof window !== "undefined") {
    title = JSON.parse(localStorage.getItem("names"));
    cart = JSON.parse(localStorage.getItem("cart"));
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

  let cartLength = 0; // Declare titleLength variable outside of the conditional block and initialize it

  if (cart && cart.length > 0) {
    cartLength = cart.length; // Update titleLength if conditions are met
  }

  console.log(title);
  console.log(titleLength);
  console.log(length);

  // const renderedNames = data.flatMap((obj) =>
  //   obj.value.map((item) => <p key={item.id}>{item.title}</p>)
  // );

  const targetRef = useRef();
  let totalQuantity;
  if (response != null) {
    totalQuantity = response[0].items.reduce(
      (sum, product) => sum + product.quantity,
      0
    );
  }
  console.log("totalQuantity", totalQuantity);
  console.log("Тут дата дата", data);

  // const increaseQuantity = (itemId) => {
  //   const updatedResponse = response.map((store) => {
  //     return {
  //       ...store,
  //       items: store.items.map((item) => {
  //         if (item.productID === itemId) {
  //           return { ...item, quantity: item.quantity + 1 };
  //         }
  //         console.log("INCREASE",item)
  //         return item;
  //       }),
  //     };
  //   });

  //   setResponseData(updatedResponse);

  //   console.log("RESPONSR",response)
  // };

  // const decreaseQuantity = (itemId) => {
  //   const updatedResponse = response.map((store) => {
  //     return {
  //       ...store,
  //       items: store.items.map((item) => {
  //         if (item.productID === itemId && item.quantity > 1) {
  //           return { ...item, quantity: item.quantity - 1 };
  //         }
  //         return item;
  //       }),
  //     };
  //   });
  //   setResponseData(updatedResponse);
  // };

  // useEffect(() => {
  //   // Загружаем корзину из localStorage при монтировании
  //   const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCart(storedCart);
  // }, []);

  // const updateLocalStorage = (updatedCart) => {
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  // const addProduct = (productId) => {
  //   const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
  //   newId = item.productID; // Обновляем newId на каждом шаге
  //   if (newId == productId) {
  //     existingItems.push(newId);
  //     localStorage.setItem("cart", JSON.stringify(existingItems));
  //   }
  // };

  // const addProduct = (productId) => {
  //   const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
  //   existingItems.push(productId);
  //   totalQuantity +=1;
  //   localStorage.setItem("cart", JSON.stringify(existingItems));

  // };

  // const removeProduct = (productId) => {
  //   const updatedCart = cart.filter((id) => id !== productId);
  //   setCart(updatedCart);
  //   updateLocalStorage(updatedCart);
  // };

  // const increaseQuantity = (itemId) => {
  //   const updatedResponse = response.map((store) => {
  //     return {
  //       ...store,
  //       items: store.items.map((item) => {
  //         if (item.productID === itemId) {
  //           return { ...item, quantity: item.quantity + 1 };
  //         }
  //         return item;
  //       }),
  //     };
  //   });

  //   setResponseData(updatedResponse);
  //   console.log("UPD",updatedResponse)
  // };

  // function addToCart(productId) {
  //   // Получаем текущую корзину из localStorage
  //   let cart = JSON.parse(localStorage.getItem("cart")) || [];

  //   // Добавляем ID продукта в корзину
  //   cart.push(productId);

  //   // Сохраняем обновленную корзину в localStorage
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }

  //   const addToCart = (productId) => {
  //     let newCart = [...cart, productId];
  //     localStorage.setItem('cart', JSON.stringify(newCart));
  //     totalQuantity+=1;
  //     setCart(newCart);
  // };

  // const removeFromCart = (productId) => {
  //     let newCart = cart.filter(id => id !== productId);
  //     localStorage.setItem('cart', JSON.stringify(newCart));
  //     setCart(newCart);
  // };

  //   const updateCart = () => {
  //     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //     setCart(storedCart);
  //   };

  //   // Используем useEffect для инициализации и отслеживания изменений
  //   useEffect(() => {
  //     updateCart(); // Инициализация корзины при монтировании

  //     const handleStorageChange = () => {
  //       updateCart(); // Обновление корзины при изменении в localStorage
  //     };

  //     window.addEventListener("storage", handleStorageChange);

  //     // Очистка эффекта
  //     return () => {
  //       window.removeEventListener("storage", handleStorageChange);
  //     };
  //   }, []);

  // const handleAddToCart = async (product) => {
  //   const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
  //   console.log("EXISTING", existingItems);
  //   try {
  //     {
  //       existingItems.push(product);
  //       localStorage.setItem("cart", JSON.stringify(existingItems));
  //     }
  //     window.dispatchEvent(new Event("storage")); // Обновление других вкладок
  //   } catch (error) {
  //     console.error("Error adding to cart:", error);
  //   }
  // };

  const handleAddToCart = async (product) => {
    const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("EXISTING", existingItems);

    try {
      // Проверка на наличие товара в корзине

      existingItems.push(product);
      localStorage.setItem("cart", JSON.stringify(existingItems));
      getNames(sale, theme, name);
      // Опционально: можно использовать событие для обновления состояния в других вкладках
      window.dispatchEvent(new Event("storage")); // Обновление других вкладок
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

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
          onClick={() => {
            getNames(sale, theme, name);
            setState({ isPaneOpen: true });
          }}
        />
        <p
          className={noir.className}
          onClick={() => {
            getNames(sale, theme, name);
            setState({ isPaneOpen: true });
          }}
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
        {response == null ? (
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Nothing here yet, but you can add 3 stores in total to compare
            prices
          </p>
        ) : (
          // cartLength !== totalQuantity ? (
          //   <>
          //     <Spiner />
          //     <p>Checking latest prices for you...</p>
          //   </>
          // )
          // :
          <div style={{ display: "flex" }}>
            <div>
              <p
                style={{
                  width: "144px",
                  height: "131px",
                  alignContent: "center",
                }}
              >
                <b>Products</b>
              </p>
              {response != null &&
                response[0].items.map((item) => (
                  <>
                    <li
                      style={{
                        display: "flex",
                        borderBottom: "1px solid #ccc",
                        margin: "10px 0",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        alt={item.title}
                        width={30}
                        height={30}
                        src={item.image}
                        style={{ paddingRight: "8px" }}
                      />
                      <p
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          width: "200px",
                        }}
                      >
                        {item.title}
                      </p>
                      <button
                        onClick={() =>
                          decreaseQuantity(item.productID) &&
                          console.log(item.productID)
                        }
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
                      >
                        <Image width={30} height={30} src={minus} alt='minus'/>
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => handleAddToCart(item.productID)}
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
                      >
                        <Image width={30} height={30} src={plus} alt='plus'/>
                      </button>
                    </li>
                  </>
                ))}
            </div>
            <div style={{ display: "flex" }}>
              {response != null &&
                response.map((item) => (
                  <div style={{ paddingLeft: "36px" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          textAlign: "center",
                          width: "144px",
                          height: "95px",
                          alignContent: "center",
                        }}
                      >
                        <b>{item.storetype}:</b>
                        <p>{item.storeName}</p>
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
                        <Image src={del} width={30} height={30} alt='delete' />
                      </button>
                    </div>

                    <>
                      {item.items.map((it) => (
                        <li
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            borderBottom: "1px solid #ccc",
                            marginBottom: "10px",
                          }}
                        >
                          {it.quantity > 1 ? (
                            <p>
                              ${it.prices}
                              {it.saleprice != null ? (
                                <span style={{ color: "rgb(125, 120, 120)" }}>
                                  (${it.saleprice} ea)
                                </span>
                              ) : (
                                <span style={{ color: "rgb(125, 120, 120)" }}>
                                  (${it.regprice} ea)
                                </span>
                              )}
                            </p>
                          ) : (
                            <>
                              {it.stock === "Out of Stock" && (
                                <p style={{ color: "rgb(225, 37, 27)" }}>
                                  Out of Stock ($0)
                                </p>
                              )}
                              {it.non_member_price != null &&
                                it.non_member_price !== 0 && (
                                  <p>${it.non_member_price}</p>
                                )}
                              {it.saleprice != null && it.saleprice !== 0 && (
                                <p>${it.saleprice}</p>
                              )}
                              {it.regprice != null &&
                                it.non_member_price !== 0 && (
                                  <p>${it.regprice}</p>
                                )}
                            </>
                          )}
                        </li>
                      ))}
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          paddingTop: "16px",
                          fontWeight: "700",
                        }}
                      >
                        Total: ${item.totalPrices.toFixed(2)}
                      </p>
                    </>
                  </div>
                ))}
            </div>
          </div>
        )}
      </SlidingPane>
    </div>
  );
};

export default Cart;
