import React from "react";
import "./banner.scss";
const Banner = () => {
  return (
    <div className="my-container">
      <div className="banner">
        <div className="banner_content">
          <div className="img_banner">
            <img src="./banner2.jpg" alt="img_banner" />
          </div>
          <div className="newFeature">
            <p className="title1 ">New Arrival</p>
            <h3 className="mainTitleBanner">P-6000</h3>
            <p className="title2">
              Remastered for style, elevate your everyday look with the
              Pegasus-inspired legacy runner.
            </p>
            <div className="link_shop_banner">
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
