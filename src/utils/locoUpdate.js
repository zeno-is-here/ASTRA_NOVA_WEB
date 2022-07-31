import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useUpdateLocoScroll() {
    useEffect(() => {
        console.log("CHEHEHEHE");
        const scrollEl = document.querySelector(".main-container");
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            getSpeed: true,
            multiplier: 2.5,
            class: "is-reveal",
            // lerp: 0.2,
        });
        setTimeout(() => {
            console.log("HELL");
            locoScroll.update();
        }, 10);
    }, []);
}
