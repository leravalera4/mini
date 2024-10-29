"use client";
import "bootstrap/dist/css/bootstrap.css";
import localFont from "next/font/local";
import sale from "../../app/images/sale.svg";
import cart from "../../app/images/cart.svg";
import chart from "../../app/images/chart.svg";
import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { Carattere, Lora } from "next/font/google";
import { Playfair } from "next/font/google";
import Image from "next/image.js";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import dynamic from "next/dynamic";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import basket from "../../app/images/basket.png";
import "./products.css";
import Loading from "../loaders";
import Ab from "../ab";
import del from "../../app/images/de.svg";
import added from "../../app/images/added.svg";
import Skeleton from "react-loading-skeleton";
import Robot from "../robot/index";
import "react-loading-skeleton/dist/skeleton.css";
import Tour from "../tour/tour.jsx";

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

export default function Component() {
  const [availableStores, setAvailableStores] = useState([]); //тут весь список магазинов
  const [selectedStore, setSelectedStore] = useState(null); //выбранный магазин из списка
  const [locations, setLocations] = useState([]); //массив из всех локаций выбранного магазина
  const [selectedLocation, setSelectedLocation] = useState(null); //выбранная локация магазина
  const [searchText, setSearchText] = useState(null); //то,что вбивается в поиск
  const [selectedLocationValue, setSelectedLocationValue] = useState(null); // номер магазина
  const [selectedLocationsObject, setSelectedLocationsObject] = useState(null); // {'Maxi Gatineau':8388,'Maxi Buckingham':8389,'Maxi Maniwaki':8624}
  const [responseData, setResponseData] = useState([]); //ответ с бэка
  const [selectedStores, setSelectedStores] = useState([]); //весь список магазинов
  const [selectedStoresID, setSelectedStoresID] = useState([]);
  const [selectedAll, setSelectedAll] = useState([]);
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [cartTrigger, setCartTrigger] = useState({});
  const [hideNonMatching, setHideNonMatching] = useState(false);
  const [error, setError] = useState();
  const [isAnimating, setIsAnimating] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [firstTime, setFirstTime] = useState(true);
  const [loading, setLoading] = useState();
  const [selectedSel, setSelectedSel] = useState([]);
  const buttonRef = useRef(null);
  const [st, setSt] = useState();
  const [mur, setMur] = useState();
  const [number, setNumber] = useState();
  const [storesName, setStoresName] = useState();
  const [addedToCart, setAddedToCart] = useState(
    Array(responseData.length).fill(false)
  );
  const [addedToCartImage, setAddedToCartImage] = useState(
    Array(responseData.length).fill(false)
  );
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Предотвращает действие по умолчанию
      buttonRef.current.click(); // Имитирует нажатие кнопки
      event.target.blur(); // Убирает фокус с поля
    }
  };
  // useEffect(() => {
  //   window.addEventListener("storage", () => {
  //     const storedStores = localStorage.getItem("temp");

  //     // Parse the stored state if it exists
  //     if (storedStores) {
  //       const parsedStores = JSON.parse(storedStores);

  //       // Update component state with parsed stored state
  //       setCart(parsedStores);
  //       // Similarly, update other state variables as needed
  //     }
  //   });
  // }, []);

  React.useEffect(() => {
    window.addEventListener("storage", () => {
      const selectedStore = JSON.parse(localStorage.getItem("selectedStore"));
      const selectedLocation = JSON.parse(
        localStorage.getItem("selectedLocation")
      );
      const store1 = JSON.parse(localStorage.getItem("store1"));
      const selectedAll = JSON.parse(localStorage.getItem("selectedAll"));

      //const responseData1 = JSON.parse(localStorage.getItem("responseData1"));
      console.log(selectedStore);
      setSelectedLocation(selectedLocation);
      setSelectedStore(selectedStore);
      setSelectedStoresID(store1);
      // setNumber(store1.length)
      //setResponseData(responseData);
    });
    console.log("STORE1", selectedStoresID);
    console.log("NUMBER", number);
  }, [selectedLocation, selectedStore, selectedAll]);

  React.useEffect(() => {
    const mu = localStorage.getItem("storeSale");
    if (mu) {
      setSelectedAll(JSON.parse(mu));
    } else {
      console.log("stores_1234 is not found in localStorage.");
      setMur(null); // или другое значение по умолчанию
    }
  }, []); // Этот useEffect срабатывает только при монтировании компонента

  React.useEffect(() => {
    console.log("MUR updated:", mur);
  }, [mur]); // Логирование при изменении `mur`

  console.log("mimimi", selectedAll);
  console.log("MUR", mur);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/stores")
      .then((response) => {
        setAvailableStores(response.data);
      })
      .catch((error) => {
        setError("Error fetching available stores");
        console.error("Error fetching available stores:", error);
      });
  }, []); // получаем список магазинов

  const handleStoreChange = async (selectedStore) => {
    setSelectedStore(selectedStore); // сюда кладем выбранный из списка магазин (из массива выбираем один из)
    localStorage.setItem("selectedStore", JSON.stringify(selectedStore));
    console.log(selectedStore);
    const store = JSON.parse(localStorage.getItem("selectedStore"));
    console.log(store);
    try {
      const response = await axios.get(
        `http://localhost:8080/api/stores/${selectedStore}`
      );

      if (response.status === 200) {
        const locationsObject = response.data.locations; // сюда приходят все локации выбранного магазина в формате Maxi Lon:3456
        const locationsArray = Object.keys(locationsObject); // сюда берутся только имена магазинов (ключи)
        setLocations(locationsArray); // сюда кладутся все локации выбранного магазина
        setSelectedLocationsObject(locationsObject); // сюда кладутся пришедшие с бека данные вида {'Maxi Gatineau':8388,'Maxi Buckingham':8389,'Maxi Maniwaki':8624}}
        // console.log(selectedLocationsObject);
      } else {
        setError(
          `Error fetching locations. Server returned: ${response.status}`
        );
        console.error(
          "Error fetching locations. Server returned:",
          response.status
        );
      }
    } catch (error) {
      setError(`Error fetching locations: ${error.message}`);
      console.error("Error fetching locations:", error.message);
    }
  };

  let getStores;

  const handleSearchChange = (event) => {
    // тут ищем продукт
    setSearchText(event.target.value);
    // getStores = localStorage.getItem("stores");
    // console.log(getStores);
  };

  const handleLocationChange = async (selectedLocation) => {
    // выбираем локацию из списка
    const newSelectedLocationValue = selectedLocationsObject[selectedLocation]; // извлекаем их объекта значение, связанное с ключом selectedLocation
    setSelectedLocationValue(newSelectedLocationValue); // тут теперь хранится value(цифра) выбранной локации
    setSelectedLocation(selectedLocation); // тут только имя локации
    localStorage.setItem("selectedLocation", JSON.stringify(selectedLocation));
  };

  //const getStoresFromLocalStorage = localStorage.getItem("stores") || [];

  //   const handleButtonClick = async () => {
  //     setLoading(true);
  //     const selectedStoresID = JSON.parse(localStorage.getItem("stores1"));
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:8080/api/updateLocation",
  //         {
  //           selectedStoresID: selectedStoresID,
  //           searchText: searchText,
  //         }
  //       );
  //       setLoading(false);
  //       setFirstTime(false);
  //       //console.log('Данные успешно отправлены на бэкенд', response.data)
  //       const responseData = response.data;
  //       responseData.sort((a, b) => b.products.length - a.products.length);
  //       console.log("Tyt data", responseData);
  //       setResponseData(responseData);
  //      setAddedToCartImage(Array(responseData.length).fill(false));

  //   const getStorage = localStorage.getItem("stores") || [];
  //   console.log(getStorage)
  //   console.log(selectedStoresID); //тут нужные циферки

  //   let id;
  //   getStorage.forEach((item) => {
  //     id = item[item];
  //   });

  //getStoresFromLocalStorage.push(id);

  // localStorage.setItem('stores', JSON.stringify(selectedStoresID));

  //const getStorage = localStorage.getItem("stores");
  //   let storesArray;

  //   if (getStorage) {
  //     storesArray = JSON.parse(getStorage); // Parse the retrieved value as JSON
  //   } else {
  //     storesArray = []; // If no value is retrieved or it's not valid JSON, initialize storesArray as an empty array
  //   }

  // console.log(getStorage);
  // console.log(selectedStoresID); // Assuming this is where you get your desired IDs

  //       selectedStoresID.forEach((id) => {
  //         storesArray.push(id); // Push each selectedStoresID into storesArray
  //       });
  //       localStorage.setItem("stores", JSON.stringify(storesArray));

  //       const getStorage = localStorage.getItem("stores_1234");
  //       const getStorage1 = localStorage.getItem("stores1");

  //       let storesSet = new Set();
  //       let storesSet1 = new Set();

  //       if (getStorage) {
  //         storesSet = new Set(JSON.parse(getStorage)); // Parse the retrieved value as JSON and initialize storesSet as a Set
  //       }

  //       if (getStorage1) {
  //         storesSet1 = new Set(JSON.parse(getStorage1)); // Parse the retrieved value as JSON and initialize storesSet as a Set
  //       }

  //       console.log(getStorage);
  //       console.log("SELECTED STORES ID", selectedStoresID);

  //       // Add selectedStoresID to the storesSet to ensure uniqueness
  //       selectedStoresID.forEach((id) => {
  //         storesSet.add(id);
  //       });

  //       selectedStoresID.forEach((id) => {
  //         storesSet1.add(id);
  //       });

  //       // Convert the storesSet back to an array before storing in localStorage
  //       const storesArray = Array.from(storesSet);
  //       const storesArray1 = Array.from(storesSet1);

  //       // Update "stores" key in localStorage with the updated storesArray
  //      localStorage.setItem("stores_1234", JSON.stringify(storesArray));
  //       localStorage.setItem("stores1", JSON.stringify(storesArray1));
  //       console.log("Here is the data", responseData);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error("Ошибка при отправке данных на бэкенд", error);
  //     }
  //   };

  const handleButtonClick = async () => {
    setLoading(true);
    const selectedStoresID = JSON.parse(localStorage.getItem("stores1")) || [];

    try {
      const response = await axios.post(
        "http://localhost:8080/api/updateLocation",
        {
          selectedStoresID: selectedStoresID,
          searchText: searchText,
        }
      );

      const responseData = response.data;
      console.log("RESPONSE LERA", responseData);
      responseData.sort((a, b) => b.products.length - a.products.length);
      console.log("Tyt data", responseData);
      setResponseData(responseData);
      setAddedToCartImage(Array(responseData.length).fill(false));

      // Обновление localStorage
      localStorage.setItem("stores", JSON.stringify(selectedStoresID));

      // Обработка stores
      //const storage1234 = localStorage.getItem("stores_1234");
      const storage1 = localStorage.getItem("stores1");

      // let storesSet = new Set();
      let storesSet1 = new Set();

      // Безопасное парсинг
      try {
        // if (storage1234) {
        //   storesSet = new Set(JSON.parse(storage1234));
        // }
        if (storage1) {
          storesSet1 = new Set(JSON.parse(storage1));
        }
      } catch (error) {
        console.error("Ошибка при парсинге данных из localStorage", error);
      }

      console.log("SELECTED STORES ID", selectedStoresID);

      // Добавление уникальных значений
      selectedStoresID.forEach((id) => {
        //storesSet.add(id);
        storesSet1.add(id);
      });

      // Обновление localStorage
      const updateLocalStorage = (key, array) => {
        localStorage.setItem(key, JSON.stringify(array));
      };

      // updateLocalStorage("stores_1234", Array.from(storesSet));
      updateLocalStorage("stores1", Array.from(storesSet1));

      console.log("Here is the data", responseData);
    } catch (error) {
      console.error("Ошибка при отправке данных на бэкенд", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddStore = () => {
    setLoading(true);
    const existingStores = JSON.parse(localStorage.getItem("stores1"));
    if (!selectedStores.includes(selectedLocation)) {
      setSelectedStores([...selectedStores, selectedLocation]); // кладем выбранные локации в массив
      const newSelectedLocationValue =
        selectedLocationsObject[selectedLocation]; // извлекаем их объекта значение, связанное с ключом selectedLocation
      const newStoreLocationObject = {
        store: selectedStore,
        location: selectedLocation,
        id: newSelectedLocationValue,
      };

      const storesNames = JSON.parse(localStorage.getItem("storesName")) || [];
      if (
        !storesNames.some((store) => store.id === newStoreLocationObject.id)
      ) {
        storesNames.push(newStoreLocationObject);
        localStorage.setItem("storesName", JSON.stringify(storesNames));
        setStoresName(storesNames);
      }

      setSelectedAll((prevSelectedAll) => [
        ...prevSelectedAll,
        newStoreLocationObject,
      ]);

      const selectedAll = JSON.parse(localStorage.getItem("selectedAll")) || [];
      if (!selectedAll.includes(newStoreLocationObject)) {
        storesNames.push(newStoreLocationObject);
        localStorage.setItem("selectedAll", JSON.stringify(selectedAll));
      }
      const storesNames1 = JSON.parse(localStorage.getItem("sel")) || [];

      if (!storesNames1.includes(newStoreLocationObject)) {
        storesNames1.push(newStoreLocationObject);
        localStorage.setItem("sel", JSON.stringify(storesNames1));
      }
      const names1 = JSON.parse(localStorage.getItem("stores1")) || [];

      if (!names1.includes(newStoreLocationObject.id)) {
        names1.push(newStoreLocationObject.id);
        localStorage.setItem("stores1", JSON.stringify(names1));
      }
      setSelectedSel(storesNames1);
      setSelectedStoresID(existingStores);
      console.log(selectedSel);
      setSelectedLocationValue(newSelectedLocationValue); // сюда кладем номер каждого магазина
      //setSelectedStoresID([...selectedStoresID, newSelectedLocationValue]); // получаем массив из номеров магазинов
      //  setFirstTime(false);
      setLoading(false);
      if (searchText && searchText.length > 0) {
        handleButtonClick();
      }
      //localStorage.setItem("stores1",JSON.stringify(selectedStoresID))
      // const existingStores = JSON.parse(localStorage.getItem("stores1")) || [];
      // if (!storesNames1.includes(newStoreLocationObject.id)) {
      //   localStorage.setItem("stores1", JSON.stringify(existingStores));
      // }
    }
  };

  const inc = (index) => {
    responseData[index].count += 1;
    responseData[index].cart = true;
  };

  console.log("cart", cart);
  //console.log(cartData);

  //   const handleAddToCart = async (product, index) => {
  //     const arrayOfStores = JSON.parse(localStorage.getItem("stores_1234")) || [];
  //     localStorage.setItem("stores_1234", JSON.stringify(arrayOfStores));
  //     console.log("Array of stores", arrayOfStores);

  //     const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
  //     const title = JSON.parse(localStorage.getItem("names")) || [];
  //     console.log("EXISTING", existingItems);

  //     try {
  //         inc(index);
  //         console.log(existingItems);

  //         const updatedCart = cart.map((shop) => ({ ...shop }));

  //         // Перемещаем сохранение updatedCart в temp сразу после его обновления
  //         localStorage.setItem("temp", JSON.stringify(updatedCart));

  //         for (const item of product.products) {
  //             const storeIndex = updatedCart.findIndex(
  //                 (store) => store.storeID === item.storeID
  //             );

  //             if (storeIndex === -1) {
  //                 updatedCart.push({
  //                     storeID: item.storeID,
  //                     storeName: item.store,
  //                     items: [
  //                         {
  //                             name: product.title,
  //                             id: item.productID,
  //                         },
  //                     ],
  //                 });

  //                 // Сохраняем storeID в отдельный localStorage
  //                 const existingStoreIDs = JSON.parse(localStorage.getItem("stores_1234")) || [];
  //                 existingStoreIDs.push(item.storeID);
  //                 localStorage.setItem("stores_1234", JSON.stringify(existingStoreIDs));
  //             } else {
  //                 updatedCart[storeIndex].items.push({
  //                     name: product.title,
  //                     id: item.productID,
  //                 });
  //             }
  //         }

  //         let id;
  //         let name;

  //         updatedCart[0].items.forEach((item) => {
  //             id = item.id;
  //             name = item.name;
  //         });

  //         existingItems.push(id);
  //         title.push(name);

  //         console.log("names", title);
  //         console.log("existing", existingItems);

  //         localStorage.setItem("cart", JSON.stringify(existingItems));
  //         localStorage.setItem("names", JSON.stringify(title));

  //         const updatedAddedToCart = [...addedToCart];
  //         updatedAddedToCart[index] = true;
  //         setAddedToCart(updatedAddedToCart);

  //         const updatedAddedToCartImage = [...addedToCartImage];
  //         updatedAddedToCartImage[index] = true;
  //         setAddedToCartImage(updatedAddedToCartImage);
  //         setCart(updatedCart); // Обновляем состояние корзины

  //         if (!existingItems.includes(id)) {
  //             localStorage.setItem("cart", JSON.stringify(existingItems));
  //             window.dispatchEvent(new Event("storage"));
  //         } else {
  //             console.log("Item already exists in the cart.");
  //         }

  //         if (!title.includes(name)) {
  //             localStorage.setItem("names", JSON.stringify(title));
  //             window.dispatchEvent(new Event("storage"));
  //         }

  //         const existingTempData = JSON.parse(localStorage.getItem("temp"));
  //         console.log(existingTempData);
  //         if (existingTempData !== null && existingTempData !== undefined) {
  //             localStorage.setItem("temp", JSON.stringify(updatedCart));
  //             console.log(updatedCart);
  //         }
  //     } catch (error) {
  //         console.error("Error adding to cart:", error);
  //         // Обработка ошибок
  //     }
  // };

  // const handleAddToCart = async (product, index) => {
  //   const arrayOfStores = JSON.parse(localStorage.getItem("stores_1234")) || [];
  //   console.log("Array of stores", arrayOfStores);

  //   const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
  //   const title = JSON.parse(localStorage.getItem("names")) || [];
  //   console.log("EXISTING", existingItems);

  //   try {
  //     inc(index);
  //     const updatedCart = [...cart]; // Создаем копию корзины

  //     // Обновляем корзину
  //     for (const item of product.products) {
  //       const storeIndex = updatedCart.findIndex(
  //         (store) => store.storeID === item.storeID
  //       );
  //       if (storeIndex === -1) {
  //         updatedCart.push({
  //           storeID: item.storeID,
  //           storeName: item.store,
  //           items: [{ name: product.title, id: item.productID }],
  //         });

  //         // Сохраняем storeID в отдельный localStorage
  //         const existingStoreIDs =
  //           JSON.parse(localStorage.getItem("stores_1234")) || [];
  //         if (!existingStoreIDs.includes(item.storeID)) {
  //           existingStoreIDs.push(item.storeID);
  //           localStorage.setItem(
  //             "stores_1234",
  //             JSON.stringify(existingStoreIDs)
  //           );
  //         }
  //       } else {
  //         // Проверка на существование товара в магазине
  //         const itemExists = updatedCart[storeIndex].items.some(
  //           (i) => i.id === item.productID
  //         );
  //         if (!itemExists) {
  //           updatedCart[storeIndex].items.push({
  //             name: product.title,
  //             id: item.productID,
  //           });
  //         }
  //       }
  //     }

  //     // Извлечение уникальных id и name
  //     const uniqueItems = updatedCart.flatMap((store) => store.items);
  //     const newIds = uniqueItems
  //       .map((item) => item.id)
  //       .filter((id) => !existingItems.includes(id));
  //     const newNames = uniqueItems
  //       .map((item) => item.name)
  //       .filter((name) => !title.includes(name));

  //     // Обновление localStorage
  //     if (newIds.length > 0) {
  //       existingItems.push(...newIds);
  //       localStorage.setItem("cart", JSON.stringify(existingItems));
  //     }

  //     if (newNames.length > 0) {
  //       title.push(...newNames);
  //       localStorage.setItem("names", JSON.stringify(title));
  //     }

  //     console.log("names", title);
  //     console.log("existing", existingItems);

  //     setAddedToCart((prev) => {
  //       const updatedAddedToCart = [...prev];
  //       updatedAddedToCart[index] = true;
  //       return updatedAddedToCart;
  //     });

  //     setAddedToCartImage((prev) => {
  //       const updatedAddedToCartImage = [...prev];
  //       updatedAddedToCartImage[index] = true;
  //       return updatedAddedToCartImage;
  //     });

  //     setCart(updatedCart);
  //     localStorage.setItem("temp", JSON.stringify(updatedCart));

  //     window.dispatchEvent(new Event("storage")); // Обновление других вкладок
  //   } catch (error) {
  //     console.error("Error adding to cart:", error);
  //   }
  // };  //ласт

  const handleAddToCart = async (product, index) => {
    const arrayOfStores = JSON.parse(localStorage.getItem("stores_1234")) || [];
    console.log("Array of stores", arrayOfStores);

    const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
    const title = JSON.parse(localStorage.getItem("names")) || [];
    console.log("EXISTING", existingItems);

    try {
      inc(index);
      const updatedCart = [...cart]; // Создаем копию корзины
      let newId = null; // Переменная для хранения нового id

      // Обновляем корзину
      for (const item of product.products) {
        const storeIndex = updatedCart.findIndex(
          (store) => store.storeID === item.storeID
        );

        if (storeIndex === -1) {
          updatedCart.push({
            storeID: item.storeID,
            storeName: item.store,
            items: [{ name: product.title, id: item.productID }],
          });

          // Сохраняем storeID в отдельный localStorage
          const existingStoreIDs =
            JSON.parse(localStorage.getItem("stores_1234")) || [];
          if (!existingStoreIDs.includes(item.storeID)) {
            existingStoreIDs.push(item.storeID);
            localStorage.setItem(
              "stores_1234",
              JSON.stringify(existingStoreIDs)
            );
            setSt(existingStoreIDs);
          }
        } else {
          // Добавляем товар в существующий магазин
          updatedCart[storeIndex].items.push({
            name: product.title,
            id: item.productID,
          });
        }

        // Устанавливаем newId
        newId = item.productID; // Обновляем newId на каждом шаге
      }

      // Добавляем id в существующие элементы
      if (newId) {
        existingItems.push(newId);
        localStorage.setItem("cart", JSON.stringify(existingItems));
      }

      // Добавляем название, если его нет в existingNames
      const newName = product.title;
      if (!title.includes(newName)) {
        title.push(newName);
        localStorage.setItem("names", JSON.stringify(title));
      }

      console.log("names", title);
      console.log("existing", existingItems);

      setAddedToCart((prev) => {
        const updatedAddedToCart = [...prev];
        updatedAddedToCart[index] = true;
        return updatedAddedToCart;
      });

      setAddedToCartImage((prev) => {
        const updatedAddedToCartImage = [...prev];
        updatedAddedToCartImage[index] = true;
        return updatedAddedToCartImage;
      });

      setCart(updatedCart);
      localStorage.setItem("temp", JSON.stringify(updatedCart));

      window.dispatchEvent(new Event("storage")); // Обновление других вкладок
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  console.log("selectedAll", selectedAll);
  console.log(selectedStoresID);

  // const mango = JSON.parse(localStorage.getItem("stores_1234")) || [];
  // const includedIds = new Set(mango);
  // console.log("INC",includedIds)

  const selectedAllLength = selectedAll.length;
  localStorage.setItem("storesLength", selectedAllLength);
  console.log("LENGTH LERA", selectedAllLength);
  //   localStorage.setItem("length", JSON.stringify(selectedAllLength));

  //   const removeStore = (storeId) => {
  //     // Filter out the store with the given ID from the data array
  //     const updatedData = selectedAll.filter((store) => store.id !== storeId);
  //     // Update the data array with the filtered data
  //     //setSelectedStoresID(updatedData);
  //     setSelectedAll(updatedData);
  //     console.log(updatedData);

  // //     const up = responseData.map((item) =>
  // //     item.products.filter((product) => product.storeID !== storeId)
  // // );
  // //     console.log(up);

  //     //console.log("Filtered Local Storage Data:", filteredLocalStorageData);

  //     const get = JSON.parse(localStorage.getItem("stores"));
  //     if (get) {
  //       console.log(get);
  //       const da = get.filter((store) => store !== storeId);
  //       console.log(da);
  //       //selectedStoresID(da)
  //       localStorage.setItem("stores", JSON.stringify(da));
  //     }

  //     function removeProductByID(data, productID) {
  //       return data.products.filter(product => product.productID !== productID);
  //   }

  //   // Assign the modified products array to a new variable
  //   let newData = {
  //       ...data,
  //       products: removeProductByID(responseData, storeId)
  //   };

  //   };

  // const removeStore = (storeId) => {
  //   // Filter out the store with the given ID from the data array
  //   const updatedData = selectedAll.filter((store) => store.id !== storeId);
  //   const stores = JSON.parse(localStorage.getItem("stores1"));
  //   setSelectedAll(updatedData);

  //   console.log("updatedData",updatedData)
  //   console.log("selectedStoresID",selectedStoresID)

  //   const updatedStoresID = stores.filter(
  //     (store) => store !== storeId
  //   );

  //   console.log("updated",updatedStoresID)
  //   setSelectedStoresID(updatedStoresID)
  //   // Update local storage
  //   const localStorageData = JSON.parse(localStorage.getItem("stores"));
  //   const all = JSON.parse(localStorage.getItem("sel"));
  //   const names = JSON.parse(localStorage.getItem("storesName"));

  //   if (localStorageData) {
  //     const updatedLocalStorageData = localStorageData.filter(
  //       (store) => store !== storeId
  //     );
  //     localStorage.setItem("stores", JSON.stringify(updatedLocalStorageData));
  //   }

  //   if (stores) {
  //     const updatedLocalStorageData = stores.filter(
  //       (store) => store !== storeId
  //     );
  //     localStorage.setItem("stores1", JSON.stringify(updatedLocalStorageData));
  //     setSelectedStoresID(updatedLocalStorageData)
  //   }

  //   if (all) {
  //     const updatedLocalStorageData = all.filter(
  //       (store) => store.id !== storeId
  //     );
  //     localStorage.setItem("sel", JSON.stringify(updatedLocalStorageData));
  //   }
  //   if (names) {
  //     const updatedLocalStorageData = all.filter(
  //       (store) => store.id !== storeId
  //     );
  //     localStorage.setItem("storesName", JSON.stringify(updatedLocalStorageData));
  //   }

  //   // Remove associated products
  //   const updatedResponseData = responseData.map((item) => ({
  //     ...item,
  //     products: removeProductByID(item.products, storeId),
  //   }));

  //   console.log(updatedstoresResponseData);

  //   function removeProductByID(products, storeId) {
  //     return products.filter((product) => product.storeID.toString() !== storeId.toString());
  //   }

  //   handleButtonClick();

  // };  //тут удаление было
  console.log("SELECTEDSEL", selectedSel);

  const removeStore = (storeId) => {
    const data = JSON.parse(localStorage.getItem("stores1"));
    console.log(data);
    // const updatedData = JSON.parse(localStorage.getItem("sel"));
    // // const updatedData3 = JSON.parse(localStorage.getItem("storesName"));
    // // Filter out the store with the given ID from the data array

    // const updatedData1 = updatedData.filter((store) => store.id != storeId);

    let updatedData = JSON.parse(localStorage.getItem("sel"));

    if (!updatedData) {
      updatedData = JSON.parse(localStorage.getItem("storesName"));
    }

    // Filter out the store with the given ID from the data array
    const updatedData1 = updatedData.filter((store) => store.id != storeId);

    // const updatedData4 = updatedData3.filter((store) => store.id != storeId);
    localStorage.setItem("sel", JSON.stringify(updatedData1));
    // localStorage.setItem("storesName", JSON.stringify(updatedData4));
    setSelectedAll(updatedData1);
    // setStoresName(updatedData4);
    const da = data.filter((store) => store != storeId);
    console.log("da", da);

    //const updatedData2 = JSON.parse(localStorage.getItem("stores_1234"));
    // let stores;
    // if (updatedData2) {
    //   stores = updatedData2.filter((store) => store != storeId);
    // }
    // setSt(stores);
    // console.log("da", da);

    // if (updatedData.length < 1) {
    //   localStorage.removeItem("cart");
    //   localStorage.removeItem("names");
    // }
    localStorage.setItem("stores1", JSON.stringify(da));

    //localStorage.setItem("stores_1234", JSON.stringify(stores));
    setSelectedStores(selectedAll.map((item) => item.location));
    console.log(selectedStores);
    setSelectedStoresID(da);
    setSelectedStores(selectedAll);
    handleButtonClick();
  };

  React.useEffect(() => {
    window.addEventListener("storage", () => {
      const selectedStore = JSON.parse(localStorage.getItem("selectedStore"));
      const selectedLocation = JSON.parse(
        localStorage.getItem("selectedLocation")
      );
      const selectedAll = JSON.parse(localStorage.getItem("sel"));
      const stores1 = JSON.parse(localStorage.getItem("stores1"));
      console.log("lalala", selectedLocation);
      console.log("lalalalalal", selectedStore);
      console.log("lalala", selectedAll);
      console.log("stores_1234", stores1);
    });
  }, [selectedLocation, selectedStore, selectedAll]);

  useEffect(() => {
    // Function to handle changes in localStorage
    const handleStorageChange = () => {
      const sale = JSON.parse(localStorage.getItem("selectedStore"));
      const selectedAll = JSON.parse(localStorage.getItem("sel"));
      console.log("SEL", selectedAll);
      //const selectedAll = JSON.parse(localStorage.getItem("storesName")); //(here)
      const storedResponseData = JSON.parse(
        localStorage.getItem("selectedLocation")
      );
      const stores1 = JSON.parse(localStorage.getItem("stores1"));
      // const stores1 = JSON.parse(
      //   localStorage.getItem("stores1")
      // );
      const cartNames = JSON.parse(localStorage.getItem("selectedAll"));
      if (cartNames) {
        setSelectedAll(cartNames);
      }
      if (sale) {
        setSelectedStore(sale);
        handleStoreChange(sale);
      }
      if (storedResponseData) {
        setSelectedLocation(storedResponseData);
      }
      if (selectedAll) {
        setSelectedAll(selectedAll);
      }
      // if (stores1) {
      //   setSelectedStoresID(stores1);
      // }
    };
    console.log("SELECTED ALL", selectedAll);
    // Initial setup from localStorage
    handleStorageChange();

    // Listen for changes in localStorage
    window.addEventListener("storage", handleStorageChange);

    // Cleanup function
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <div
        className="container main-content"
        style={{
          // boxSizing: "border-box",
          // width: "100%",
          // paddingRight: "var(--bs-gutter-x,.75rem)",
          // paddingLeft: "var(--bs-gutter-x,.75rem)",
          // marginRight: "auto",
          // marginLeft: "auto",
          // maxWidth: "1320px",
          minHeight: "100vh",
        }}
      >
        <div style={{ boxSizing: "border-box" }} />
        <div className="homepage" style={{ boxSizing: "border-box" }}>
          <div
            style={{
              boxSizing: "border-box",
              marginBottom: "2em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              /* height: 100vh; */
              textAlign: "center",
            }}
          >
            <div
              className="col-lg-8"
            >
              <h3
                className={noir.className}
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  marginBottom: "0.5rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  fontSize: "1.75rem",
                }}
              >
                Products on Sale
              </h3>
              <p className={noir.className}>
                {" "}
                Select the stores you'd like to compare prices for various
                products
              </p>
              <form style={{ boxSizing: "border-box" }}>
                <div
                  className="hstack gap-2 minBreakpoint-xs"
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "stretch",
                    gap: "0.5rem",
                  }}
                >
                  <select
                    className={noir.className}
                    style={{
                      width: "210px",
                      height: "38px",
                      padding: "0.375rem 2.25rem 0.375rem 0.75rem",
                      fontSize: "1rem",
                      fontWeight: "400",
                      lineHeight: "1.5",
                      color: "#212529",
                      backgroundColor: "#fff",
                      border: "1px solid #ced4da",
                      borderRadius: "0.25rem",
                      transition:
                        "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                    }}
                    onChange={(e) => handleStoreChange(e.target.value)}
                    value={selectedStore}
                  >
                    <option className={noir.className} value="">
                      Select...
                    </option>
                    {availableStores.map((store) => (
                      <option
                        className={noir.className}
                        key={store}
                        value={store}
                      >
                        {store}
                      </option>
                    ))}
                  </select>
                  <>
                    {selectedStore && (
                      <select
                        className="form-select"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          textTransform: "none",
                          overflowWrap: "normal",
                          padding: "0.375rem 2.25rem 0.375rem 0.75rem",
                          backgroundPosition: "right 0.75rem center",
                          border: "1px solid rgb(206, 212, 218)",
                          borderRadius: "0.25rem",
                          transition:
                            "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                          display: "block",
                          width: "100%",
                          fontSize: "1rem",
                          fontWeight: 400,
                          lineHeight: 1.5,
                          color: "rgb(33, 37, 41)",
                          backgroundColor: "rgb(255, 255, 255)",
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\")",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "16px 12px",
                          appearance: "none",
                        }}
                        onChange={(e) => handleLocationChange(e.target.value)}
                        value={selectedLocation}
                      >
                        <option value="">Select...</option>
                        {locations.map((location, index) => (
                          <option
                            className={noir.className}
                            key={index}
                            value={location}
                          >
                            {location}
                          </option>
                        ))}
                      </select>
                    )}
                  </>

                  {selectedLocation && <button
                    className="d-none d-sm-block btn btn-primary"
                    type="submit"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      fontFamily: "inherit",
                      textTransform: "none",
                      appearance: "button",
                      textDecoration: "none",
                      border: "1px solid transparent",
                      padding: "0.375rem 0.75rem",
                      borderRadius: "0.25rem",
                      transition:
                        "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                      fontWeight: 400,
                      lineHeight: 1.5,
                      textAlign: "center",
                      verticalAlign: "middle",
                      userSelect: "none",
                      fontSize: "1rem",
                      borderColor: "rgb(13, 110, 253)",
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(13, 110, 253)",
                      cursor: "pointer",
                      display: "block",
                    }}
                  >
                    Search
                  </button>}
                </div>
              </form>
            </div>
          </div>
          <p
            className={noir.className}
            //className="lead"
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              marginBottom: "1rem",
              fontSize: "1.25rem",
              fontWeight: 700,
            }}
          >
            Welcome to Shoppy Scan, your ultimate companion for savvy shopping
            and significant savings!
          </p>
          <h4
            className={noir.className}
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            <Image src={chart} width={40} height={40} alt="chart" />
            Compare Prices in Different Stores
          </h4>
          <p
            className={noir.className}
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              marginBottom: "1rem",
            }}
          >
            Easily compare the prices of your favorite products across various
            stores to ensure you're getting the best deals. Shoppy Scan empowers
            you to make informed decisions, helping you save on every item on
            your shopping list.
          </p>
          <h4
            className={noir.className}
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            <Image src={sale} width={40} height={40} alt="chart" />
            Check What's on Sale
          </h4>
          <p
            className={noir.className}
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              marginBottom: "1rem",
            }}
          >
            Stay in the loop with the latest discounts and promotions. Shoppy
            Scan allows you to quickly identify products currently on sale,
            making it a breeze to capitalize on special offers and maximize your
            savings.
          </p>
          <h4
            className={noir.className}
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            <Image src={cart} width={40} height={40} alt="chart" />
            Add to Cart for Easy Tracking and Comparison
          </h4>
          <p
            className={noir.className}
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              marginBottom: "1rem",
            }}
          >
            Simplify your shopping strategy by adding items to your virtual
            cart. Keep track of products you're interested in purchasing and
            receive updates on their prices. With Shoppy Scan, you can easily
            compare prices in your cart across different stores, ensuring you
            never miss out on a great deal.
          </p>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  box-sizing: border-box;
  margin: 0px;
  font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: var(--bs-body-text-align);
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  background: rgb(239, 238, 234);
  background-color: rgb(239, 238, 234);
}
`,
        }}
      />
    </>
  );
}
