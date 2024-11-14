import React from "react";
import ResponsiveNavLink from "./ResponsiveNavLink";

export default function Header({ header, url, user }) {
    return (
        <header className="relative flex justify-between items-center w-full py-4">
            {/* header left */}
            <section>
                <ul className="flex items-center gap-4">
                    <li className="cursor-pointer hover:text-skin-hover md:hidden">
                        <i className="sm-sidebar-trigger-btn fa-solid fa-bars" />
                    </li>
                    <li>{header}</li>
                </ul>
            </section>
            {/* header right */}
            <section>
                <ul className="flex gap-1 sm:gap-6 sm:text-[1.3rem] items-center text-skin-nav-hover-mute">
                    <li className="relative cursor-pointer container w-6 sm:w-9 group">
                        <img
                            src={`${url}/defualtImage/300-3 (1).jpg`}
                            alt="profile"
                            className="rounded-md"
                        />
                        {/* Profile hover */}
                        <div className="w-[300px] absolute top-full right-0 px-6 py-4 bg-skin-content rounded-lg shadow-lg hidden group-hover:block">
                            {/* profile header */}
                            <div className="border-b-[1px] py-4 px-2 flex items-center gap-2 w-full">
                                <img
                                    src={`${url}/defualtImage/300-3 (1).jpg`}
                                    alt="profile"
                                    className="w-[40px]"
                                />
                                <div className="text-sm text-skin-muted">
                                    <h1 className="flex items-center gap-2 text-skin-header font-semibold">
                                        {user.name}
                                    </h1>
                                    <p className="hover:text-skin-hover break-all">
                                        <a href="#" className="">
                                            {user.email}
                                        </a>
                                    </p>
                                </div>
                            </div>
                            {/* Profile body */}
                            <div>
                                <ul className="text-skin-base text-[0.9rem] font-semibold w-full py-2">
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route("logout")}
                                        className="flex items-center gap-x-2 w-full justify-between hover:bg-neutral-100 px-2 py-3 rounded-md hover:text-skin-hover"
                                        as="button"
                                    >
                                        Logout
                                    </ResponsiveNavLink>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </header>
    );
}
