 const handleAddStore = async (storeId) => {
    setLoading(true);

    // Делаем проверки (например, если не выбран магазин, то возвращаемся)
    if (!storeId) {
      console.warn("Store ID not selected!");
      setLoading(false);
      return;
    }

    const selectedStore = storeSale.find((store) => store.id === storeId);
    if (!selectedStore) {
      console.warn("Store not found!");
      setLoading(false);
      return;
    }

    // Здесь мы собираем все нужные данные для новой записи
    const selectedLocation = selectedStore.location;
    const newSelectedLocationValue = selectedStore.id;
    console.log("newSelectedLocationValue", newSelectedLocationValue); // ID выбранного магазина

    setLocValue(newSelectedLocationValue); // сохраняем ID магазина в состояние

    const newStoreLocationObject = {
      store: selectedStore.store,
      location: selectedLocation,
      id: newSelectedLocationValue,
    };

    const storesNames = JSON.parse(localStorage.getItem("storesName")) || [];

    const LALALA = JSON.parse(localStorage.getItem("LALALA")) || [];
    LALALA.push(newSelectedLocationValue);
    localStorage.setItem("LALALA", JSON.stringify(LALALA));

    const isDuplicate = storesNames.some(
      (store) =>
        store.store === newStoreLocationObject.store &&
        store.location === newStoreLocationObject.location
    );

    if (!isDuplicate) {
      storesNames.push(newStoreLocationObject);
      localStorage.setItem("storesName", JSON.stringify(storesNames));
    } else {
      console.log("Этот магазин уже существует!");
    }

    console.log("newStoreLocationObject", newStoreLocationObject);

    let idExists;

    const saveCartData = (newStoreLocationObject) => {
      localStorage.setItem("sale", JSON.stringify(newStoreLocationObject));
    };
    saveCartData(newStoreLocationObject);
    const storedData = JSON.parse(localStorage.getItem("sale"));
    console.log("storedData", storedData);
    setStoredDat(storedData);

    setSelectedStore(storedData.store);
    setSelectedLocation(storedData.location);
    console.log("selectedStore", selectedStore);

    try {
      // Отправляем запрос на сервер с ID магазина в массиве
      const response = await axios.post("http://localhost:8080/api/sale", {
        selectedStoresID: [newSelectedLocationValue], // массив с ID
      });

      const storesData = response.data;
      setResponseData(storesData);
      console.log("responseData", responseData);

      localStorage.setItem("responseData", JSON.stringify(storesData));
      window.dispatchEvent(new Event("storage"));

      const handleAddToCart = (index) => {
        const arrayOfItems = [];
        const selectedItem = storesData[index];

        const ItemCode = selectedItem.productID;
        localStorage.setItem("storedField", ItemCode);
      };

      setLoading(false);
      setFirstTime(false);
      saveCartData(newStoreLocationObject);
    } catch (error) {
      console.error("Error fetching stores data:", error.message);
    }
  };
