import React, { useState, useEffect } from "react";
import "./style.css";
import { PageContextProvider } from "./usePageContext";  
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export { PageShell };

const Loading = () => <div></div>

function PageShell({ pageContext, children }) {
  // set the initial state to something that can be rendered on server
  const [Cursor, setCursor] = React.useState(() => Loading);

  // once on the browser, dynamically import the component
  React.useEffect(() => {
    setCursor(() => React.lazy(() => import('./Cursor')));
  }, []);

  return (
    <React.Suspense fallback={<Loading />}>

    <DndProvider backend={HTML5Backend}>
      <PageContextProvider pageContext={pageContext}>
        <Cursor />
        {children}
      </PageContextProvider>
      </DndProvider >
    </React.Suspense>
  );
}

