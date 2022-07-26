
import { useState} from "react";

const tabs = [
    { name: "Management" },
    { name: "Directors" },
    { name: "Developers" },
    { name: "Marketing" },
    { name: "Artists" },
    { name: "Writers" },
    { name: "Advisors" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Tabs({ setVal }) {
    const [current, setCurrent] = useState("Management");

    return (
        <div>
            <div className="sm:hidden flex justify-center z-50">
                <select
                    id="tabs"
                    name="tabs"
                    onChange={(e) => {
                        setVal(e.target.value);
                        setCurrent(e.target.value);
                    }}
                    className="block w-[150px] h-[50px] rounded-md text-white bg-[#0dc4b2] px-4 z-50"
                    defaultValue={current}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <nav
                    className="flex space-x-4 justify-center"
                    aria-label="Tabs"
                >
                    {tabs.map((tab) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            onClick={() => {
                                setVal(tab.name);
                                setCurrent(tab.name);
                            }}
                            className={classNames(
                                current === tab.name
                                    ? "bg-[#0dc4b2] text-gray-200"
                                    : "text-white hover:text-gray-400 hover:cursor-pointer hover:ease-in-out duration-500",
                                "px-3 py-2 font-normal text-base rounded-md leading-5 "
                            )}
                            aria-current={tab.current ? "page" : undefined}
                        >
                            {tab.name}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}
