import { memo } from "react";
import { AiOutlineDownCircle, AiOutlineFacebook, AiOutlineGlobal, AiOutlinePhone, AiOutlineUpCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { formatter } from "../../../../utils/formatter";
import { ROUTERS } from "../../../../utils/router";
import { useState } from 'react';
import "./style.scss";

const Header = () => {
    const [isShowCagorites, setShowCagorites] = useState(true);
    const [isShowHamburger, setShowHamburger] = useState(true);
    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubMenu: false,
            child: [
                {
                    name: "Thịt",
                    path: ""
                },
                {
                    name: "Rau củ",
                    path: ""
                },
                {
                    name: "Thức ăn nhanh",
                    path: ""
                }
            ]
        },
        {
            name: "Bài viết",
            path: ""
        },
        {
            name: "Liên hệ",
            path: ""
        }
    ]);

    return (
        <>
            <div className={`hamburger__menu__overlay ${
                isShowHamburger ? "active" : ""
                }`}
                onClick={() => setShowHamburger(false)}
            />
            <div className= {`hamburger__menu__wrapper ${isShowHamburger ? "show" : ""}`}>
                <div className="header__logo">
                    <h1>THONGU SHOP</h1>
                </div>
                <div className="hamburger__menu__cart">
                    <ul>
                        <li>
                            <Link to = {""}>
                                <AiOutlineShoppingCart/> <span>1</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="header__cart__price">
                        Giỏ hàng: <span>{formatter(1000215)}</span>
                    </div>
                </div>
                <div className="header__menu__widget">
                    <div className="header__top__right__auth">
                        <Link to = {""}>
                            <AiOutlineUser /> Đăng nhập
                        </Link>
                    </div>
                </div>
                <div className="hamburger__menu__nav">
                    <ul>
                        {
                            menus.map((menu, menuKey) => (
                                <li key={menuKey} to={menu.path}>
                                    <Link to={menu.path}
                                        onClick={() => {
                                            const newMenus = [...menus];
                                            newMenus[menuKey].isShowSubMenu = !newMenus[menuKey].isShowSubMenu;
                                            setMenus(newMenus);
                                        }}
                                    >
                                        {menu.name}
                                        {menu.child && (
                                            menu.isShowSubMenu ? (
                                                <AiOutlineDownCircle/>
                                            ) : (
                                                <AiOutlineUpCircle/>
                                            )
                                        )}
                                    </Link>
                                    { menu.child && (
                                        <ul className={`header__menu__dropdown ${
                                            menu.isShowSubMenu ? "show__submenu" : ""
                                        }`}>
                                            {menu.child.map((childItem, childKey) => (
                                                <li key={`${childKey}-${childKey}`}>
                                                    <Link to={childItem.path}>{childItem.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="header__top__right__social">
                    <Link to={""}>
                        <AiOutlineFacebook/>
                    </Link>
                    <Link to={""}>
                        <AiOutlineInstagram/>
                    </Link>
                    <Link to={""}>
                        <AiOutlineLinkedin/>
                    </Link>
                    <Link to={""}>
                        <AiOutlineGlobal/>
                    </Link>
                </div>
                <div className="hamburger__menu__contact">
                    <ul>
                        <li>
                            <AiTwotoneMail />
                            thongu@gmail.com
                        </li>
                        <li>Miễn phí đơn từ {formatter(2000000)}</li>
                    </ul>
                </div>
            </div>
             
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top_left">
                            <ul>
                                <AiOutlineMail />
                                <li>thongu@gmail.com</li>
                                <li>Miễn ship đơn từ {formatter(2000000)}</li>
                            </ul>
                        </div>
                        <div className="col-6 header__top_right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineUser />
                                    </Link>
                                    <span>Đăng nhập</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <h1>
                                THO NGU SHOP
                            </h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                {menus?.map((menu, menuKey) =>(
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu?.path}>{menu?.name}</Link>
                                        {menu.child && (
                                            <ul className="header__menu__dropdown">
                                                {menu.child.map((childItem, childKey) => (
                                                    <li key={`${menuKey}-${childKey}`}>
                                                        <Link to={childItem.path}>{childItem.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <div className="header__cart_price">
                                <span>{ formatter(1274683)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <AiOutlineShoppingCart /><span>7</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hamburger__open">
                            <AiOutlineMenu 
                            onClick={() => 
                            setShowHamburger(true)}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row hero__categories_container">
                    <div className="col-xl-3 hero__cagorites">
                        <div className="hero__categories__all" onClick={() => setShowCagorites(!isShowCagorites)}>
                            <AiOutlineMenu/>
                            Danh sách sản phẩm
                        </div>
                        { isShowCagorites && (
                            <ul className={isShowCagorites ? "" : "hidden"}>
                                <li>
                                    <Link to={"#"}>Thịt tươi</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Rau củ</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Nước trái cây</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Trái cây</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Hải sản</Link>
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className="col-lg-9 hero__search_container">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form>
                                    <input type="text" placeholder="Bạn đang tìm gì?"/>
                                    <button type="submit">Tìm kiếm</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <AiOutlinePhone/>
                                </div>
                                <div className="hero__search__phone__text">
                                    <p>0945.156.489</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero__item">
                        <div className="hero__text">
                            <span>Trái cây tươi</span>
                            <h2>
                                Rau quả <br/>
                                Sạch 100%
                            </h2>
                            <p>Miễn phí giao hàng tận nơi</p>
                            <Link to="" className="primary-btn">
                            Mua ngay
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default memo(Header);