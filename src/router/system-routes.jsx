import React from "react";
import { Routes, Route } from "react-router";
import InitialPage from "../pages/initial-page";

export function SystemRoutes() {
    return (
        <Routes>
            <Route path="/" element={<InitialPage />} />
        </Routes>
    );
}
