import { memo } from "react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import cat1Img from "../../../../src/assets/users/images/categories/cat-1.jpg";
import cat2Img from "../../../../src/assets/users/images/categories/cat-2.jpg";
import cat3Img from "../../../../src/assets/users/images/categories/cat-3.jpg";
import cat4Img from "../../../../src/assets/users/images/categories/cat-4.jpg";
import cat5Img from "../../../../src/assets/users/images/categories/cat-5.jpg";
import feature1Img from "../../../../src/assets/users/images/featured/feature1.jpg";
import feature2Img from "../../../../src/assets/users/images/featured/feature2.jpg";
import feature3Img from "../../../../src/assets/users/images/featured/feature3.jpg";
import feature4Img from "../../../../src/assets/users/images/featured/feature4.jpg";
import feature5Img from "../../../../src/assets/users/images/featured/feature5.jpg";
import feature6Img from "../../../../src/assets/users/images/featured/feature6.jpg";
import feature7Img from "../../../../src/assets/users/images/featured/feature7.jpg";
import feature8Img from "../../../../src/assets/users/images/featured/feature8.jpg";
import banner1Img from "../../../../src/assets/users/images/banner/banner-1.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { formatter } from "../../../utils/formatter";

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5  
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const sliderItems = [
        {
            bgImg: cat1Img,
            name: "Cam tươi"
        },
        {
            bgImg: cat2Img,
            name: "Hoa quả khô"
        },
        {
            bgImg: cat3Img,
            name: "Rau củ tươi"
        },
        {
            bgImg: cat4Img,
            name: "Sữa hộp"
        },
        {
            bgImg: cat5Img,
            name: "Thịt bò"
        }
      ];

      const featproducts = {
        all: {
          title: "Toàn bộ",
          products: [
            {
              img: feature1Img,
              name: "Thịt bò nạt",
              price: 90000,
            },
            {
              img: feature2Img,
              name: "Chuối",
              price: 20000,
            },
            {
              img: feature3Img,
              name: "Ổi",
              price: 25000,
            },
            {
              img: feature4Img,
              name: "Dưa hấu",
              price: 44000,
            },
            {
              img: feature5Img,
              name: "Nho tím",
              price: 120000,
            },
            {
              img: feature6Img,
              name: "Hamburger",
              price: 86000,
            },
            {
              img: feature7Img,
              name: "Xoài keo",
              price: 25000,
            },
            {
              img: feature8Img,
              name: "Táo Úc",
              price: 53000,
            },
          ],
        },
        freshMeat: {
          title: "Thịt tươi",
          products: [
            {
              img: feature1Img,
              name: "Thịt bò nạt",
              price: 90000,
            },
          ],
        },
        fruits: {
          title: "Trái cây",
          products: [
            {
              img: feature2Img,
              name: "Chuối",
              price: 20000,
            },
            {
              img: feature7Img,
              name: "Xoài keo",
              price: 25000,
            },
            {
              img: feature8Img,
              name: "Táo Úc",
              price: 53000,
            },
            {
              img: feature3Img,
              name: "Ổi",
              price: 25000,
            },
            {
              img: feature4Img,
              name: "Dưa hấu",
              price: 44000,
            },
            {
              img: feature5Img,
              name: "Nho tím",
              price: 120000,
            },
          ],
        },
        fastFood: {
          title: "Thức ăn nhanh",
          products: [
            {
              img: feature6Img,
              name: "Hamburger",
              price: 86000,
            },
          ],
        },
      };

      const renderFeaturedProducts = (data) => {
         const tabList = [];
         const tabPanels = [];
         

         Object.keys(data).forEach((key, index) => {
          console.log(key, index);
          tabList.push(<Tab key={index}>{data[key].title}</Tab>);

          const tabPanel = [];
          data[key].products.forEach((item, j) => {
            tabPanel.push(
              <div className="col-lg-3" key={j}>
                <div className="featured__item">
                  <div className="featured__item__pic"
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                  >
                    <ul className="featured__item__pic__hover">
                      <li>
                        <AiOutlineEye/>
                      </li>
                      <li>
                        <AiOutlineShoppingCart/>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <Link to= "">{item.name}</Link>
                    </h6>
                    <h5>{formatter(item.price)}</h5>
                  </div>
                </div>
              </div>
            );
          });
          tabPanels.push(tabPanel);
         });

         return (
          <Tabs>
            <TabList>{tabList}</TabList>

            {tabPanels.map((item, key) => (
              <TabPanel key={key}>
                <div className="row">{item}</div>
              </TabPanel>
            ))}
        </Tabs>
         );
      };

      return (
        <>
            {/* {Categories Begin} */}
                <div className="container__categories_slider container">
                    <Carousel responsive={responsive} className="categories_slider">
                        {sliderItems.map((item,key) => (
                          <>
                            <div className="categories_slider_item"
                            style={{ backgroundImage: `url(${item.bgImg})`}}>
                          </div>
                          <div>
                            <p>{item.name}</p>
                          </div>
                          </>
                        ))}
                    </Carousel>
                </div>
            {/* {Categories End} */}
            {/* {Featured Begin} */}
              <div className="container">
                <div className="featured">
                  <div className="section-title">
                    <h2>Sản phẩm nổi bật</h2>
                  </div>
                  {renderFeaturedProducts(featproducts)}
                </div>
              </div>
            {/* {Featured End} */}
            {/* Banner Begin */}
              <div className="container">
                <div className="banner">
                  <div className="banner__pic col-xl-6">
                    <img src={banner1Img} alt="banner"></img>
                  </div>
                  <div className="banner__pic col-xl-6">
                    <img src={banner1Img} alt="banner"></img>
                  </div>
                </div>
              </div>
            {/* Banner End */}
        </>
      )
};

export default memo(HomePage);