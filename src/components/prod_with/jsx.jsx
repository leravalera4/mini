import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="g-2 row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2"
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexWrap: "wrap",
          marginTop: "calc(-1 * 0.5rem)",
          marginRight: "calc(-.5 * 0.5rem)",
          marginLeft: "calc(-.5 * 0.5rem)",
        }}
      >
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Partly Skimmed Milk 2% MF
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Neilson
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $6.09
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                4 l
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.15 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20188873_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20188873_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Almond Breeze Almond Milk, Unsweetened Vanilla
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Blue Diamond
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $4.49
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                1.89 l
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.24 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20794060002_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20794060002_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Almond Breeze, Unsweetened Vanilla
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Blue Diamond
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $3.49
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                946 ml
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.37 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20264273_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20264273_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Partly Skimmed Milk 1% MF
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Neilson
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $6.09
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                4 l
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.15 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20047439_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20047439_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  2% Milk
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Neilson
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $5.34
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                2 l
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.27 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20017001_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20017001_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  True Taste, 2% Milk
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Neilson
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $5.64
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                2 l
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.28 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20130270_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20130270_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Almond Breeze Unsweetened Almond Milk, Original
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Blue Diamond
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $4.49
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                1.89 l
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.24 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20794060004_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20794060004_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Almond Breeze Natural Almond, Unsweetened
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Blue Diamond
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $3.49
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                946 ml
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.37 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20107219004_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20107219004_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Homogenized Milk 3.25%
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Neilson
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $7.09
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                4 l
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.18 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20160571_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20160571_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Trutaste Partially Skimmed Milk 2 percent MF
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Neilson
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $6.69
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                4 l
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.17 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20148677_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20148677_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  TruTaste 1% Milk
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Neilson
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $6.69
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                4 l
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.17 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20136554_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20136554_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  TruTaste 1% Milk
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Neilson
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $5.64
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                2 l
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.28 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20126276_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20126276_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  2% Milk
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Neilson
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $3.59
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                1 l
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.36 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20149754_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20149754_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Lactose Free 2% Partly Skimmed Ultrafiltered Milk
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Fairlife
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $6.59
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                1.5 l
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.44 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/21128369_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/21128369_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col"
          style={{
            boxSizing: "border-box",
            maxWidth: "100%",
            paddingRight: "calc(0.5rem * .5)",
            paddingLeft: "calc(0.5rem * .5)",
            marginTop: "0.5rem",
            flex: "0 0 auto",
            flexShrink: 0,
            width: "20%",
          }}
        >
          <div
            className="card border-dark"
            style={{
              boxSizing: "border-box",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.25rem",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              borderColor: "rgb(33, 37, 41)",
            }}
          >
            <div
              className="card-body"
              style={{
                boxSizing: "border-box",
                flex: "1 1 auto",
                padding: "0.5rem",
              }}
            >
              <div style={{ boxSizing: "border-box", minHeight: "6em" }}>
                <div
                  className="card-title h5"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Lactose Free 2% Dairy Product
                </div>
                <div
                  className="card-subtitle h6"
                  style={{
                    boxSizing: "border-box",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    fontSize: "1rem",
                    marginTop: "-0.25rem",
                    marginBottom: "0px",
                  }}
                >
                  Natrel
                </div>
              </div>
              <div
                className="cardPrices"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.125em",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                <span
                  className="sale"
                  style={{ boxSizing: "border-box", color: "rgb(220, 53, 69)" }}
                >
                  $6.69
                </span>
              </div>
              <div
                className="unitSize"
                style={{ boxSizing: "border-box", textAlign: "center" }}
              >
                2 l
              </div>
              <div
                className="unitPrice"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                $0.33 / 100ml
              </div>
              <div
                className="cardLinks"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  fontSize: "1.5em",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/product/1077/20077874001_EA"
                  title="View Item"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://grocerytracker.ca/search/1077/milk#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
                <a
                  className="card-link"
                  href="https://realcanadiansuperstore.ca/p/20077874001_EA"
                  target="_blank"
                  title="Buy from Superstore"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "underline",
                    color: "rgb(11, 98, 229)",
                    margin: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <svg
                    height="1em"
                    width="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box", verticalAlign: "middle" }}
                  >
                    <path
                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      style={{ boxSizing: "border-box" }}
                    />
                    <path
                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
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
