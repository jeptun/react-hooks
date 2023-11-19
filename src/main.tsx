import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import AsyncBtnZvyseniCisla from "./routes/component/useState/AsyncBtnZvyseniCisla.tsx";
import UseState from "./routes/pages/UseState.tsx";
import UseEffect from "./routes/pages/UseEffect.tsx";
import InitializeState from "./routes/component/useState/InitializeState.tsx";
import DerivedStates from "./routes/component/useState/DerivedStates.tsx";
import UnderstandingUseEffect from "./routes/component/useEffect/understandingUseEffect.tsx";
import TypeDependency from "./routes/component/useEffect/TypeDependency.tsx";
import UpdatingState from "./routes/component/useEffect/UpdatingState.tsx";
import CleanUpFunction from "./routes/component/useEffect/CleanUpFunction.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "UseState",
        element: <UseState />,
        children: [
          {
            path: "asyncBtnZvyseniCisla",
            element: <AsyncBtnZvyseniCisla />
          },
          {
            path: "initializeState",
            element: <InitializeState />
          },
          {
            path: "derivedStates",
            element: <DerivedStates />
          }
        ]
      },
      {
        path: "UseEffect",
        element: <UseEffect />,
        children: [
          {
            path: "UnderstandingUseEffect",
            element: <UnderstandingUseEffect />
          },
          {
            path: "TypeDependency",
            element: <TypeDependency />
          },
          {
            path: "UpdatingState",
            element: <UpdatingState />
          },
          {
            path: "CleanUpFunction",
            element: <CleanUpFunction />
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
