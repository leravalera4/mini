{it.quantity > 1 ? (
    <p>
      ${it.prices}
      {it.saleprice != null ? (
        <span
          style={{
            color: "rgb(125, 120, 120)",
            marginLeft: "4px",
          }}
        >
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
          <p style={{ color: "rgb(225, 37, 27)" }}>
            NON MEMBER ${it.non_member_price}
          </p>
        )}
      {it.saleprice !== null &&
        it.saleprice !== 0 &&
        it.non_member_price && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <span style={{ color: "rgb(225, 37, 27)",}}>On sale</span> */}
            <p
              style={{
                color: "rgb(225, 37, 27)",
                paddingLeft: "4px",
              }}
            >
              SALE PRICE ${it.saleprice}
            </p>
            <s
              style={{ color: "rgb(125, 120, 120)" }}
            >
              WAS PRICE (${it.wasprice} ea)
            </s>
          </div>
        )}
      {it.regprice != null &&
        it.non_member_price !== 0 && (
          <p>REG PRICE ${it.regprice}</p>
        )}
      {it.non_member_price !== null &&
        it.quantity > 1 && (
          <p>SALE NON ${it.saleprice}</p>
        )}
    </>
  )}



  {it.quantity > 1 &&
    it.non_member_price == null &&
    it.regprice == null ? (
      <p style={{ color: "rgb(225, 37, 27)" }}>
        PRICES ${it.prices}
        {it.saleprice != null 
        ? 
        (
          <span
            style={{
              color: "rgb(125, 120, 120)",
              marginLeft: "4px",
            }}
          >
            (SALEPRICE ${it.saleprice} ea)
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
            <p style={{ color: "rgb(225, 37, 27)" }}>
              NON MEMBER ${it.non_member_price}
            </p>
          )}
        {it.saleprice !== null &&
          it.saleprice !== 0 &&
          it.non_member_price && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <span style={{ color: "rgb(225, 37, 27)",}}>On sale</span> */}
              <p
                style={{
                  color: "rgb(225, 37, 27)",
                  paddingLeft: "4px",
                }}
              >
                SALE PRICE ${it.saleprice}
              </p>
              <s
                style={{ color: "rgb(125, 120, 120)" }}
              >
                WAS PRICE (${it.wasprice} ea)
              </s>
            </div>
          )}
        {it.regprice != null &&
          it.non_member_price !== 0 && (
            <p>REG PRICE ${it.regprice}</p>
          )}
        {it.non_member_price == null &&
          it.regprice == null && (
            <p style={{ color: "rgb(225, 37, 27)" }}>
              ONLY SALE ${it.saleprice}
            </p>
          )}
      </>
    )}



    {item.items.map((it) => (
        <li
          style={{
            display: "flex",
            justifyContent: "center",
            borderBottom: "1px solid #ccc",
            marginBottom: "10px",
          }}
        >
          {
          
          it.quantity > 1 &&
          it.non_member_price == null &&
          it.regprice == null ? (
            <p style={{ color: "rgb(225, 37, 27)" }}>
              PRICES ${it.prices}
              {it.saleprice != null ? (
                <span
                  style={{
                    color: "rgb(125, 120, 120)",
                    marginLeft: "4px",
                  }}
                >
                  (SALEPRICE ${it.saleprice} ea)
                </span>
              ) : (
                <span style={{ color: "rgb(125, 120, 120)" }}>
                  (${it.regprice} ea)
                </span>
              )}
            </p>
          ) : it.quantity > 1 ? (
            <p>
              PRICES ${it.prices}
              {it.saleprice != null ? (
                <span
                  style={{
                    color: "rgb(125, 120, 120)",
                    marginLeft: "4px",
                  }}
                >
                  (SALEPRICE ${it.saleprice} ea)
                </span>
              ) : (
                <span style={{ color: "rgb(125, 120, 120)" }}>
                  (${it.regprice} ea)
                </span>
              )}
            </p>
          ) : 
          it.saleprice !=null && it.non_member_price != null && it.regprice == null ? 
          <p style={{ color: "rgb(225, 37, 27)" }}>
          PRICESSS ${it.prices}
          {it.saleprice != null && (
                <span
                  style={{
                    color: "rgb(125, 120, 120)",
                    marginLeft: "4px",
                  }}
                >
                  (SALEPRICE ${it.non_member_price} ea)
                </span>
              )}
          </p> 
          
          : (
            <>
              {it.stock === "Out of Stock" && (
                <p style={{ color: "rgb(225, 37, 27)" }}>
                  Out of Stock ($0)
                </p>
              )}
              {it.non_member_price != null &&
                it.non_member_price !== 0 && (
                  <p style={{ color: "rgb(225, 37, 27)" }}>
                    NON MEMBER ${it.non_member_price}
                  </p>
                )}
              {it.saleprice !== null &&
                it.saleprice !== 0 &&
                it.non_member_price && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* <span style={{ color: "rgb(225, 37, 27)",}}>On sale</span> */}
                    {it.quantity > 2 && (
                      <p
                        style={{
                          color: "rgb(225, 37, 27)",
                          paddingLeft: "4px",
                        }}
                      >
                        SALE PRICE ${it.non_member_price}
                      </p>
                    )}

                    {/* <s
                      style={{ color: "rgb(125, 120, 120)" }}
                    >
                      WAS PRICE (${it.wasprice} ea)
                    </s> */}
                  </div>
                )}
              {it.regprice != null &&
                it.non_member_price !== 0 && (
                  <p>REG PRICE ${it.regprice}</p>
                )}
              {it.non_member_price == null &&
                it.regprice == null && (
                  <p style={{ color: "rgb(225, 37, 27)" }}>
                    ONLY SALE ${it.saleprice}
                  </p>
                )}
            </>
          )}
        </li>
      ))}

      <TabPanel>
      {response && response.length === 0 ? (
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Nothing here yet, but you can add 3 stores in total to
          compare prices
        </p>
      ) : (
        <div style={{ display: "flex" }}>
          <div className="products">
            <p
              style={{
                height: "95px",
                alignContent: "center",
              }}
            >
              <b>Products</b>
            </p>
            {response &&
              response.length != null &&
              response[0].items.map((item, index) => {
                // Проверка на наличие изображения
                const imageSrc =
                  item.image ||
                  response[1]?.items?.[index]?.image ||
                  response[2]?.items?.[index]?.image;

                // Проверка на наличие title
                const title =
                  item.title ||
                  response[1]?.items?.[index]?.title ||
                  response[2]?.items?.[index]?.title;

                return (
                  <li
                    key={item.productID}
                    style={{
                      display: "flex",
                      borderBottom: "1px solid #ccc",
                      margin: "10px 0",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      alt={title} // Используем title в alt
                      width={30}
                      height={30}
                      src={imageSrc} // Используем выбранное изображение
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
                      {title} {/* Отображаем title */}
                    </p>
                    <p>({item.quantity})</p>
                  </li>
                );
              })}
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
                        {it.quantity > 1 &&
                        it.non_member_price == null &&
                        it.regprice == null ? (
                          <p style={{ color: "rgb(225, 37, 27)" }}>
                            ${it.prices}
                            {it.saleprice != null ? (
                              <span
                                style={{
                                  color: "rgb(125, 120, 120)",
                                  marginLeft: "4px",
                                }}
                              >
                                (${it.saleprice} ea)
                              </span>
                            ) : (
                              <span
                                style={{
                                  color: "rgb(125, 120, 120)",
                                }}
                              >
                                (${it.regprice} ea)
                              </span>
                            )}
                          </p>
                        ) : it.quantity > 1 &&
                          it.regprice != null &&
                          it.stock != "Out of Stock" ? (
                          <p>
                            ${it.prices}
                            {it.saleprice != null ? (
                              <span
                                style={{
                                  color: "rgb(125, 120, 120)",
                                  marginLeft: "4px",
                                }}
                              >
                                (${it.saleprice} ea)
                              </span>
                            ) : (
                              <span
                                style={{
                                  color: "rgb(125, 120, 120)",
                                }}
                              >
                                (${it.regprice} ea)
                              </span>
                            )}
                          </p>
                        ) : it.saleprice != null &&
                          it.non_member_price != null &&
                          it.regprice == null &&
                          it.quantity > 1 ? (
                          <p style={{ color: "rgb(225, 37, 27)" }}>
                            ${it.prices}
                            {it.saleprice != null && (
                              <span
                                style={{
                                  color: "rgb(125, 120, 120)",
                                  marginLeft: "4px",
                                }}
                              >
                                (${it.non_member_price} ea)
                              </span>
                            )}
                          </p>
                        ) : (
                          <>
                            {it.stock === "Out of Stock" &&
                              it.quantity >= 1 && (
                                <p
                                  style={{
                                    color: "rgb(225, 37, 27)",
                                  }}
                                >
                                  Out of Stock ($0)
                                </p>
                              )}
                            {it.non_member_price != null &&
                              it.non_member_price !== 0 && (
                                <p
                                  style={{
                                    color: "rgb(225, 37, 27)",
                                  }}
                                >
                                  ${it.non_member_price}
                                </p>
                              )}
                            {it.saleprice !== null &&
                              it.saleprice !== 0 &&
                              it.non_member_price && (
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  {/* <span style={{ color: "rgb(225, 37, 27)",}}>On sale</span> */}
                                  {it.quantity > 2 && (
                                    <p
                                      style={{
                                        color: "rgb(225, 37, 27)",
                                        paddingLeft: "4px",
                                      }}
                                    >
                                      SALE PRICE $
                                      {it.non_member_price}
                                    </p>
                                  )}

                                  {/* <s
                                   style={{ color: "rgb(125, 120, 120)" }}
                                 >
                                   WAS PRICE (${it.wasprice} ea)
                                 </s> */}
                                </div>
                              )}
                            {it.regprice != null &&
                              it.non_member_price !== 0 && (
                                <p>${it.regprice}</p>
                              )}
                            {it.non_member_price == null &&
                              it.regprice == null && (
                                <p
                                  style={{
                                    color: "rgb(225, 37, 27)",
                                  }}
                                >
                                  ${it.saleprice}
                                </p>
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
    </TabPanel>



<TabPanel>
{response && response.length === 0 ? (
  <p
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Nothing here yet, but you can add 3 stores in total to
    compare prices
  </p>
) : (
  <div style={{ display: "flex" }}>
    <div className="products">
      <p
        style={{
          height: "95px",
          alignContent: "center",
        }}
      >
        <b>Products</b>
      </p>
      {response &&
        response.length != null &&
        response[0].items.map((item, index) => {
          // Проверка на наличие изображения
          const imageSrc =
            item.image ||
            response[1]?.items?.[index]?.image ||
            response[2]?.items?.[index]?.image;

          // Проверка на наличие title
          const title =
            item.title ||
            response[1]?.items?.[index]?.title ||
            response[2]?.items?.[index]?.title;

          return (
            <li
              key={item.productID}
              style={{
                display: "flex",
                borderBottom: "1px solid #ccc",
                margin: "10px 0",
                alignItems: "center",
              }}
            >
              <Image
                alt={title} // Используем title в alt
                width={30}
                height={30}
                src={imageSrc} // Используем выбранное изображение
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
                {title} {/* Отображаем title */}
              </p>
              <p>({item.quantity})</p>
            </li>
          );
        })}
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
                  {it.quantity > 1 &&
                  it.non_member_price == null &&
                  it.regprice == null ? (
                    <p style={{ color: "rgb(225, 37, 27)" }}>
                      ${it.prices}
                      {it.saleprice != null ? (
                        <span
                          style={{
                            color: "rgb(125, 120, 120)",
                            marginLeft: "4px",
                          }}
                        >
                          (${it.saleprice} ea)
                        </span>
                      ) : (
                        <span
                          style={{
                            color: "rgb(125, 120, 120)",
                          }}
                        >
                          (${it.regprice} ea)
                        </span>
                      )}
                    </p>
                  ) : it.quantity > 1 &&
                    it.regprice != null &&
                    it.stock != "Out of Stock" ? (
                    <p>
                      ${it.prices}
                      {it.saleprice != null ? (
                        <span
                          style={{
                            color: "rgb(125, 120, 120)",
                            marginLeft: "4px",
                          }}
                        >
                          (${it.saleprice} ea)
                        </span>
                      ) : (
                        <span
                          style={{
                            color: "rgb(125, 120, 120)",
                          }}
                        >
                          (${it.regprice} ea)
                        </span>
                      )}
                    </p>
                  ) : it.saleprice != null &&
                    it.non_member_price != null &&
                    it.regprice == null &&
                    it.quantity > 1 ? (
                    <p style={{ color: "rgb(225, 37, 27)" }}>
                      ${it.prices}
                      {it.saleprice != null && (
                        <span
                          style={{
                            color: "rgb(125, 120, 120)",
                            marginLeft: "4px",
                          }}
                        >
                          (${it.non_member_price} ea)
                        </span>
                      )}
                    </p>
                  ) : (
                    <>
                      {it.stock === "Out of Stock" &&
                        it.quantity >= 1 && (
                          <p
                            style={{
                              color: "rgb(225, 37, 27)",
                            }}
                          >
                            Out of Stock ($0)
                          </p>
                        )}
                      {it.non_member_price != null &&
                        it.non_member_price !== 0 && (
                          <p
                            style={{
                              color: "rgb(225, 37, 27)",
                            }}
                          >
                            ${it.non_member_price}
                          </p>
                        )}
                      {it.saleprice !== null &&
                        it.saleprice !== 0 &&
                        it.non_member_price && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {/* <span style={{ color: "rgb(225, 37, 27)",}}>On sale</span> */}
                            {it.quantity > 2 && (
                              <p
                                style={{
                                  color: "rgb(225, 37, 27)",
                                  paddingLeft: "4px",
                                }}
                              >
                                SALE PRICE $
                                {it.non_member_price}
                              </p>
                            )}

                            {/* <s
                             style={{ color: "rgb(125, 120, 120)" }}
                           >
                             WAS PRICE (${it.wasprice} ea)
                           </s> */}
                          </div>
                        )}
                      {it.regprice != null &&
                        it.non_member_price !== 0 && (
                          <p>${it.regprice}</p>
                        )}
                      {it.non_member_price == null &&
                        it.regprice == null && (
                          <p
                            style={{
                              color: "rgb(225, 37, 27)",
                            }}
                          >
                            ${it.saleprice}
                          </p>
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
</TabPanel>






<TabPanel>
{response && response.length === 0 ? (
  <p
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Nothing here yet, but you can add 3 stores in total to
    compare prices
  </p>
) : (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {response &&
        response != null &&
        response.map((item) => (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  paddingRight: "10%",
                  fontWeight: "700",
                }}
              >
                {item.storetype}
              </p>
              <p style={{ paddingRight: "8%" }}>
                {item.storeName}
              </p>
              <p style={{ fontWeight: "700" }}>
                Total: ${item.totalPrices.toFixed(2)}
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
                onClick={() => removeStore(item.id)}
                title="Delete Store"
              >
                <Image src={del} width={30} height={30} />
              </button>
            </div>
            {/* <div
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
                onClick={() => removeStore(item.id)}
                title="Delete Store"
              >
                <Image src={del} width={30} height={30} />
              </button>
            </div> */}
            {/* <>
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
            </> */}
          </div>
        ))}
    </div>
    <div>
      <p
        style={{
          alignContent: "center",
        }}
      >
        <b>Products</b>
      </p>
      {response &&
        response.length != null &&
        response[0].items.map((item, index) => {
          // Проверка на наличие изображения
          const imageSrc =
            item.image ||
            response[1]?.items?.[index]?.image ||
            response[2]?.items?.[index]?.image;

          // Проверка на наличие title
          const title =
            item.title ||
            response[1]?.items?.[index]?.title ||
            response[2]?.items?.[index]?.title;

          return (
            <li
              key={item.productID}
              style={{
                display: "flex",
                borderBottom: "1px solid #ccc",
                margin: "10px 0",
                alignItems: "center",
              }}
            >
              <Image
                alt={title} // Используем title в alt
                width={30}
                height={30}
                src={imageSrc} // Используем выбранное изображение
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
                {title} {/* Отображаем title */}
              </p>

              <button
                onClick={() => decreaseQuantity(item.productID)}
                style={{
                  outline: "0px",
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
                <Image width={30} height={30} src={minus} />
              </button>

              <p>{item.quantity}</p>
              <button
                onClick={() => increaseQuantity(item.productID)}
                style={{
                  outline: "0px",
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
                <Image width={30} height={30} src={plus} />
              </button>
            </li>
          );
        })}
    </div>
  </div>
)}
</TabPanel>

<TabPanel>
{response && response.length === 0 ? (
  <p
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Nothing here yet, but you can add 3 stores in total to
    compare prices
  </p>
) : (
  <div style={{ display: "flex" }}>
    <div className="products">
      <p
        style={{
          height: "95px",
          alignContent: "center",
        }}
      >
        <b>Products</b>
      </p>
      {response &&
        response.length != null &&
        response[0].items.map((item, index) => {
          // Проверка на наличие изображения
          const imageSrc =
            item.image ||
            response[1]?.items?.[index]?.image ||
            response[2]?.items?.[index]?.image;

          // Проверка на наличие title
          const title =
            item.title ||
            response[1]?.items?.[index]?.title ||
            response[2]?.items?.[index]?.title;

          return (
            <li
              key={item.productID}
              style={{
                display: "flex",
                borderBottom: "1px solid #ccc",
                margin: "10px 0",
                alignItems: "center",
              }}
            >
              <Image
                alt={title} // Используем title в alt
                width={30}
                height={30}
                src={imageSrc} // Используем выбранное изображение
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
                {title} {/* Отображаем title */}
              </p>
              <p>({item.quantity})</p>
            </li>
          );
        })}
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
                  {it.quantity > 1 &&
                  it.non_member_price == null &&
                  it.regprice == null ? (
                    <p style={{ color: "rgb(225, 37, 27)" }}>
                      ${it.prices}
                      {it.saleprice != null ? (
                        <span
                          style={{
                            color: "rgb(125, 120, 120)",
                            marginLeft: "4px",
                          }}
                        >
                          (${it.saleprice} ea)
                        </span>
                      ) : (
                        <span
                          style={{
                            color: "rgb(125, 120, 120)",
                          }}
                        >
                          (${it.regprice} ea)
                        </span>
                      )}
                    </p>
                  ) : it.quantity > 1 &&
                    it.regprice != null &&
                    it.stock != "Out of Stock" ? (
                    <p>
                      ${it.prices}
                      {it.saleprice != null ? (
                        <span
                          style={{
                            color: "rgb(125, 120, 120)",
                            marginLeft: "4px",
                          }}
                        >
                          (${it.saleprice} ea)
                        </span>
                      ) : (
                        <span
                          style={{
                            color: "rgb(125, 120, 120)",
                          }}
                        >
                          (${it.regprice} ea)
                        </span>
                      )}
                    </p>
                  ) : it.saleprice != null &&
                    it.non_member_price != null &&
                    it.regprice == null &&
                    it.quantity > 1 ? (
                    <p style={{ color: "rgb(225, 37, 27)" }}>
                      ${it.prices}
                      {it.saleprice != null && (
                        <span
                          style={{
                            color: "rgb(125, 120, 120)",
                            marginLeft: "4px",
                          }}
                        >
                          (${it.non_member_price} ea)
                        </span>
                      )}
                    </p>
                  ) : (
                    <>
                      {it.stock === "Out of Stock" &&
                        it.quantity >= 1 && (
                          <p
                            style={{
                              color: "rgb(225, 37, 27)",
                            }}
                          >
                            Out of Stock ($0)
                          </p>
                        )}
                      {it.non_member_price != null &&
                        it.non_member_price !== 0 && (
                          <p
                            style={{
                              color: "rgb(225, 37, 27)",
                            }}
                          >
                            ${it.non_member_price}
                          </p>
                        )}
                      {it.saleprice !== null &&
                        it.saleprice !== 0 &&
                        it.non_member_price && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {/* <span style={{ color: "rgb(225, 37, 27)",}}>On sale</span> */}
                            {it.quantity > 2 && (
                              <p
                                style={{
                                  color: "rgb(225, 37, 27)",
                                  paddingLeft: "4px",
                                }}
                              >
                                SALE PRICE $
                                {it.non_member_price}
                              </p>
                            )}

                            {/* <s
                             style={{ color: "rgb(125, 120, 120)" }}
                           >
                             WAS PRICE (${it.wasprice} ea)
                           </s> */}
                          </div>
                        )}
                      {it.regprice != null &&
                        it.non_member_price !== 0 && (
                          <p>${it.regprice}</p>
                        )}
                      {it.non_member_price == null &&
                        it.regprice == null && (
                          <p
                            style={{
                              color: "rgb(225, 37, 27)",
                            }}
                          >
                            ${it.saleprice}
                          </p>
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
</TabPanel>