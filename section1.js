"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Search from "../../public/svg/search.svg";
import Location from "../../public/svg/location.svg";
import Add from "../../public/svg/add.svg";
import Bot from "../../public/Images/png/bot.svg";
import Duration1 from "../../public/svg/greyDuration.svg";
import LocationRadio from "../../public/svg/locationRadio.svg";
import RideSmall from "../../public/Images/png/rideSmall.png";
import DeliverySmall from "../../public/Images/png/deliverySmall.png";
import mapboxgl from "mapbox-gl";
import Map from "./map";
// import usePlacesAutocomplete, { getGeocode, getZipCode } from 'use-places-autocomplete';
// import EconomyCar from "../../public/svg/economycar.svg";
// import Bus from "../../public/svg/bus.svg";
// import BusD from "../../public/svg/busD.svg";
// import ComfortCar from "../../public/svg/comfortcar.svg";
// import Truck from "../../public/svg/truck_mini.svg";
// import Tag from "../../public/svg/tag.svg";
// import Profile from "../../public/svg/profile.svg";
// import Pay from "../../public/svg/pay.svg";
// import Coupon from "../../public/svg/coupon.svg";
// import Duration from "../../public/svg/duration.svg";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGFydW4yNTA2IiwiYSI6ImNsaDdwbzlvZTAwdWkzcW8xM3Bib3k4bzIifQ.KY0XQwjRpgkn7KYvdaXDbQ";

function SectionOne() {
  const [pointsSelected, setPointsSelected] = useState({
    start: { longitude: 0, latitude: 0 },
    stop: { longitude: 0, latitude: 0 },
    end: { longitude: 0, latitude: 0 },
  });

  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 1500) {
        setIsLaptop(!isLaptop);
      }
    }
  }, []);

  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="form-bg">
        <div className="relative h-100">
          <div className="h-100 map_section">
            <Map {...pointsSelected} />
          </div>
          <div className="container d-none d-lg-block">
            <div className="card">
              <div className="card-body p-0">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className={`nav-link ride w-50 fw-bold ${
                        isLaptop ? "p-2 fs-18" : "fs-22 p-4"
                      } active`}
                      id="nav-ride-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-ride"
                      type="button"
                      role="tab"
                      aria-controls="nav-ride"
                      aria-selected="true"
                      style={{ textAlign: "center", color: "#333333" }}
                    >
                      Ride
                    </button>
                    <button
                      className={`nav-link delivery w-50 fw-bold ${
                        isLaptop ? "p-2 fs-18" : "fs-22 p-4"
                      }`}
                      id="nav-delivery-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-delivery"
                      type="button"
                      role="tab"
                      aria-controls="nav-delivery"
                      aria-selected="false"
                      style={{ textAlign: "center", color: "#333333" }}
                    >
                      Delivery
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active bg-transparent"
                    id="nav-ride"
                    role="tabpanel"
                    aria-labelledby="nav-ride-tab"
                  >
                    <ul
                      className="nav nav-pills bg-transparent"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li
                        className="nav-item w-50 bg-transparent"
                        role="presentation"
                      >
                        <button
                          className={`nav-link w-100 active bg-transparent ${
                            isLaptop ? "p-2 pb-1" : "p-4 pb-2"
                          }`}
                          id="pills-standard-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-standard"
                          type="button"
                          role="tab"
                          aria-controls="pills-standard"
                          aria-selected="true"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div>Standard</div>
                        </button>
                      </li>
                      <li
                        className="nav-item w-50 bg-transparent"
                        role="presentation"
                      >
                        <button
                          className={`nav-link w-100 bg-transparent ${
                            isLaptop ? "p-2 pb-1" : "p-4 pb-2"
                          }`}
                          id="pills-business-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-business"
                          type="button"
                          role="tab"
                          aria-controls="pills-business"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div>Business</div>
                        </button>
                      </li>
                    </ul>
                    <div
                      className="tab-content bg-transparent"
                      id="pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active bg-transparent"
                        id="pills-standard"
                        role="tabpanel"
                        aria-labelledby="pills-standard-tab"
                      >
                        <div
                          className={`${
                            isLaptop ? "p-2" : "p-3"
                          } bg-transparent`}
                        >
                          <div className="location_section">
                            <div
                              className={`d-flex flex-row align-items-center card ${
                                isLaptop ? "p-1 my-1" : "p-2 my-2"
                              } from`}
                              style={{
                                color: "#333333",
                                fontSize: 15,
                                fontWeight: "500",
                                textTransform: "capitalize",
                              }}
                            >
                              <Location className="me-1" />
                              {/* Voskresenskiye Vorota Drive, 1А */}
                              <input
                                className="w-100 border-0"
                                placeholder="From?"
                              />
                            </div>
                            <div
                              className={`d-flex flex-row align-items-center card ${
                                isLaptop ? "p-1 my-1" : "p-2 my-2"
                              } to`}
                              style={{
                                color: "#333333",
                                fontSize: 15,
                                fontWeight: "500",
                                textTransform: "capitalize",
                              }}
                            >
                              <Location className="me-1" />
                              {/* Where to? */}
                              <input
                                className="w-100 border-0"
                                placeholder="Where to?"
                              />
                            </div>
                            <div
                              className={`d-flex flex-row align-items-center card ${
                                isLaptop ? "p-1 my-1" : "p-2 my-2"
                              } add_stop`}
                              style={{
                                color: "rgba(80, 80, 80, 0.75)",
                                fontSize: 15,
                                fontWeight: "400",
                                textTransform: "capitalize",
                              }}
                            >
                              <Add className="me-1" />
                              Add Stop
                              {/* <input
                                className="w-100 border-0 bg-transparent"
                                placeholder="Add Stop"
                              /> */}
                            </div>
                          </div>
                          {/* <div className="row w-100 card vehicle_options">
                            <div className="col-sm-4">
                              <EconomyCar />
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                economy
                                <br />
                                __
                              </div>
                            </div>
                            <div
                              style={{ opacity: 0.5 }}
                              className="col-sm-4"
                            >
                              <ComfortCar />
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                comfort
                                <br />
                                __
                              </div>
                            </div>
                            <div
                              style={{ opacity: 0.5 }}
                              className="col-sm-4"
                            >
                              <ComfortCar />
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                comfort+
                                <br />
                                __
                              </div>
                            </div>
                            <div
                              style={{ opacity: 0.5 }}
                              className="col-sm-4"
                            >
                              <Bus />
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                business
                                <br />
                                __
                              </div>
                            </div>
                            <div
                              style={{ opacity: 0.5 }}
                              className="col-sm-4"
                            >
                              <EconomyCar />
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                kids
                                <br />
                                __
                              </div>
                            </div>
                            <div
                              style={{ opacity: 0.5 }}
                              className="col-sm-4"
                            >
                              <EconomyCar />
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                minivan
                                <br />
                                __
                              </div>
                            </div>
                          </div>
                          <div className="card driver_instruction">
                            <div
                              style={{
                                color: "rgba(80, 80, 80, 0.75)",
                                fontSize: 14,
                                fontWeight: "600",
                                textTransform: "capitalize",
                              }}
                            >
                              driver instructions...
                            </div>
                          </div>
                          <div className="row w-100 card premium_van">
                            <div className="col-md-8">
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 12,
                                  fontWeight: "700",
                                  textTransform: "capitalize",
                                }}
                              >
                                premium van
                              </div>
                              <div>
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <Tag className="me-1" />
                                  $5.28
                                </div>
                              </div>
                              <div className="d-flex">
                                <div
                                  className="me-1"
                                  style={{
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <Profile />
                                  6-13
                                </div>
                                <div
                                  className="me-1"
                                  style={{
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  | 12:23pm
                                </div>
                                <div
                                  className="me-1"
                                  style={{
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "500",
                                  }}
                                >
                                  | 3-5 min away
                                </div>
                              </div>
                              <div
                                style={{
                                  color: "rgba(51, 51, 51, 0.50)",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                minimum 6 passengers
                              </div>
                            </div>
                            <div className="col-md-4">
                              <ComfortCar />
                            </div>
                          </div>
                          <div className="vehicle_specifications card">
                            <div
                              style={{
                                color: "#333333",
                                fontSize: 14,
                                fontWeight: "700",
                                textTransform: "capitalize",
                              }}
                            >
                              vehicle specifications
                            </div>
                            <div>
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="regularVan"
                                    name="regularVan"
                                    value="Bike"
                                  />
                                  <label>
                                    regular van
                                  </label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $8.25
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="premiumVan"
                                    name="premiumVan"
                                    value="Bike"
                                  />
                                  <label>
                                    premium van
                                  </label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $10.50
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="wheelchairVan"
                                    name="wheelchairVan"
                                    value="Bike"
                                  />
                                  <label>
                                    wheelchair vane
                                  </label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $16.00
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="partyVan"
                                    name="partyVan"
                                    value="Bike"
                                  />
                                  <label>
                                    party van
                                  </label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $22.00
                                </div>
                              </div>
                              <hr />
                            </div>
                          </div>
                          <div className="additional_services card">
                            <div
                              style={{
                                color: "#333333",
                                fontSize: 14,
                                fontWeight: "700",
                                textTransform: "capitalize",
                              }}
                            >
                              additional servives
                            </div>
                            <div>
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="splitFace"
                                    name="splitFace"
                                    value="Bike"
                                  />
                                  <label>
                                    Split face</label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $5.00
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="luggageTrailer"
                                    name="luggageTrailer"
                                    value="Car"
                                  />
                                  <label>
                                    Luggage Trailer
                                  </label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $12.00
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="assistDriver"
                                    name="assistDriver"
                                    value="Boat"
                                  />
                                  <label>
                                    assist driver
                                  </label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $20.00
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="bookByHour"
                                    name="bookByHour"
                                    value="Boat"
                                  />
                                  <label>
                                    Book by hour
                                  </label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $20.00
                                </div>
                              </div>
                              <hr />
                            </div>
                          </div>
                          <hr className="my-1" />
                          <div className="d-flex justify-content-evenly mb-1 align-items-center">
                            <div>
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 14,
                                  fontWeight: "500",
                                  textTransform: "capitalize",
                                }}
                              >
                                <Pay className="me-1" />
                                apple pay
                              </div>
                            </div>
                            <div
                              style={{
                                color: "#333333",
                                fontSize: 14,
                                fontWeight: "500",
                                textTransform: "capitalize",
                              }}
                            >
                              |
                            </div>
                            <div>
                              <div
                                style={{
                                  color: "#FAAD1D",
                                  fontSize: 14,
                                  fontWeight: "500",
                                  textTransform: "capitalize",
                                }}
                              >
                                <Coupon className="me-1" />
                                coupon
                              </div>
                            </div>
                            <div
                              style={{
                                color: "#333333",
                                fontSize: 14,
                                fontWeight: "500",
                                textTransform: "capitalize",
                              }}
                            >
                              |
                            </div>
                            <div>
                              <div
                                style={{
                                  color: "#FAAD1D",
                                  fontSize: 14,
                                  fontWeight: "500",
                                  textTransform: "capitalize",
                                }}
                              >
                                <Duration className="me-1" />
                                schedule
                              </div>
                            </div>
                          </div> */}
                        </div>
                        <div>
                          <button
                            className={`w-100 rounded-bottom-3 text-dark fw-700 text-center bg-yellow ${
                              isLaptop ? "fs-18 p-2" : "fs-20 p-3"
                            }`}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-business"
                        role="tabpanel"
                        aria-labelledby="pills-business-tab"
                      >
                        <div className={`${isLaptop ? "p-2" : "p-3"}`}>
                          <div className="location_section">
                            <div
                              className={`d-flex flex-row align-items-center card ${
                                isLaptop ? "p-1 my-1" : "p-2 my-2"
                              } from`}
                              style={{
                                color: "#333333",
                                fontSize: 15,
                                fontWeight: "500",
                                textTransform: "capitalize",
                              }}
                            >
                              <Location className="me-1" />
                              {/* Voskresenskiye Vorota Drive, 1А */}
                              <input
                                className="w-100 border-0"
                                placeholder="From?"
                              />
                            </div>
                            <div
                              className={`d-flex flex-row align-items-center card ${
                                isLaptop ? "p-1 my-1" : "p-2 my-2"
                              } to`}
                              style={{
                                color: "#333333",
                                fontSize: 15,
                                fontWeight: "500",
                                textTransform: "capitalize",
                              }}
                            >
                              <Location className="me-1" />
                              {/* Where to? */}
                              <input
                                className="w-100 border-0"
                                placeholder="Where to?"
                              />
                            </div>
                            <div
                              className={`d-flex flex-row align-items-center card ${
                                isLaptop ? "p-1 my-1" : "p-2 my-2"
                              } add_stop`}
                              style={{
                                color: "rgba(80, 80, 80, 0.75)",
                                fontSize: 15,
                                fontWeight: "400",
                                textTransform: "capitalize",
                              }}
                            >
                              <Add className="me-1" />
                              Add Stop
                              {/* <input
                                className="w-100 border-0 bg-transparent"
                                placeholder="Add Stop"
                              /> */}
                            </div>
                          </div>
                          {/* <div className="row w-100 card vehicle_options">
                            <div className="col-sm-4">
                              <BusD />
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                economy
                                <br />
                                __
                              </div>
                            </div>
                            <div
                              style={{ opacity: 0.5 }}
                              className="col-sm-4"
                            >
                              <BusD />
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                comfort
                                <br />
                                __
                              </div>
                            </div>
                            <div
                              style={{ opacity: 0.5 }}
                              className="col-sm-4"
                            >
                              <BusD />
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                comfort+
                                <br />
                                __
                              </div>
                            </div>
                            <div
                              style={{ opacity: 0.5 }}
                              className="col-sm-4"
                            >
                              <Truck className="truck" />
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                business
                                <br />
                                __
                              </div>
                            </div>
                            <div
                              style={{ opacity: 0.5 }}
                              className="col-sm-4"
                            >
                              <Truck className="truck" />
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                kids
                                <br />
                                __
                              </div>
                            </div>
                            <div
                              style={{ opacity: 0.5 }}
                              className="col-sm-4"
                            >
                              <Truck className="truck" />
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                minivan
                                <br />
                                __
                              </div>
                            </div>
                          </div>
                          <div className="card driver_instruction">
                            <div
                              style={{
                                color: "rgba(80, 80, 80, 0.75)",
                                fontSize: 14,
                                fontWeight: "600",
                                textTransform: "capitalize",
                              }}
                            >
                              driver instructions...
                            </div>
                          </div>
                          <div className="row w-100 card premium_van">
                            <div className="col-md-8">
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 12,
                                  fontWeight: "700",
                                  textTransform: "capitalize",
                                }}
                              >
                                premium van
                              </div>
                              <div>
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <Tag className="me-1" />
                                  $5.28
                                </div>
                              </div>
                              <div className="d-flex">
                                <div
                                  className="me-1"
                                  style={{
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <Profile />
                                  6-13
                                </div>
                                <div
                                  className="me-1"
                                  style={{
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  | 12:23pm
                                </div>
                                <div
                                  className="me-1"
                                  style={{
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "500",
                                  }}
                                >
                                  | 3-5 min away
                                </div>
                              </div>
                              <div
                                style={{
                                  color: "rgba(51, 51, 51, 0.50)",
                                  fontSize: 10,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                              >
                                minimum 6 passengers
                              </div>
                            </div>
                            <div className="col-md-4">
                              <BusD />
                            </div>
                          </div>
                          <div className="vehicle_specifications card">
                            <div
                              style={{
                                color: "#333333",
                                fontSize: 14,
                                fontWeight: "700",
                                textTransform: "capitalize",
                              }}
                            >
                              vehicle specifications
                            </div>
                            <div>
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="smallVan"
                                    name="smallVan"
                                    value="Bike"
                                  />
                                  <label>
                                    small van</label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $8.25
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="mediumVan"
                                    name="mediumVan"
                                    value="Bike"
                                  />
                                  <label>
                                    medium van</label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $10.50
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="largeVan"
                                    name="largeVan"
                                    value="Bike"
                                  />
                                  <label>
                                    large vane</label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $16.00
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="partyVan"
                                    name="partyVan"
                                    value="Bike"
                                  />
                                  <label>
                                    party van</label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $22.00
                                </div>
                              </div>
                              <hr />
                            </div>
                          </div>
                          <div className="additional_services card">
                            <div
                              style={{
                                color: "#333333",
                                fontSize: 14,
                                fontWeight: "700",
                                textTransform: "capitalize",
                              }}
                            >
                              additional servives
                            </div>
                            <div>
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="splitFace"
                                    name="splitFace"
                                    value="Bike"
                                  />
                                  <label>
                                    Split face</label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $5.00
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="luggageTrailer"
                                    name="luggageTrailer"
                                    value="Car"
                                  />
                                  <label>
                                    Luggage Trailer
                                  </label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $12.00
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="assistDriver"
                                    name="assistDriver"
                                    value="Boat"
                                  />
                                  <label>
                                    assist driver
                                  </label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $20.00
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-between">
                                <div
                                  style={{
                                    color: "#333333",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    id="bookByHour"
                                    name="bookByHour"
                                    value="Boat"
                                  />
                                  <label>
                                    Book by hour
                                  </label>
                                </div>
                                <div
                                  style={{
                                    textAlign: "right",
                                    color: "#333333",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  $20.00
                                </div>
                              </div>
                              <hr />
                            </div>
                          </div>
                          <hr className="my-1" />
                          <div className="d-flex justify-content-evenly mb-1 align-items-center">
                            <div>
                              <div
                                style={{
                                  color: "#333333",
                                  fontSize: 14,
                                  fontWeight: "500",
                                  textTransform: "capitalize",
                                }}
                              >
                                <Pay className="me-1" />
                                apple pay
                              </div>
                            </div>
                            <div
                              style={{
                                color: "#333333",
                                fontSize: 14,
                                fontWeight: "500",
                                textTransform: "capitalize",
                              }}
                            >
                              |
                            </div>
                            <div>
                              <div
                                style={{
                                  color: "#FAAD1D",
                                  fontSize: 14,
                                  fontWeight: "500",
                                  textTransform: "capitalize",
                                }}
                              >
                                <Coupon className="me-1" />
                                coupon
                              </div>
                            </div>
                            <div
                              style={{
                                color: "#333333",
                                fontSize: 14,
                                fontWeight: "500",
                                textTransform: "capitalize",
                              }}
                            >
                              |
                            </div>
                            <div>
                              <div
                                style={{
                                  color: "#FAAD1D",
                                  fontSize: 14,
                                  fontWeight: "500",
                                  textTransform: "capitalize",
                                }}
                              >
                                <Duration className="me-1" />
                                schedule
                              </div>
                            </div>
                          </div> */}
                        </div>
                        <div>
                          <button
                            className={`w-100 rounded-bottom-3 text-dark fw-700 text-center bg-yellow ${
                              isLaptop ? "fs-18 p-2" : "fs-20 p-3"
                            }`}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-ride"
                    role="tabpanel"
                    aria-labelledby="nav-ride-tab"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-lg-none d-block py-2 px-1">
            <div className="px-3 py-2">
              <div
                className="d-flex py-2 rounded row"
                style={{ backgroundColor: "#f7f7f7" }}
              >
                <div style={{ width: "10%" }}>
                  <LocationRadio />
                </div>
                <div
                  className="text-center fs-16 fw-700 text-capitalize text-grey d-flex justify-content-start"
                  style={{ width: "80%" }}
                >
                  Perth library
                </div>
                <div style={{ width: "10%" }}>
                  <Duration1 />
                </div>
              </div>
            </div>
            <div className="px-3 py-2">
              <div
                className="d-flex py-2 rounded row"
                style={{ backgroundColor: "#f7f7f7" }}
              >
                <div style={{ width: "10%" }}>
                  <Search />
                </div>
                <div style={{ width: "90%" }}>
                  <div
                    className="fw-700 fs-16 text-capitalize"
                    style={{ color: "#454444" }}
                  >
                    search destination
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center w-100 px-3">
              <div
                className="w-50 d-flex justify-content-center align-items-center"
                style={{
                  padding: 10,
                  background: "rgba(250, 173, 29, 0.25)",
                  border: "1px #FAAD1D solid",
                }}
              >
                <div className="text-grey fw-600 text-capitalize d-flex align-items-center">
                  <Image
                    loader={myLoader}
                    className="w-100 object-fit-contain me-2"
                    src={RideSmall}
                    alt="RideSmall"
                  />{" "}
                  Ride
                </div>
              </div>
              <div
                className="w-50 d-flex justify-content-center align-items-center"
                style={{
                  padding: 10,
                  background: "rgba(250, 173, 29, 0.25)",
                  border: "1px #FAAD1D solid",
                }}
              >
                <div className="text-grey fw-600 text-capitalize d-flex align-items-center">
                  <Image
                    loader={myLoader}
                    className="w-100 object-fit-contain me-2"
                    src={DeliverySmall}
                    alt="DeliverySmall"
                  />
                  Delivery
                </div>
              </div>
            </div>
          </div>
          <div className="bot">
            <Bot />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
