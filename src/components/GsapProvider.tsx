"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function GsapProvider() {

  useEffect(() => {

    gsap.from(".reveal", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15
    });

  }, []);

  return null;
}