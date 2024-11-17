import { Link } from "@inertiajs/react";
import React from "react";

function NavChild({ label = "", routePath  = false, url = false, active = false }) {
    return (
        <li>
            <Link
                href={routePath ? route(routePath) : url}
                class={`active-trigger relative inline-block w-full py-1 px-1 before:absolute before:top-1/2 before:left-0 before:w-1 before:h-1 before:rounded-full before:bg-gray-800 before:-translate-y-1/2 before:-translate-x-2 rounded-md hover:bg-blue-50 hover:text-blue-400 transition-colors ${
                    active ? "sidebar-nav-active" : ""
                }`}
            >
                {" "}
                {label}
            </Link>
        </li>
    );
}

export default NavChild;
