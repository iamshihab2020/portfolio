import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider,HashRouter } from "react-router-dom";
import router from "./Routes/routes.jsx";
import "animate.css";
import AnimatedCursor from "react-animated-cursor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={8}
      outerSize={45}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "#00efc1",
      }}
      outerStyle={{
        border: "3px solid #12f7d5",
      }}
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);
