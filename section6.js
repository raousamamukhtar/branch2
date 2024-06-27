"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SectionSix() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 991) {
        setIsMobile(!isMobile);
      }
      else{
        setIsMobile(true)
      }
    }
  }, []);
  return (
    <>
      <div className={`${isMobile ? "" : "container"}`}>
        <div
          className={`corporate-bg  d-flex align-items-center justify-content-center`}
        >
          <div className={`${isMobile ? "container" : ""}`}>
            <div className="sub_container">
              <div className="text-center">
                {isMobile ? (
                  <>
                    <p className="corporate_heading">
                      Unleash 
                      <span className="text-yellow"> Corporate</span> Potential
                    </p>
                  </>
                ) : (
                  <>
                    <p className="corporate_heading">Unleash <span className="text-yellow"> Corporate</span> Potential</p>
                  </>
                )}
              </div>
              <div
                className={`text-center text-white corporate_desc my-4 d-block`}
              >
                {isMobile ? (
                  <>
                    Discover the Oz Ove Business Account advantage and transform
                    your company&apos;s transportation into a seamless,
                    cost-effective experience. Enjoy the flexibility of tailored
                    commuting solutions that adapt to your business needs,
                    ensuring a convenient and hassle-free journey!
                  </>
                ) : (
                  <>
                    Discover the Oz Ove Business Account advantage and transform
                    your company&apos;s transportation into a seamless,
                    cost-effective experience. Enjoy the flexibility of tailored
                    commuting solutions that adapt to your business needs,
                    ensuring a convenient and hassle-free journey!
                  </>
                )}
              </div>
              <div className="d-flex justify-content-evenly corporet_section">
                <button
                  className={`bg-yellow d-flex justify-content-start align-items-start text-dark fw-bold  text-center rounded order-lg-1 order-2 ${
                    isMobile ? "mx-1 my-2 text-nowrap px-3 py-1" : "px-4 py-2"
                  }`}
                  // style={{ marginLeft: isMobile ? "" : "5.5rem" }}
                >
                  Learn More
                  {/* <Link href={`/ride-with-us/business`}></Link> */}
                </button>
                {/* <button className={`d-flex justify-content-start align-items-start text-dark fw-bold text-uppercase text-center rounded order-lg-2  order-1 ${isMobile ? "mx-1 my-2 text-nowrap px-2 py-1" : "px-4 py-2"}`} style={{ marginRight: isMobile ? "" : "5.5rem" }}>
                  <Link href={`/delivery/business`}>Delivery Business</Link>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionSix;
