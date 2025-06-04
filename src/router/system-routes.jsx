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
import FourthYear from "../pages/fourth-year";
import FourthYearActivityOne from "../pages/fourth-year/fourthYearActivity-01";
import FourthYearActivityTwo from "../pages/fourth-year/fourthYearActivity-02";
import FourthYearActivityThree from "../pages/fourth-year/fourthYearActivity-03";
import FifthYear from "../pages/fifth-year";
import FifthYearActivityOne from "../pages/fifth-year/fifthYearActivity-01";
import FifthYearActivityTwo from "../pages/fifth-year/fifthYearActivity-02";
import FifthYearActivityThree from "../pages/fifth-year/fifthYearActivity-03";
import SixthYear from "../pages/sixth-year";
import SixthYearActivityOne from "../pages/sixth-year/sixthYearActivity-01";
import SixthYearActivityTwo from "../pages/sixth-year/sixthYearActivity-02";
import SixthYearActivityThree from "../pages/sixth-year/sixthYearActivity-03";
import SixthYearActivityFour from "../pages/sixth-year/sixthYearActivity-04";

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

            <Route path="/fourth-year">
                <Route index element={<FourthYear />} />
                <Route path="activity-01" element={<FourthYearActivityOne />} />
                <Route path="activity-02" element={<FourthYearActivityTwo />} />
                <Route
                    path="activity-03"
                    element={<FourthYearActivityThree />}
                />
            </Route>

            <Route path="/fifth-year">
                <Route index element={<FifthYear />} />
                <Route path="activity-01" element={<FifthYearActivityOne />} />
                <Route path="activity-02" element={<FifthYearActivityTwo />} />
                <Route
                    path="activity-03"
                    element={<FifthYearActivityThree />}
                />
            </Route>

            <Route path="/sixth-year">
                <Route index element={<SixthYear />} />
                <Route path="activity-01" element={<SixthYearActivityOne />} />
                <Route path="activity-02" element={<SixthYearActivityTwo />} />
                <Route
                    path="activity-03"
                    element={<SixthYearActivityThree />}
                />
                <Route path="activity-04" element={<SixthYearActivityFour />} />

            </Route>

            <Route path="/seventh-year">
                <Route index element={<SixthYear />} />
                
            </Route>
        </Routes>
    );
}
