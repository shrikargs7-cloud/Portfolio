"use client";

import { useEffect, useState } from "react";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, []);

  if (!loading) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-[#050816]
        z-[9999]
        flex
        items-center
        justify-center
      "
    >
      <h1
        className="
          text-6xl
          font-bold
          bg-gradient-to-r
          from-violet-500
          via-cyan-400
          to-pink-500
          text-transparent
          bg-clip-text
        "
      >
        GS
      </h1>
    </div>
  );
}