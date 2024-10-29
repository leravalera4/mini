import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Component() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{
          boxSizing: "border-box",
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          flexWrap: "nowrap",
          justifyContent: "flex-start",
          marginBottom: "1.5em",
          backgroundColor: "rgba(33,37,41,1)",
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            width: "100%",
            paddingRight: "var(--bs-gutter-x,.75rem)",
            paddingLeft: "var(--bs-gutter-x,.75rem)",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "1320px",
            display: "flex",
            flexWrap: "inherit",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            className="iconLink"
            href="https://grocerytracker.ca/"
            title="Grocery Tracker"
            style={{
              boxSizing: "border-box",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
              color: "rgb(248, 249, 250)",
            }}
          >
            <svg
              height="22"
              width="22"
              fill="#dc3545"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              style={{ boxSizing: "border-box", verticalAlign: "middle" }}
            >
              <path
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
                fillRule="evenodd"
                style={{ boxSizing: "border-box" }}
              />
            </svg>
          </a>
          <h1
            style={{
              boxSizing: "border-box",
              fontWeight: 500,
              lineHeight: 1.2,
              color: "rgb(239, 238, 234)",
              margin: "0px 0.5em",
              fontSize: "1.25em",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <a
              href="https://grocerytracker.ca/"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                color: "rgb(248, 249, 250)",
              }}
            >
              Grocery Tracker
            </a>
          </h1>
          <button
            className="navbar-toggler collapsed"
            type="button"
            aria-controls="responsive-navbar-nav"
            aria-label="Toggle navigation"
            style={{
              boxSizing: "border-box",
              margin: "0px",
              fontFamily: "inherit",
              textTransform: "none",
              appearance: "button",
              padding: "0.25rem 0.75rem",
              border: "1px solid transparent",
              borderRadius: "0.25rem",
              transition: "box-shadow 0.15s ease-in-out",
              fontSize: "1.25rem",
              lineHeight: 1,
              backgroundColor: "transparent",
              cursor: "pointer",
              display: "none",
              borderColor: "rgba(255, 255, 255, 0.1)",
              color: "rgba(255, 255, 255, 0.55)",
            }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                boxSizing: "border-box",
                backgroundPosition: "center center",
                display: "inline-block",
                width: "1.5em",
                height: "1.5em",
                verticalAlign: "middle",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
              }}
            />
          </button>
          <div
            id="responsive-navbar-nav"
            className="navbar-collapse collapse"
            style={{
              boxSizing: "border-box",
              flexGrow: 1,
              alignItems: "center",
              flexBasis: "auto",
              display: "flex",
            }}
          >
            <div
              className="mr-auto navbar-nav"
              style={{
                boxSizing: "border-box",
                listStyle: "none",
                display: "flex",
                paddingLeft: "0px",
                marginBottom: "0px",
                flexDirection: "row",
              }}
            >
              <span
                className="nav-link"
                href="#"
                style={{
                  boxSizing: "border-box",
                  padding: "0.5rem 1rem",
                  textDecoration: "none",
                  transition:
                    "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
                  display: "block",
                  paddingRight: "0.5rem",
                  paddingLeft: "0.5rem",
                  color: "rgba(255, 255, 255, 0.55)",
                }}
              >
                <a
                  href="https://grocerytracker.ca/search"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    color: "rgb(248, 249, 250)",
                  }}
                >
                  Search
                </a>
              </span>
            </div>
          </div>
          <div
            className="justify-content-end navbar-collapse collapse"
            style={{
              boxSizing: "border-box",
              flexGrow: 1,
              alignItems: "center",
              flexBasis: "auto",
              justifyContent: "flex-end",
              display: "flex",
            }}
          >
            <div
              className="navbar-nav"
              style={{
                boxSizing: "border-box",
                listStyle: "none",
                display: "flex",
                paddingLeft: "0px",
                marginBottom: "0px",
                flexDirection: "row",
              }}
            >
              <a
                className="btn btn-primary"
                href="https://grocerytracker.ca/login"
                role="button"
                tabIndex="0"
                style={{
                  boxSizing: "border-box",
                  border: "1px solid transparent",
                  padding: "0.375rem 0.75rem",
                  borderRadius: "0.25rem",
                  transition:
                    "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                  display: "inline-block",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  textAlign: "center",
                  verticalAlign: "middle",
                  cursor: "pointer",
                  userSelect: "none",
                  fontSize: "1rem",
                  borderColor: "rgb(13, 110, 253)",
                  backgroundColor: "rgb(13, 110, 253)",
                  textDecoration: "none",
                  color: "rgb(248, 249, 250)",
                  margin: "0px 0.5rem",
                }}
              >
                Login/Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
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
  background: rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
}
`,
        }}
      />
    </>
  );
}
