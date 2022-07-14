import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MidSection from "./components/MidSection";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import CustomCursor from "./components/CustomCursor";
import "./styles.css";
import LoadingOverlay from "./components/LoadingOverlay";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function App() {
    const [preLoader, setPreLoader] = useState(true);

    const title = useRef(null);
    const logo = useRef(null);
    const clear = () => {
        setPreLoader(false);
    };
    useEffect(() => {
        gsap.to("body", {
            css: {
                visibility: "visible",
            },
            duration: 1,
        });

        const tl = gsap.timeline();
        tl.delay(1);
        tl.fromTo(
            logo.current,
            { opacity: 0, y: 70, delay: 1 },
            { opacity: 1, y: 0, duration: 1 }
        );

        tl.fromTo(
            title.current,
            {
                opacity: 0,
                y: 50,
                ease: "power4.out",
                stagger: {
                    amount: 0.5,
                },
                delay: 4,
            },

            { opacity: 1, y: 0, duration: 1, skewY: 0 }
        );
        tl.to(".loading-overlay", {
            opacity: 0,
            delay: 2,
            duration: 0.5,
            onComplete: clear,
        });
    }, []);

    useEffect(() => {
        if (preLoader === false) {
            const tl = gsap.timeline();
            tl.fromTo(
                ".main-container",
                {
                    opacity: 0,
                    duration: 2,
                    ease: "power4.out",
                    stagger: {
                        amount: 0.5,
                    },
                },
                {
                    opacity: 1,
                    duration: 2,
                }
            );
        }
    }, [preLoader === false]);

    return (
        <>
            <CustomCursor />
            {preLoader ? (
                <LoadingOverlay title={title} logo={logo} />
            ) : (
                <div className="main-container ">
                    <CustomCursor />
                    <Navbar />
                    <Hero />
                    <MidSection />
                    <About />
                    <Team />
                    <Faq />
                    <Contact />
                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;
