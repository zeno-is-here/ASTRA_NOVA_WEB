import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start) {
    useEffect(() => {
        if (!start) return;
        const scrollEl = document.querySelector(".main-container");
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            getSpeed: true,
            multiplier: 4.5,
            class: "is-reveal",
        });
    }, [start]);
}
