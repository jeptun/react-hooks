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
            path: "asyncBtnZvyseniCisla",
            element: <AsyncBtnZvyseniCisla />
          },
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
