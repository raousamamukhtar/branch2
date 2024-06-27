"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AnimateLogo from "../../public/Images/png/animate-logo.png";
import Affordable from "../../public/svg/Affordable.svg";
import Fast from "../../public/svg/Fast.svg";
import Smile from "../../public/svg/Smile.svg";
import Secure from "../../public/svg/Secure.svg";
import Time from "../../public/svg/Time.svg";
import Logo1 from "../../public/Images/png/logo1.png";

function SectionFour() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 576) {
        setIsPhone(!isPhone);
      }
      if (window.innerWidth <= 767) {
        setIsMobile(!isMobile);
      }
      if (window.innerWidth <= 991) {
        setIsTablet(!isTablet);
      }
    }
  }, []);

  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div
        className={`home-section-4 ${isTablet ? "" : "bg-socialiconyellow"}`}
      >
        <div
          className={`container ${
            isTablet ? "rounded" : "bg-socialiconyellow"
          }`}
        >
          <div className="web-section-4 px-3">
            <div className="row w-100">
              <div className="d-flex justify-content-center align-items-center col-md-6 flex-column">
                {/* <div className="rotate-container"> */}
                <Image
                  loader={myLoader}
                  className="AnimateLogo"
                  src={Logo1}
                  alt="Animated Logo"
                  // objectFit="contain"
                  // objectPosition="center"
                />
                {/* </div> */}
                <p className="text-grey fw-bold text-center text-uppercase hyper_text">
                  Journeying Forward, Together
                </p>
              </div>
              <div className="col-md-6">
                <div>
                  <div>
                    <div className="why_oz_head text-black text-uppercase fw-bolder">
                      Why Choose Oz Ove?
                    </div>
                    <div className="text-dark fs-22 fw-400">
                      Experience Unparalleled Service Your 24/7 Travel Partner
                    </div>
                  </div>
                  <div className="d-flex flex-row my-3 align-items-center">
                    <Smile className="me-3 svg_smile" />
                    <div>
                      <div className="text-black fs-5 fw-bold">
                        Convenience is Key
                      </div>
                      <div className="text-dark why_oz_desc">
                        Travel together without the hassle, and save money and
                        planet while doing it.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row my-3 align-items-center">
                    <Fast className="me-3 svg_fast" />
                    <div>
                      <div className="text-black fs-5 fw-bold">
                        Booking Freedom
                      </div>
                      <div className="text-dark why_oz_desc">
                        On-demand or scheduled rides – fit your timeline.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row my-3 align-items-center">
                    <Affordable className="me-3 svg_affordable" />
                    <div>
                      <div className="text-black fs-5 fw-bold">
                        Affordability
                      </div>
                      <div className="text-dark why_oz_desc">
                        Transforming group travel with per person pricing.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row my-3 align-items-center">
                    <Secure className="me-3 svg_secure" />
                    <div>
                      <div className="text-black fs-5 fw-bold">
                        Diverse Fleet
                      </div>
                      <div className="text-dark why_oz_desc">
                        Premium Vans and buses to suit every group and occasion.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row my-3 align-items-center">
                    <Time className="me-3 svg_time" />
                    <div>
                      <div className="text-black fs-5 fw-bold">
                        Tailored Extras
                      </div>
                      <div className="text-dark why_oz_desc">
                        Disco lights, Book by hour, luggage trailers, airport
                        transfers – we customize it for you.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mob-section-4 p-2">
            <div className="row w-100 mx-0">
              <div className="d-flex justify-content-start align-items-start flex-column px-0">
                <div className="rotate-container">
                  <Image
                    loader={myLoader}
                    src={Logo1}
                    alt="Animated Logo "
                    // className="AnimateLogo"
                    // objectFit="contain"
                    // objectPosition="center"
                    style={{
                      width: "131px",
                      height: "136px",
                      // objectFit: 'contain'
                    }}
                  />
                </div>
                <p
                  className={`fs-22 fw-600 w-100 text-capitalize journeying_title ${
                    isMobile ? "text-left" : "text-nowrap text-center"
                  }`}
                >
                  Journeying Forward, Together
                </p>
              </div>
              <div className="px-0 d-flex flex-column justify-content-center">
                <div className="">
                  <div className="text-dark text-capitalize fs-16 fw-600">
                    Why Choose Oz Ove?
                  </div>
                  <div
                    className={`text-white fw-500 ${
                      isPhone ? "fs-12" : "fs-12"
                    }`}
                  >
                    Experience Unparalleled Service Your 24/7 Travel Partner
                  </div>
                </div>
                <div className="d-flex overflow-auto">
                  <div className="d-flex flex-row bg-white rounded-3 py-2 me-2 ps-2 pe-3 align-items-center">
                    <Affordable className="mx-2" style={{ width: "50px" }} />
                    <div className="text-black fs-12 fw-700">
                      Convenience is Key
                    </div>
                  </div>
                  <div className="d-flex flex-row bg-white rounded-3 py-2 mx-2 ps-2 pe-3 align-items-center">
                    <Fast className="mx-2" style={{ width: "50px" }} />
                    <div className="text-black fs-12 fw-700">
                      Booking Freedom
                    </div>
                  </div>
                  <div className="d-flex flex-row bg-white rounded-3 py-2 mx-2 ps-2 pe-3 align-items-center">
                    <Smile className="mx-2" style={{ width: "50px" }} />
                    <div className="text-black fs-12 fw-700">Affordability</div>
                  </div>
                  <div className="d-flex flex-row bg-white rounded-3 py-2 mx-2 ps-2 pe-3 align-items-center">
                    <Secure className="mx-2" style={{ width: "50px" }} />
                    <div className="text-black fs-12 fw-700">Diverse Fleet</div>
                  </div>
                  <div className="d-flex flex-row bg-white rounded-3 py-2 mx-2 ps-2 pe-3 align-items-center">
                    <Time className="mx-2" style={{ width: "50px" }} />
                    <div className="text-black fs-12 fw-700">
                      Tailored Extras
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFour;
