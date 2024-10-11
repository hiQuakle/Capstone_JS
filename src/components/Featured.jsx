import React from "react";
import "./featured.scss";
const Featured = () => {
  return (
    <div>
      <div className="my-container">
        <div className="featured_content">
          <div className="title_featured">Featured</div>
          <div className="card_content">
            <div className="card_items">
              <div className="card_overlay">
                <img
                  src="https://i.pinimg.com/564x/e9/e3/ab/e9e3ab2fcb43178df12e9935e993f73f.jpg"
                  alt=""
                />
              </div>
              <div className="title_card">
                <h3>Nike Pegasus Plus</h3>
                <p>Add instant energy to your next run.</p>
              </div>
            </div>
            <div className="card_items">
              <div className="card_overlay">
                <img
                  src="https://i.pinimg.com/564x/20/61/82/206182829c4d9a6c1c5176ae14e0159b.jpg"
                  alt=""
                />
              </div>
              <div className="title_card">
                <h3>Nike Tech Woven Suit</h3>
                <p>Engineered to unlock your range of motion.</p>
              </div>
            </div>
            <div className="card_items">
              <div className="card_overlay">
                <img
                  src="https://i.pinimg.com/564x/34/5c/50/345c50652d30cb98658b5a423194e9cb.jpg"
                  alt=""
                />
              </div>
              <div className="title_card">
                <h3>EasyOn</h3>
                <p>For playtime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
