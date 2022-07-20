import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/logo.png";

const navigation = [
    { name: "Astra Nova", href: "#" },
    // { name: 'Nft Collections', href: '#' },
    // { name: 'Deviants', href: '#' },
    // { name: 'Meta RPG', href: '#' },
    // { name: 'Social', href: '#' },
    // { name: 'Wallpaper', href: '#' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    return (
        <Disclosure as="nav" className="transparent" data-scroll-section>
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-20">
                            <div className="flex">
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => {
                                            if (!open) {
                                                document.body.style.overflow =
                                                    "hidden";
                                            } else {
                                                document.body.style.overflow =
                                                    "visible";
                                            }
                                        }}
                                    >
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <MenuIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>

                                {/* for large screens start */}
                                <div className="flex-shrink-0 flex items-center">
                                    {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  /> */}
                                </div>
                                <div className="hidden bg-transparent md:ml-6 md:flex md:items-center md:space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "bg-gray-900 text-white"
                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white hover:ease-in-out duration-500",
                                                "px-3 py-2 rounded-md text-base font-medium"
                                            )}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div class="flex justify-center"></div>
                                </div>
                                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center"></div>
                            </div>
                        </div>
                    </div>

                    {/* for large screens end */}

                    <Transition
                        enter="transition-all duration-1000 ease-in-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition-all duration-1000 ease-in-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className="md:hidden ">
                            <nav
                                className={`fixed flex top-0 left-0 w-full z-10 h-screen bg-[#0f1121] text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
                                    open
                                        ? "opacity-100 transition-all ease-in delay-300"
                                        : "opacity-0 transition-all ease-in delay-300"
                                }`}
                            >
                                <ul className="w-full flex flex-col items-center justify-center mb-[40%] gap-y-7">
                                    {navigation.map((nav) => (
                                        <li className="nav-li">
                                            <a
                                                href={nav.href}
                                                className={classNames(
                                                    nav.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white hover:ease-in-out duration-500",
                                                    "px-3 py-2 rounded-md text-xl font-medium"
                                                )}
                                            >
                                                {nav.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
}
