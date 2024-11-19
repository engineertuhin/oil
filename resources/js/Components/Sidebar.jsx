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
                icon="fa-solid fa-chart-line"
            />

            {/* Place Section */}
            <NavLink
                label={"Places"}
                active={
                    route().current("districts.index") ||
                    route().current("areas.index") ||
                    route().current("upazila.index")
                }
                icon="fa-solid fa-location-dot"
            >
                <NavChild
                    label="Districts"
                    routePath={"districts.index"}
                    active={route().current("districts.index")}
                />
                <NavChild
                    label="Areas"
                    routePath={"areas.index"}
                    active={route().current("areas.index")}
                />
                <NavChild
                    label="Upazila"
                    routePath={"upazila.index"}
                    active={route().current("upazila.index")}
                />
            </NavLink>
            {/* Place Section */}
            <NavLink
                label={"Users"}
                active={route().current("user.index")}
                icon="fa-solid fa-user-plus"
            >
                <NavChild
                    label="User"
                    routePath={"user.index"}
                    active={route().current("user.index")}
                />
            </NavLink>
            <NavLink
                label={"Client"}
                active={route().current("client.index")}
                icon="fa-solid fa-user-group"
            >
                <NavChild
                    label="Client"
                    routePath={"client.index"}
                    active={route().current("client.index")}
                />
            </NavLink>
        </ul>
    );
}
