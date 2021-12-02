import React from "react";
import homepage1 from "./Media/homepage_elements-05.png";
import homepage3 from "./Media/homepage_elements-03.png";
import homepage4 from "./Media/homepage_elements-07.png";
import homepage5 from "./Media/homepage_elements-04.png";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <img src={homepage1} alt="hero-1" className="img-1" />
        </div>

        <div className="right">
          <div className="main-contant-container-1">
            <h1 className="main-title">LOREM IPSUM</h1>
            <img src={homepage3} alt="hero-2" className="img-2" />
          </div>

          <div className="main-contant-container-2">
            <div className="contant-container container-1">
              <h3 className="sub-title-1">Analysis</h3>
              <p className="sub-discription">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                dicta consequatur eius inventore saepe explicabo, expedita
              </p>
            </div>
            <div className="contant-container container-2">
              <h3 className="sub-title-2">Communication</h3>
              <p className="sub-discription">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                dicta consequatur eius inventore saepe explicabo, expedita
              </p>
            </div>
            <div className="contant-container container-3">
              <h3 className="sub-title-3">Recruitment</h3>
              <p className="sub-discription">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                dicta consequatur eius inventore
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="division-container">
        <div>
          <img src={homepage4} alt="hero-3" className="img-3" />
          <h1 className="main-title">LOREM IPSUM</h1>
        </div>

        <div className="division-container-1">
          <div className="main-box-container">
            <div className="box-container box-1">
              <h3 className="sub-title">
                <span className="dot-1">•</span> Title One
              </h3>
              <p className="sub-discrption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam deleniti aliquam commodi. Ducimus suscipit Then combine
                the height and width properties.
              </p>
            </div>
            <div className="box-container box-2">
              <h3 className="sub-title">
                <span className="dot-2">•</span> Title Two
              </h3>
              <p className="sub-discrption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam deleniti aliquam commodi. Ducimus suscipit the height
                and width.
              </p>
            </div>
            <div className="box-container box-3">
              <h3 className="sub-title">
                <span className="dot-3">•</span>Title Four
              </h3>
              <p className="sub-discrption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam deleniti aliquam commodi. Ducimus suscipit.
              </p>
            </div>
            <div className="box-container box-4">
              <h3 className="sub-title">
                <span className="dot-4">•</span>Title Three
              </h3>
              <p className="sub-discrption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam deleniti aliquam commodi. Ducimus suscipit the height
                and width.
              </p>
            </div>
          </div>
          <img src={homepage5} alt="hero-4" className="img-4" />
        </div>
      </div>
    </>
  );
};

export default Hero;
