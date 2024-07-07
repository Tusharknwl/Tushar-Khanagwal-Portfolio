import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function App() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Suspense
        fallback={
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p>Loading...</p>
          </div>
        }
      >
        <Spline
          scene={`${import.meta.env.VITE_APP_SPLINE_MODEL_URL}`}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 100, left: 0 }}
        />
      </Suspense>
    </div>
  );
}
