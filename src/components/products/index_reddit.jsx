import React from "react";

export default function Component() {
  return (
    <>
      <shreddit-post
        id="t3_1fddksb"
        className="block xs:mt-xs xs:-mx-xs xs:px-xs xs:rounded-[16px] pt-xs nd:pt-xs bg-[color:var(--shreddit-content-background)] box-border mb-xs nd:visible nd:pb-2xl"
        icon="https://preview.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfNDE2OWZmNGQzMTUwMmNiMWQwOWI4NTA0YTAwYThhNjMyZmIwODQ4Zl80MDMxMDU3_rare_ab6ce9bc-acb4-4acd-b21e-4fd87f69f413-headshot.png?width=64&height=64&crop=smart&auto=webp&s=3d8d1927ae2e64a025cd13daa6f33aa50bdf62a3"
        style={{
          gridTemplateColumns: "auto 1fr auto",
          marginBottom: "0.5rem",
          boxSizing: "border-box",
          display: "block",
          backgroundColor: "rgb(249, 251, 255)",
          paddingTop: "0.5rem",
        }}
      >
        <div
          className="flex justify-between text-12 pt-md pb-2xs px-md relative xs:px-0"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingBottom: "0.25rem",
            paddingTop: "1rem",
            fontSize: "0.75rem",
            lineHeight: "1rem",
          }}
        >
          <span
            className="flex gap-xs items-center pr-xs truncate"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              paddingRight: "0.5rem",
            }}
          >
            <pdp-back-button
              className="hidden xs:block w-[32px] h-[32px] pdp-float-back-btn:absolute pdp-float-back-btn:top-md pdp-float-back-btn:-left-[2.5rem]"
              style={{ display: "none", height: "32px", width: "32px" }}
            />
            <span
              className="avatar text-32 items-center overflow-hidden flex-shrink-0 indent-0 w-xl h-xl"
              style={{
                height: "2rem",
                width: "2rem",
                flexShrink: 0,
                alignItems: "center",
                overflow: "hidden",
                textIndent: "0px",
                fontSize: "2rem",
                lineHeight: "2.25rem",
              }}
            >
              <faceplate-tracker
                className="visible"
                action="click"
                style={{ visibility: "visible" }}
              >
                <a
                  className="no-underline hover:no-underline active:no-underline text-secondary"
                  href="https://www.reddit.com/r/AskReddit/"
                  style={{
                    textDecoration: "none",
                    color: "#f1f3f7",
                    textDecorationLine: "none",
                  }}
                >
                  <div
                    className="h-[32px] w-[32px]"
                    style={{ height: "32px", width: "32px" }}
                  >
                    <img
                      className="mb-0 shreddit-subreddit-icon__icon rounded-full overflow-hidden nd:visible nd:bg-secondary-background mb-md h-full w-full"
                      height={32}
                      width={32}
                      alt="r/AskReddit icon"
                      src="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png"
                      style={{
                        maxWidth: "100%",
                        marginBottom: "1rem",
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                        borderRadius: "624.938rem",
                        color: "rgb(100, 109, 115)",
                        backgroundColor: "rgb(100, 109, 115)",
                      }}
                    />
                  </div>
                  <faceplate-screen-reader-content
                    style={{
                      padding: "0px",
                      margin: "-1px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      borderWidth: "0px",
                      position: "absolute",
                      width: "1px",
                      height: "1px",
                      clip: "rect(0px, 0px, 0px, 0px)",
                    }}
                  >
                    {"Go to AskReddit"}
                  </faceplate-screen-reader-content>
                </a>
              </faceplate-tracker>
            </span>
            <div
              className="flex gap-0 flex-col truncate"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              <span
                className="flex flex-none items-center flex-row gap-2xs flex-nowrap"
                style={{
                  display: "flex",
                  flex: "0 0 auto",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <span
                  className="flex flex-none subreddit-name neutral-content font-bold text-12 whitespace-nowrap"
                  style={{
                    display: "flex",
                    flex: "0 0 auto",
                    whiteSpace: "nowrap",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    fontWeight: 700,
                  }}
                >
                  <faceplate-tracker
                    className="visible"
                    action="click"
                    style={{ visibility: "visible" }}
                  >
                    <shreddit-async-loader>
                      <faceplate-hovercard
                        className="nd:visible"
                        aria-label="r/AskReddit"
                      >
                        <a
                          className="subreddit-name whitespace-nowrap text-12 text-neutral-content font-bold a cursor-pointer no-visited no-underline hover:no-underline"
                          aria-expanded="false"
                          aria-haspopup="dialog"
                          href="https://www.reddit.com/r/AskReddit/"
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            fontSize: "0.75rem",
                            lineHeight: "1rem",
                            fontWeight: 700,
                            color: "#b6c4d5",
                            textDecorationLine: "none",
                          }}
                        >
                          r/AskReddit
                        </a>
                        <div
                          className="max-w-[360px] w-[90vw] overflow-hidden p-0 -m-[0.5rem]"
                          hidden
                          style={{
                            margin: "-0.5rem",
                            width: "90vw",
                            maxWidth: "360px",
                            overflow: "hidden",
                            padding: "0px",
                            display: "none",
                          }}
                        >
                          <div
                            className="flex flex-col"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <div
                              className="px-sm pt-sm flex items-center"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                paddingLeft: "0.75rem",
                                paddingRight: "0.75rem",
                                paddingTop: "0.75rem",
                              }}
                            >
                              <span
                                className="w-[48px] h-[48px] text-24 shrink-0"
                                style={{
                                  height: "48px",
                                  width: "48px",
                                  flexShrink: 0,
                                  fontSize: "1.5rem",
                                  lineHeight: "1.75rem",
                                }}
                              >
                                <img
                                  className="mb-0 shreddit-subreddit-icon__icon rounded-full overflow-hidden nd:visible nd:bg-secondary-background"
                                  height={48}
                                  width={48}
                                  alt="r/AskReddit icon"
                                  src="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png"
                                  style={{
                                    maxWidth: "100%",
                                    marginBottom: "0px",
                                    overflow: "hidden",
                                    borderRadius: "624.938rem",
                                    color: "rgb(100, 109, 115)",
                                    backgroundColor: "rgb(100, 109, 115)",
                                  }}
                                />
                              </span>
                              <span
                                className="flex ml-xs grow-0 w-100"
                                style={{
                                  marginLeft: "0.5rem",
                                  display: "flex",
                                  width: "100%",
                                  flexGrow: 0,
                                }}
                              >
                                <faceplate-tracker action="click">
                                  <a
                                    className="text-18 font-bold text-neutral-content-strong leading-6 a cursor-pointer text-14 no-visited hover:underline"
                                    href="https://www.reddit.com/r/AskReddit/"
                                    style={{
                                      textDecoration: "none",
                                      cursor: "pointer",
                                      fontSize: "1.125rem",
                                      fontWeight: 700,
                                      lineHeight: "1.5rem",
                                      color: "rgb(0, 0, 0)",
                                    }}
                                  >
                                    r/AskReddit
                                  </a>
                                </faceplate-tracker>
                              </span>
                              <faceplate-tracker
                                className="ml-auto"
                                action="click"
                                style={{ marginLeft: "auto" }}
                              >
                                <shreddit-join-button name="AskReddit" />
                              </faceplate-tracker>
                            </div>
                            <p
                              className="px-md pt-md m-0 whitespace-normal text-14 leading-5 font-normal"
                              style={{
                                margin: "0px",
                                marginBottom: "0px",
                                whiteSpace: "normal",
                                paddingLeft: "1rem",
                                paddingRight: "1rem",
                                paddingTop: "1rem",
                                fontSize: "0.875rem",
                                fontWeight: 400,
                                lineHeight: "1.25rem",
                              }}
                            >
                              {
                                "r/AskReddit is the place to ask and answer thought-provoking questions."
                              }
                            </p>
                            <hr
                              className="mx-md mt-md border-neutral-border-weak"
                              style={{
                                borderTop: "0px",
                                borderRight: "0px",
                                borderLeft: "0px",
                                borderImage: "initial",
                                borderBottom: "1px solid #FFFFFF33",
                                margin: "0",
                                backgroundColor: "transparent",
                                marginLeft: "1rem",
                                marginRight: "1rem",
                                marginTop: "1rem",
                                borderColor: "#FFFFFF19",
                              }}
                            />
                            <div
                              className="px-md py-md flex items-center"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                paddingLeft: "1rem",
                                paddingRight: "1rem",
                                paddingTop: "1rem",
                                paddingBottom: "1rem",
                              }}
                            >
                              <span
                                className="flex flex-col"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <span
                                  className="text-14 text-neutral-content leading-5 font-semibold"
                                  style={{
                                    fontSize: "0.875rem",
                                    fontWeight: 600,
                                    lineHeight: "1.25rem",
                                    color: "#b6c4d5",
                                  }}
                                >
                                  <faceplate-number>49M</faceplate-number>
                                </span>
                                <span
                                  className="text-12 leading-4 text-neutral-content-weak"
                                  style={{
                                    fontSize: "0.75rem",
                                    lineHeight: "1rem",
                                    color: "#7f93ab",
                                  }}
                                >
                                  Members
                                </span>
                              </span>
                              <span
                                className="ml-xl flex flex-col"
                                style={{
                                  marginLeft: "2rem",
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <span
                                  className="text-14 text-neutral-content leading-5 font-semibold"
                                  style={{
                                    fontSize: "0.875rem",
                                    fontWeight: 600,
                                    lineHeight: "1.25rem",
                                    color: "#b6c4d5",
                                  }}
                                >
                                  <faceplate-number>9.5K</faceplate-number>
                                </span>
                                <span
                                  className="flex items-center"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <span
                                    className="bg-kiwigreen-400 rounded-full w-xs h-xs"
                                    style={{
                                      height: "0.5rem",
                                      width: "0.5rem",
                                      borderRadius: "624.938rem",
                                      backgroundColor: "rgb(1 168 22 / 1)",
                                    }}
                                  />
                                  <span
                                    className="text-12 leading-4 text-neutral-content-weak ml-2xs"
                                    style={{
                                      marginLeft: "0.25rem",
                                      fontSize: "0.75rem",
                                      lineHeight: "1rem",
                                      color: "#7f93ab",
                                    }}
                                  >
                                    Online
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </faceplate-hovercard>
                    </shreddit-async-loader>
                  </faceplate-tracker>
                </span>
                <span
                  id="time-ago-separator"
                  className="flex items-center w-2xs text-neutral-content-weak font-normal text-12"
                  style={{
                    display: "flex",
                    width: "0.25rem",
                    alignItems: "center",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    fontWeight: 400,
                    color: "#7f93ab",
                  }}
                >
                  •
                </span>
                <faceplate-timeago
                  className="flex items-center whitespace-nowrap text-neutral-content-weak font-normal text-12"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    fontWeight: 400,
                    color: "#7f93ab",
                  }}
                >
                  {" "}
                  <time
                    dateTime="2024-09-10T09:16:17.414Z"
                    title="Tuesday, September 10, 2024 at 5:16:17 AM EDT"
                  >
                    1 mo. ago
                  </time>{" "}
                </faceplate-timeago>
              </span>
              <div
                className="flex flex-none flex-row gap-2xs items-center flex-nowrap"
                style={{
                  display: "flex",
                  flex: "0 0 auto",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <span className="flex" style={{ display: "flex" }}>
                  <div
                    className="inline-flex items-center max-w-full"
                    style={{
                      display: "inline-flex",
                      maxWidth: "100%",
                      alignItems: "center",
                    }}
                  >
                    <faceplate-hovercard label="Creepy_Intention837 details">
                      <faceplate-tracker
                        className="visible"
                        action="click"
                        style={{ visibility: "visible" }}
                      >
                        <a
                          className="author-name whitespace-nowrap text-neutral-content visited:text-neutral-content-weak a cursor-pointer no-visited no-underline hover:no-underline"
                          aria-expanded="false"
                          aria-haspopup="dialog"
                          href="https://www.reddit.com/user/Creepy_Intention837/"
                          style={{
                            textDecoration: "none",
                            fontSize: "1em",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            color: "#b6c4d5",
                            textDecorationLine: "none",
                          }}
                        >
                          Creepy_Intention837
                        </a>
                      </faceplate-tracker>
                      <div hidden>
                        <faceplate-partial src="/svc/shreddit/user-hover-card/Creepy_Intention837">
                          <div
                            className="w-5xl h-4xl flex items-center justify-center"
                            style={{
                              display: "flex",
                              height: "6rem",
                              width: "8rem",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <faceplate-progress
                              className="animate-spin"
                              value="20"
                              style={{
                                animation:
                                  "1s linear 0s infinite normal none running spin",
                              }}
                            />
                          </div>
                        </faceplate-partial>
                      </div>
                    </faceplate-hovercard>
                  </div>
                </span>
                <span
                  className="items-center flex icon-container"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <shreddit-async-loader
                    className="flex items-center"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <shreddit-distinguished-post-tags
                      className="nd:visible inline-flex"
                      style={{ display: "inline-flex" }}
                    >
                      <span
                        className="hidden font-semibold text-12 tracking-wide distinguished-admin text-identity-admin"
                        aria-label="Post distinguished by admin"
                        style={{
                          display: "none",
                          fontSize: "0.75rem",
                          lineHeight: "1rem",
                          fontWeight: 600,
                          letterSpacing: "0.025em",
                          color: "#D93900",
                        }}
                      >
                        {"ADMIN"}
                      </span>
                      <span
                        className="hidden font-semibold text-12 tracking-wide distinguished-mod text-identity-moderator"
                        aria-label="Post distinguished by moderator"
                        style={{
                          display: "none",
                          fontSize: "0.75rem",
                          lineHeight: "1rem",
                          fontWeight: 600,
                          letterSpacing: "0.025em",
                          color: "#008A10",
                        }}
                      >
                        {"MOD"}
                      </span>
                    </shreddit-distinguished-post-tags>
                  </shreddit-async-loader>
                </span>
              </div>
            </div>
          </span>
          <span
            className="flex items-center pl-xs"
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "0.5rem",
            }}
          >
            <shreddit-async-loader>
              <shreddit-status-icons
                className="nd:visible flex items-center gap-2xs"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <svg
                  className="lock-status fill-[color:var(--color-identity-coins)] shrink-0"
                  height="12"
                  width="12"
                  aria-label="Locked post"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ flexShrink: 0, fill: "#B78800" }}
                >
                  <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z" />
                </svg>
                <svg
                  className="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
                  height="12"
                  width="12"
                  aria-label="Sticked post"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "none", flexShrink: 0, fill: "#008A10" }}
                >
                  <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z" />
                </svg>
                <svg
                  className="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
                  height="12"
                  width="12"
                  aria-label="Archived post"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "none", flexShrink: 0, fill: "#B78800" }}
                >
                  <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z" />
                </svg>
              </shreddit-status-icons>
            </shreddit-async-loader>
            <shreddit-async-loader
              className="relative min-w-[32px] -mr-[7px]"
              style={{
                position: "relative",
                marginRight: "-7px",
                minWidth: "32px",
              }}
            >
              <shreddit-post-overflow-menu>
                <div />
              </shreddit-post-overflow-menu>
            </shreddit-async-loader>
          </span>
        </div>
        <h1
          id="post-title-t3_1fddksb"
          className="font-semibold text-neutral-content-strong m-0 text-18 xs:text-24 mb-xs px-md xs:px-0 xs:mb-md overflow-hidden"
          aria-label="Post Title: What free things online should everyone take  advantage of?"
          style={{
            font: "normal undefined null/null -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',sans-serif",
            margin: "0px",
            marginBottom: "0.5rem",
            overflow: "hidden",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            fontSize: "1.125rem",
            lineHeight: "1.5rem",
            fontWeight: 600,
            color: "rgb(0, 0, 0)",
          }}
        >
          {"What free things online should everyone take  advantage of?"}
          <faceplate-perfmark name="first-post-meaningful-paint" />
        </h1>
        <shreddit-post-flair />
        <shreddit-async-loader id="recent-posts-tracker">
          <recent-posts-tracker />
        </shreddit-async-loader>
      </shreddit-post>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',sans-serif;
  font-size: 16px;
  color: #F2F2F2;
  background: #080808;
  color-scheme: dark;
  background-color: #0E1113;
}

body {
  margin: 0px auto;
  padding: 0px;
  font-size: 0.875rem;
  overflow-x: hidden;
  word-break: break-word;
  overflow-wrap: break-word;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
`,
        }}
      />
    </>
  );
}
