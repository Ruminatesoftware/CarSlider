import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./ThumbnailSlider.css";

const ThumbnailSlider = () => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button className="slick-arrow next">
        <FontAwesomeIcon icon={faChevronRight} onClick={onClick} />
      </button>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button className="slick-arrow prev">
        <FontAwesomeIcon icon={faChevronLeft} onClick={onClick} />
      </button>
    );
  }
  const settings = {
    customPaging: function (i: any) {
      return (
        <a>
          <img src={`/images/car${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="tab-main-section">
        <div className="logo-block">
          <a href="#">Logo</a>
        </div>

        <Tabs defaultActiveKey="cars" id="justify-tab-example">
          <Tab eventKey="cars" title="CARS" className="mb-3 ">
            <div className="tab-content-wrap">
              <Slider {...settings}>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car1.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>Max speed</td>
                              <td>230 km/h</td>
                            </tr>
                            <tr>
                              <td>Acceleration 0-100</td>
                              <td> 5.4s</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td>2,050 kg</td>
                            </tr>
                            <tr>
                              <td className="color-btn" colSpan={2}>
                                <button className="black"></button>
                                <button className="gray"></button>
                                <button className="yello"></button>
                                <button className="sky"></button>
                                <button className="purple"></button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car2.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>Max speed</td>
                              <td>230 km/h</td>
                            </tr>
                            <tr>
                              <td>Acceleration 0-100</td>
                              <td> 5.4s</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td>2,050 kg</td>
                            </tr>
                            <tr>
                              <td className="color-btn" colSpan={2}>
                                <button className="black"></button>
                                <button className="gray"></button>
                                <button className="yello"></button>
                                <button className="sky"></button>
                                <button className="purple"></button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car3.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>Max speed</td>
                              <td>230 km/h</td>
                            </tr>
                            <tr>
                              <td>Acceleration</td>
                              <td>0-100 5.4s</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td>2,050 kg</td>
                            </tr>
                            <tr>
                              <td className="color-btn" colSpan={2}>
                                <button className="black"></button>
                                <button className="gray"></button>
                                <button className="yello"></button>
                                <button className="sky"></button>
                                <button className="purple"></button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car4.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tr>
                            <td>Max speed</td>
                            <td>230 km/h</td>
                          </tr>
                          <tr>
                            <td>Acceleration</td>
                            <td>0-100 5.4s</td>
                          </tr>
                          <tr>
                            <td>Weight</td>
                            <td>2,050 kg</td>
                          </tr>
                          <tr>
                            <td className="color-btn" colSpan={2}>
                              <button className="black"></button>
                              <button className="gray"></button>
                              <button className="yello"></button>
                              <button className="sky"></button>
                              <button className="purple"></button>
                            </td>
                          </tr>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car5.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tr>
                            <td>Max speed</td>
                            <td>230 km/h</td>
                          </tr>
                          <tr>
                            <td>Acceleration</td>
                            <td>0-100 5.4s</td>
                          </tr>
                          <tr>
                            <td>Weight</td>
                            <td>2,050 kg</td>
                          </tr>
                          <tr>
                            <td className="color-btn" colSpan={2}>
                              <button className="black"></button>
                              <button className="gray"></button>
                              <button className="yello"></button>
                              <button className="sky"></button>
                              <button className="purple"></button>
                            </td>
                          </tr>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Tab>
          <Tab eventKey="motorcycles" title="MOTORCYCLES" className="mb-3">
            <div className="tab-content-wrap">
              <Slider {...settings}>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car1.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>Max speed</td>
                              <td>230 km/h</td>
                            </tr>
                            <tr>
                              <td>Acceleration 0-100</td>
                              <td> 5.4s</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td>2,050 kg</td>
                            </tr>
                            <tr>
                              <td className="color-btn" colSpan={2}>
                                <button className="black"></button>
                                <button className="gray"></button>
                                <button className="yello"></button>
                                <button className="sky"></button>
                                <button className="purple"></button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car2.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>Max speed</td>
                              <td>230 km/h</td>
                            </tr>
                            <tr>
                              <td>Acceleration 0-100</td>
                              <td> 5.4s</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td>2,050 kg</td>
                            </tr>
                            <tr>
                              <td className="color-btn" colSpan={2}>
                                <button className="black"></button>
                                <button className="gray"></button>
                                <button className="yello"></button>
                                <button className="sky"></button>
                                <button className="purple"></button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car3.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>Max speed</td>
                              <td>230 km/h</td>
                            </tr>
                            <tr>
                              <td>Acceleration</td>
                              <td>0-100 5.4s</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td>2,050 kg</td>
                            </tr>
                            <tr>
                              <td className="color-btn" colSpan={2}>
                                <button className="black"></button>
                                <button className="gray"></button>
                                <button className="yello"></button>
                                <button className="sky"></button>
                                <button className="purple"></button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car4.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tr>
                            <td>Max speed</td>
                            <td>230 km/h</td>
                          </tr>
                          <tr>
                            <td>Acceleration</td>
                            <td>0-100 5.4s</td>
                          </tr>
                          <tr>
                            <td>Weight</td>
                            <td>2,050 kg</td>
                          </tr>
                          <tr>
                            <td className="color-btn" colSpan={2}>
                              <button className="black"></button>
                              <button className="gray"></button>
                              <button className="yello"></button>
                              <button className="sky"></button>
                              <button className="purple"></button>
                            </td>
                          </tr>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car5.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tr>
                            <td>Max speed</td>
                            <td>230 km/h</td>
                          </tr>
                          <tr>
                            <td>Acceleration</td>
                            <td>0-100 5.4s</td>
                          </tr>
                          <tr>
                            <td>Weight</td>
                            <td>2,050 kg</td>
                          </tr>
                          <tr>
                            <td className="color-btn" colSpan={2}>
                              <button className="black"></button>
                              <button className="gray"></button>
                              <button className="yello"></button>
                              <button className="sky"></button>
                              <button className="purple"></button>
                            </td>
                          </tr>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Tab>
          <Tab eventKey="mycars" title="MY CARS" className="mb-3">
            <div className="tab-content-wrap">
              <Slider {...settings}>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car1.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>Max speed</td>
                              <td>230 km/h</td>
                            </tr>
                            <tr>
                              <td>Acceleration 0-100</td>
                              <td> 5.4s</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td>2,050 kg</td>
                            </tr>
                            <tr>
                              <td className="color-btn" colSpan={2}>
                                <button className="black"></button>
                                <button className="gray"></button>
                                <button className="yello"></button>
                                <button className="sky"></button>
                                <button className="purple"></button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car2.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>Max speed</td>
                              <td>230 km/h</td>
                            </tr>
                            <tr>
                              <td>Acceleration 0-100</td>
                              <td> 5.4s</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td>2,050 kg</td>
                            </tr>
                            <tr>
                              <td className="color-btn" colSpan={2}>
                                <button className="black"></button>
                                <button className="gray"></button>
                                <button className="yello"></button>
                                <button className="sky"></button>
                                <button className="purple"></button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car3.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>Max speed</td>
                              <td>230 km/h</td>
                            </tr>
                            <tr>
                              <td>Acceleration</td>
                              <td>0-100 5.4s</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td>2,050 kg</td>
                            </tr>
                            <tr>
                              <td className="color-btn" colSpan={2}>
                                <button className="black"></button>
                                <button className="gray"></button>
                                <button className="yello"></button>
                                <button className="sky"></button>
                                <button className="purple"></button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car4.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tr>
                            <td>Max speed</td>
                            <td>230 km/h</td>
                          </tr>
                          <tr>
                            <td>Acceleration</td>
                            <td>0-100 5.4s</td>
                          </tr>
                          <tr>
                            <td>Weight</td>
                            <td>2,050 kg</td>
                          </tr>
                          <tr>
                            <td className="color-btn" colSpan={2}>
                              <button className="black"></button>
                              <button className="gray"></button>
                              <button className="yello"></button>
                              <button className="sky"></button>
                              <button className="purple"></button>
                            </td>
                          </tr>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-container-wrap">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-company-details">
                        <a href="#" className="car-company-logo ">
                          <img src={"/images/logo.png"} />
                        </a>
                        <h2 className="text-uppercase">Porsche Taycan</h2>
                        <p>
                          The Porsche Taycan is a battery electric saloon and
                          shooting brake produced by German automobile
                          manufacturer Porsche
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div>
                        <img src={"/images/car5.jpg"} />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="specs-block">
                        <h2 className="text-uppercase">Specs</h2>
                        <table>
                          <tr>
                            <td>Max speed</td>
                            <td>230 km/h</td>
                          </tr>
                          <tr>
                            <td>Acceleration</td>
                            <td>0-100 5.4s</td>
                          </tr>
                          <tr>
                            <td>Weight</td>
                            <td>2,050 kg</td>
                          </tr>
                          <tr>
                            <td className="color-btn" colSpan={2}>
                              <button className="black"></button>
                              <button className="gray"></button>
                              <button className="yello"></button>
                              <button className="sky"></button>
                              <button className="purple"></button>
                            </td>
                          </tr>
                        </table>
                        <h6>Price 5,000,000 $</h6>
                        <div className="button-group">
                          <button>Buy</button>
                          <button>Test Drive</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
export default ThumbnailSlider;
