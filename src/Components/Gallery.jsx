import React from "react";
import gallery1 from "../Images/gallery-1.jpg";
import gallery2 from "../Images/gallery-2.jpg";
import gallery3 from "../Images/gallery-3.jpg";
import gallery4 from "../Images/gallery-4.jpg";
import gallery5 from "../Images/gallery-5.jpg";
import gallery6 from "../Images/gallery-6.jpg";

export const Gallery = () => {
  return (
    <div className="Gallery">
      <h2>Gallery</h2>
      <div className="photo_gallery">
        <div id="img-1" className = "ind-pic">
          <img src={gallery1} alt="" />
        </div>
        <div id="img-2" className = "ind-pic">
          <img src={gallery2} alt="" />
        </div>
        <div id="img-3" className = "ind-pic">
          <img src={gallery3} alt="" />
        </div>
        <div id="img-4" className = "ind-pic">
          <img src={gallery4} alt="" />
        </div>
        <div id="img-6" className = "ind-pic">
          <img src={gallery6} alt="" />
        </div>
        <div id="img-5" className = "ind-pic">
          <img src={gallery5} alt="" />
        </div>
      </div>
    </div>
  );
};
