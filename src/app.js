import React from "react";

import "~/app.css";
import Info from "~/components/Info";
import About from "~/components/About";
import Interest from "~/components/Interest";
import Footer from "~/components/Footer";
export default function App() {
  return (
    <div className="wrapper">
      <div className="wrapperInner">
        <Info />
        <About />
        <Interest />
      </div>
      <Footer />
    </div>
  );
}
