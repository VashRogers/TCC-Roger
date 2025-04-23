import React from "react";
import { Routes, Route } from "react-router";
import InitialPage from "../pages/initial-page";
import Menu from "../pages/menu";

export function SystemRoutes() {
    return (
        <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/menu" element={<Menu />} />
        </Routes>
    );
}
