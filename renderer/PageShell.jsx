import React, {useState, useEffect} from "react";
import "./style.css";
import { PageContextProvider } from "./usePageContext";
import { Link } from "./Link";
import Box from './Box'
import ThemeSwitcher from "./ThemeSwitcher";

export { PageShell };

function PageShell({ pageContext, children }) {
  const [login, setLogin] = useState(false);
  useEffect(()=>{
  },[])
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
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
              <ThemeSwitcher />
            </Sidebar>
            <Content>{children}</Content>
          </Layout>
        </div>
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
  return (
    <div
      className="background w-screen h-screen"
    >
      {children}
    </div>
  );
}


