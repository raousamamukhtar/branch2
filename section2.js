"use client";
import React from "react";

function SectionTwo() {
  return (
    <>
      <div className="home_section_2 -mt-20">
        <div className="py-5 future-bg d-none d-lg-flex align-items-center">
          <div className="container py-5 p-lg-5">
            <div className="py-5 p-lg-5">
              <div className="d-flex flex-column align-items-center text-center">
                <h1 className="text-uppercase fw-700 oz_ove_sub text-white">
                  Reinventing group travel
                  <br />
                  in <span className="text-yellow">Australia.</span>
                </h1>
              </div>
              <div className="oz_ove_desc mt-3 text-center px-lg-5">
                <p className="px-lg-5">
                  Affordable, convenient group transportation service powered by
                  innovative ride share technology – easing congestion, reducing
                  emissions, and connecting communities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-block d-lg-none">
          <div className="d-flex justify-content-evenly py-3">
            <div className="d-flex justify-content-between row w-100 mx-0">
              <div className="mob-section-2-img future-mini d-flex justify-content-center align-items-center rounded px-1">
                <div className="d-flex flex-column align-items-center text-center">
                  <span className="text-uppercase fw-bolder fs-12 text-yellow">
                    Oz Ove
                  </span>
                  <span className="text-uppercase fw-600 fs-12 text-white">
                    The Future of Transportation
                  </span>
                </div>
              </div>
              <div className="mob-section-2-img lead-mini d-flex justify-content-center align-items-center rounded px-1">
                <div className="d-flex flex-column align-items-center text-center">
                  <span
                    className="text-white text-capitalize"
                    style={{ fontSize: "11px" }}
                  >
                    Lead the pack and ride
                  </span>
                  <span className="text-uppercase fw-bolder fs-12 text-yellow">
                    Oz Ove
                  </span>
                  <span
                    className="text-white text-capitalize"
                    style={{ fontSize: "11px" }}
                  >
                    Book for your group today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
