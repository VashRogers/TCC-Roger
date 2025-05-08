import React from "react";
import { Routes, Route } from "react-router";
import InitialPage from "../pages/initial-page";
import Menu from "../pages/menu";
import FirstYear from "../pages/first-year";
import SecondYear from "../pages/second-year";
import ThirdYear from "../pages/third-year";
import FirstYearActivityOne from "../pages/first-year/firstYearActivity-01";
import FirstYearActivityTwo from "../pages/first-year/firstYearActivity-02";

export function SystemRoutes() {
    return (
        <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/menu" element={<Menu />} />

            <Route path="/first-year">
                <Route index element={<FirstYear />} />
                <Route path="activity-01" element={<FirstYearActivityOne />} />
                <Route path="activity-02" element={<FirstYearActivityTwo />} />
            </Route>

            <Route path="/second-year">
                <Route index element={<SecondYear />} />
            </Route>

            <Route path="/third-year">
                <Route index element={<ThirdYear />} />
            </Route>
        </Routes>
    );
}
