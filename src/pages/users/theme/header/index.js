import { memo } from "react";
import "./style.scss";

const Header = () => {
    return (
        <>
            <div className="container">
                <div className="header__top">
                    Header
                </div>
            </div>
        </>
    )
};

export default memo(Header);