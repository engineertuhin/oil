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
                    route().current("zone.index")
                }
                icon="fa-solid fa-location-dot"
            >
                <NavChild
                    label="Zone"
                    routePath={"zone.index"}
                    active={route().current("zone.index")}
                />
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
                label={"Customer"}
                active={route().current("client.index")}
                icon="fa-solid fa-user-group"
            >
                <NavChild
                    label="Customer"
                    routePath={"client.index"}
                    active={route().current("client.index")}
                />
            </NavLink>
            <NavLink
                label={"Service Providers"}
                active={route().current("retailer.index")}
                icon="fa-solid fa-business-time"
            >
                <NavChild
                    label="Retailer"
                    routePath={"retailer.index"}
                    active={route().current("retailer.index")}
                />
                <NavChild
                    label="Garage"
                    routePath={"garage.index"}
                    active={route().current("garage.index")}
                />
                <NavChild
                    label="Fleet"
                    routePath={"fleet.index"}
                    active={route().current("fleet.index")}
                />
            </NavLink>
            <NavLink
                label={"Report"}
                active={route().current("organography")}
                icon="fa-solid fa-clipboard-list"
            >
                <NavChild
                    label="Organogram"
                    routePath={"organography"}
                    active={route().current("organography")}
                />
            </NavLink>
        </ul>
    );
}
