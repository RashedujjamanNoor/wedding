import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useReveal(ref) {
  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll(".reveal");

    gsap.fromTo(
      elements,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      },
    );
  }, [ref]);
}
