import HomePage from "./assets/pages/users/homePage";
import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./assets/pages/users/theme/masterLayout";
import ProfilePage from "./assets/pages/users/profilePage";

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },

        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        }
    ];

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component}/>
                ))}
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;