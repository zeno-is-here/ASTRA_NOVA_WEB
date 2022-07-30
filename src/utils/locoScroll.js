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
            // smoothMobile: true,
            getSpeed: true,
            multiplier: 2.5,
            class: "is-reveal",
            // lerp: 0.1,
        });

        setTimeout(() => {
            locoScroll.update();
        }, 2000);

        function locomotiveHeightBug() {
            locoScroll.update();
        }
        setInterval(locomotiveHeightBug, 2000);
    }, [start]);
}
