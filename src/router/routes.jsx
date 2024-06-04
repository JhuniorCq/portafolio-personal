import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";


export const MyRoutes = () => {


    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};