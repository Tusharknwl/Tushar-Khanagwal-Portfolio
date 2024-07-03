import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import CanvasLoader from "../Loader";

export default function App() {
  return (
    <Suspense fallback={CanvasLoader}>
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <Spline
          scene={`${import.meta.env.VITE_APP_SPLINE_MODEL_URL}`}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 100, left: 0 }}
        />
      </div>
    </Suspense>
  );
}
