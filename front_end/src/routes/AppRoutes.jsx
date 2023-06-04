import { Fragment } from "react"
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Home from "../components/Home";


const AppRoutes = function () {
    return <Fragment>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </Fragment>
}

export default AppRoutes;