import React from "react";
import { Routes, Route } from "react-router";
import InitialPage from "../pages/initial-page";
import Menu from "../pages/menu";
import FirstYear from "../pages/first-year";
import SecondYear from "../pages/second-year";
import ThirdYear from "../pages/third-year";
import FirstYearActivityOne from "../pages/first-year/firstYearActivity-01";
import FirstYearActivityTwo from "../pages/first-year/firstYearActivity-02";
import FirstYearActivityThree from "../pages/first-year/firstYearActivity-03";
import SecondYearActivityOne from "../pages/second-year/secondYearActivity-01";
import SecondYearActivityTwo from "../pages/second-year/secondYearActivity-02";
import ThirdYearActivityOne from "../pages/third-year/thirdYearActivity-01";
import ThirdYearActivityTwo from "../pages/third-year/thirdYearActivity-02";
import ThirdYearActivityThree from "../pages/third-year/thirdYearActivity-03";

export function SystemRoutes() {
    return (
        <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/menu" element={<Menu />} />

            <Route path="/first-year">
                <Route index element={<FirstYear />} />
                <Route path="activity-01" element={<FirstYearActivityOne />} />
                <Route path="activity-02" element={<FirstYearActivityTwo />} />
                <Route
                    path="activity-03"
                    element={<FirstYearActivityThree />}
                />
            </Route>

            <Route path="/second-year">
                <Route index element={<SecondYear />} />
                <Route path="activity-01" element={<SecondYearActivityOne />} />
                <Route path="activity-02" element={<SecondYearActivityTwo />} />
            </Route>

            <Route path="/third-year">
                <Route index element={<ThirdYear />} />
                <Route path="activity-01" element={<ThirdYearActivityOne />} />
                <Route path="activity-02" element={<ThirdYearActivityTwo />} />
                <Route
                    path="activity-03"
                    element={<ThirdYearActivityThree />}
                />
            </Route>

            
        </Routes>
    );
}
