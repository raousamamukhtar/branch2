"use client";
import React from "react";
import Image from "next/image";
import carousel1 from "../../public/Images/png/carousel1.png"
// import carousel2 from "../../public/Images/png/carousel2.png"
import carousel3 from "../../public/Images/png/carousel3.png"
import carousel4 from "../../public/Images/png/carousel4.png"
import carousel5 from "../../public/Images/png/carousel5.png"

function SectionThree() {
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="w-100 bg-white home-section-3 d-none d-lg-block">
        <div className="container px-5">
          <div id="carouselExampleCaptions" className="carousel slide px-3 py-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <Image loader={myLoader} src={carousel1} className="h-auto w-100" alt="carousel1" />
              </div>
              {/* <div className="carousel-item" data-bs-interval="3000">
                <Image loader={myLoader} src={carousel2} className="h-auto w-100" alt="carousel2" />
              </div> */}
              <div className="carousel-item" data-bs-interval="3000">
                <Image loader={myLoader} src={carousel3} className="h-auto w-100" alt="carousel3" />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <Image loader={myLoader} src={carousel4} className="h-auto w-100" alt="carousel4" />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <Image loader={myLoader} src={carousel5} className="h-auto w-100" alt="carousel5" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionThree;
