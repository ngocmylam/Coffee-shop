import { memo } from "react";
import "./style.scss";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { formatter } from "../../../../utils/formatter";

const Header = () => {
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
        </>
    )
};

export default memo(Header);