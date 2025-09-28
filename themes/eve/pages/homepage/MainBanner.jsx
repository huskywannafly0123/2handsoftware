import React from "react";
import "./MainBanner.scss";

function MainBanner() {
  return (
    <section className="hero">
        <div className="container">
            <h1>Premium Digital Accounts</h1>
            <p>Access exclusive accounts with instant delivery and lifetime warranty</p>
        </div>
    </section>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};
