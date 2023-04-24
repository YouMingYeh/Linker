import React, { useState, useEffect } from "react";
import "./style.css";
import { PageContextProvider } from "./usePageContext";
import { Link } from "./Link";
import Box from "./Box";
import ThemeSwitcher from "./ThemeSwitcher";

export { PageShell };

function PageShell({ pageContext, children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 850);
      console.log("isMobile: ", isMobile);
    } 
  }, []);

  if(isLoading) {
    return <LoadingIndicator />
  }

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
      <div
        id="watermark"
        style={{
          position: "fixed",
          right: "10px",
          bottom: "10px",
          fontSize: "12px",
          fontStyle: "italic",
          color: "#aaa",
        }}
      >
        Copyright &copy; 2023 You Ming-Yeh
      </div>
        {isMobile ? (
          <div className="background h-screen">
            <Sidebar >
              <Box />
              <Link href="/" className="text button ">
                NTU
              </Link>

              <Link href="/workspace" className="text button">
                Workspace
              </Link>

              <Link href="/web_dev" className="text button">
                Web Dev
              </Link>

              <Link href="/social" className="text button">
                Social
              </Link>
              <ThemeSwitcher isLoading={isLoading} setIsLoading={setIsLoading}/>
              <Content>{children}</Content>
            </Sidebar>
          </div>
        ) : (
          <div className="background">
            <Layout>
              <Sidebar>
                <Box />
                <Link href="/" className="text button ">
                  NTU
                </Link>

                <Link href="/workspace" className="text button">
                  Workspace
                </Link>

                <Link href="/web_dev" className="text button">
                  Web Dev
                </Link>

                <Link href="/social" className="text button">
                  Social
                </Link>
                <ThemeSwitcher isLoading={isLoading} setIsLoading={setIsLoading}/>
              </Sidebar>
              <Content>{children}</Content>
            </Layout>
          </div>
        )}
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "90%",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}

function Sidebar({ children }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
    >
      {children}
    </div>
  );
}

function Content({ children }) {
  return <div className="background w-screen h-screen pt-16">{children}</div>;
}

function LoadingIndicator() {
  return <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>;
}