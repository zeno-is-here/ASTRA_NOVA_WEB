/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import lol from "../utils/faq.json";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Faq() {
    return (
        <div className="text-white flex flex-row" data-scroll-section>
            {/* <div className="w-[3%] h-[500px] blur-[40px] bg-[#0370c3] opacity-[0.35] rounded-[100%]"></div> */}

            <div className="md:w-[80%] xs:w-full  mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:px-8">
                <h2 className="tk-roma font-title text-4xl  sm:text-5xl lg:text-left font-bold text-center text-[#E0E0E0]">
                    Frequently asked questions?
                </h2>

                <dl className="mt-6 space-y-6 divide-y">
                    {JSON.parse(JSON.stringify(lol)).map((faq) => (
                        <Disclosure
                            as="div"
                            key={faq.question}
                            className="pt-6"
                        >
                            {({ open }) => (
                                <>
                                    <dt className="text-lg">
                                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                            <span className="font-medium text-[16px] text-[#ffffff]">
                                                {faq.question}
                                            </span>
                                            <span className="ml-6 h-7 flex items-center">
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "-rotate-180"
                                                            : "rotate-0",
                                                        "h-6 w-6 transform transition ease-in-out delay-300"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Disclosure.Button>
                                    </dt>
                                    <Transition
                                        enter="transition duration-300 ease-in-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-300 ease-in-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel
                                            as="dd"
                                            className="mt-2 md:pr-12"
                                        >
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: faq.answer,
                                                }}
                                                className="text-base text-[#595959]"
                                            ></p>
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </dl>
            </div>
        </div>
    );
}
