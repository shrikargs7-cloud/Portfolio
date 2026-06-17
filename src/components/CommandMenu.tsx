"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";

export default function CommandMenu() {

  const [open, setOpen] = useState(false);

  useEffect(() => {

    const down = (e: KeyboardEvent) => {

      if (
        (e.metaKey || e.ctrlKey) &&
        e.key === "k"
      ) {

        e.preventDefault();
        setOpen((open) => !open);

      }

    };

    document.addEventListener("keydown", down);

    return () =>
      document.removeEventListener("keydown", down);

  }, []);

  if (!open) return null;

  return (

    <div
      className="
      fixed
      inset-0
      bg-black/70
      z-[9999]
      flex
      items-center
      justify-center
    "
    >

      <Command
        className="
        bg-[#0F172A]
        border
        border-white/10
        rounded-2xl
        w-[600px]
        p-4
      "
      >

        <Command.Input
          placeholder="Search..."
          className="
          w-full
          bg-transparent
          outline-none
          text-white
          p-3
        "
        />

        <Command.List>

          <Command.Item
            onSelect={() =>
              window.open(
                "https://vega-ai-3j5u.onrender.com"
              )
            }
          >
            Vega AI
          </Command.Item>

          <Command.Item
            onSelect={() =>
              window.open(
                "https://quadra-spice-flow.base44.app"
              )
            }
          >
            Spice Vault
          </Command.Item>

          <Command.Item
            onSelect={() =>
              window.open(
                "https://github.com/shrikargs7-cloud"
              )
            }
          >
            GitHub
          </Command.Item>

          <Command.Item
            onSelect={() =>
              window.location.href =
                "mailto:shrikargs7@gmail.com"
            }
          >
            Contact Me
          </Command.Item>

        </Command.List>

      </Command>

    </div>

  );
}