import { memo } from "react";
import "./style.scss";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { formatter } from "../../../../utils/formatter";
import { ROUTERS } from "../../../../utils/router";
import { useState } from 'react';

const Header = () => {
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
                    <div className="col-xl-3">
                        <div className="header__logo">
                            <h1>
                                THO SHOP
                            </h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header__menu">
                            <ul>
                                {menus?.map((menu, menuKey) =>(
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu?.path}>{menu?.name}</Link>
                                    </li>
                                ))}
                                {/* <li>Trang chủ</li>
                                <li>
                                    <Link to={}>Sản phẩm</Link>
                                    <ul>
                                        <li>Thịt</li>
                                    </ul>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
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
                    </div>
                </div>
            </div>
        </>
    )
};

export default memo(Header);