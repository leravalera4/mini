import React, { useState, useEffect } from "react";
import axios from "axios";
import localFont from "next/font/local";
import "./item.css";
import Spiner from "../spiner";
import HistoriesLoader from "../loaders";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../products/products.css";
import About from "../about";
import Funfact from "../facts/facts.jsx";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import spiner from "../../app/images/sp.gif";
import Loading from "../loaders";
import added from "../../app/images/added.svg";
import error from "../../app/images/error.gif";
import Image from "next/image.js";
import { useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Tour from "../tour/tour_sale.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Albert_Sans } from "next/font/google/index.js";

const ProductItem = ({
  item,
  loading,
  index,
  handleAddToCart,
  addedToCart,
  noir,
  len,
  checkForStore,
}) => (
  <li key={index} tabIndex="-1" className="product-list-item">
    <div className="product-container">
      <div className="product-info-container">
        <div className="product-image-container">
          {loading ? (
            <Skeleton width={110} height={110} />
          ) : (
            <>
              <div
                style={{
                  height: "35px",
                  display: "flex",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  flexDirection: "row-reverse",
                }}
              >
                {productCounts[item.productID] > 0 && (
                  <>
                    <Image
                      style={{ paddingLeft: "90px" }}
                      width={35}
                      height={35}
                      src={added}
                    />
                    <p className={noir.className}>
                      {productCounts[item.productID]} x
                    </p>
                  </>
                )}
              </div>
              <Zoom zoomZindex={1}>
                <img alt="product" src={item.image} className="product-image" />
              </Zoom>
            </>
          )}
        </div>
        <div className="price-container" data-testid="price-product-tile">
          {loading ? (
            <Skeleton width={70} height={16} />
          ) : (
            <p
              className={`${noir.className} price-paragraph`}
              data-testid="price"
            >
              {item.non_member_price != null ? (
                `${item.non_member_price} `
              ) : (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {item.saleprice}
                  {item.wasprice != null && (
                    <s
                      style={{
                        color: "rgb(125, 120, 120)",
                        fontWeight: "400",
                        marginRight: "10px",
                        paddingLeft: "2px",
                        paddingTop: "2px",
                      }}
                    >
                      {item.wasprice}
                    </s>
                  )}
                </div>
              )}
              <span className="highlighted-price">
                {item.non_member_price != null
                  ? `${item.saleprice}`
                  : item.sale}
              </span>
            </p>
          )}
        </div>
        <div className="overlay-container">
          {loading ? (
            <Skeleton width={154} height={12} />
          ) : (
            <>
              <p
                className={`${noir.className} product-brand-paragraph`}
                data-testid="product-brand"
              >
                {item.brand}
              </p>
              <h3
                className={`${noir.className} product-title-heading`}
                data-testid="product-title"
              >
                {item.title}
              </h3>
              <p
                className="package-size-paragraph"
                data-testid="product-package-size"
              >
                {item.weight === ""
                  ? `$${(item.prices.unitPriceValue * 10).toFixed(2)} / 1 kg`
                  : item.weight}
              </p>
            </>
          )}
        </div>
      </div>
      {loading ? (
        <Skeleton />
      ) : (
        <button
          onClick={() => handleAddToCart(item, index)}
          className={`${noir.className} ${
            len === 3 && checkForStore === false ? "" : "box"
          }`}
          disabled={len === 3 && checkForStore === false}
          style={{
            outline: "0",
            height: "38px",
            cursor:
              len === 3 && checkForStore === false ? "not-allowed" : "pointer",
            padding: "5px 16px",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "20px",
            verticalAlign: "middle",
            border: "1px solid",
            borderRadius: "6px",
            color: len === 3 && checkForStore === false ? "#ccc" : "#24292e",
            backgroundColor:
              len === 3 && checkForStore === false ? "#f0f0f0" : "#fafbfc",
            borderColor:
              len === 3 && checkForStore === false ? "#ddd" : "#1b1f2326",
          }}
        >
          {addedToCart[index] ? "Add more" : "Add to List"}
        </button>
      )}
    </div>
  </li>
);
