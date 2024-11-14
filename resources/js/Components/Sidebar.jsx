import React from "react";
import NavLink from "./NavLink";
import NavChild from "./NavChild";

export default function Sidebar() {
    return (
        <ul className="sidebar-nav py-4 text-gray-600 h-[calc(100%-60px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 space-y-1">
            {/* Dashboard */}
            <NavLink
                label={"Dashboard"}
                url={"/"}
                active={route().current("dashboard")}
                icone="fa-solid fa-chart-line"
            />

            {/* Dashboard */}
            <NavLink label={"Places"} icone="fa-solid fa-location-dot">
                <NavChild
                    lable="Districts"
                    routePath={"districts.index"}
                    active={route().current("brand.index")}
                />

            </NavLink>
        </ul>
    );
}
