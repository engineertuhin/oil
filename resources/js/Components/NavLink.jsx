import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    icone = "",
    label,
    arrow = false,
    children,
    route = false,
    url = false,
}) {
    return (
        <>
            {children ? (
                <li className="text-sm font-medium px-4 space-y-1 ">
                    <div className={`dropdown-trigger active-trigger flex items-center gap-2 py-1.5 px-3 cursor-pointer rounded-md hover:bg-blue-50 hover:text-blue-400 transition-colors  ${active ? "sidebar-nav-active" : ""}`}>
                        <i className={`${icone}`} />
                        <h1 className="hideable">{label}</h1>
                        <i className="dropdown-icon hideable fa-solid fa-angle-down ml-auto rotate-0 transition-transform inline-block" />
                    </div>

                    <ul
                        className={`dropdown pl-4 ml-3 space-y-1 ${active ? 'block' : 'hidden'}`} >
                        {children}
                    </ul>
                </li>
            ) : (
                <Link href={route ? route(route) : url}>
                    <li className="text-sm font-medium px-4 space-y-1">
                        <div
                            className={`dropdown-trigger  active-trigger flex items-center gap-2 py-1.5 px-3 cursor-pointer rounded-md hover:bg-blue-50 hover:text-blue-400 transition-colors ${
                                active ? "sidebar-nav-active" : ""
                            }`}
                        >
                            <i className={`${icone}`} />
                            <h1 className="hideable">{label}</h1>
                        </div>
                    </li>
                </Link>
            )}
        </>
    );
}
