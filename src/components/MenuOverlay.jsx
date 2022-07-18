import React from "react";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
    const navigation = [
        { name: "Astra Nova", href: "#" },
        { name: "Nft Collections", href: "#" },
        { name: "Deviants", href: "#" },
        { name: "Meta RPG", href: "#" },
        { name: "Social", href: "#" },
        { name: "Wallpaper", href: "#" },
    ];
    return (
        <nav
            className={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
                navbarOpen
                    ? "opacity-100 transition-all ease-in delay-300"
                    : "opacity-0 transition-all ease-in delay-300"
            }`}
        >
            <ul className="w-full flex flex-col items-center justify-center gap-y-5">
                {navigation.map((nav) => (
                    <li className="nav-li">
                        <a
                            href={nav.href}
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                setNavbarOpen(false);
                            }}
                        >
                            {nav.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MenuOverlay;
