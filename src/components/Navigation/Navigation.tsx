"use client";

import Link from "next/link";
import { CloseIcon, MenuIcon } from "./components";
import { useDisclose } from "@/hooks";
import { ROUTE } from "@/routes";
import { NAV_LINKS } from "./constants";

const handleLogoClick = () => {
  globalThis?.scrollTo({ top: 0, behavior: "smooth" });
};

export const Navigation = () => {
  const { isOpen, onClose, onToggle } = useDisclose();

  const handleCloseMenu = () => {
    onClose();
  };

  const handleToggleMenu = () => {
    onToggle();
  };

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <Link
          href=""
          className="text-lg font-semibold tracking-tight text-white"
          onClick={handleLogoClick}
        >
          itinna
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href={ROUTE.EXPLORE_GUIDES}
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-white/90 md:inline-flex"
        >
          Explore guides
        </Link>

        <button
          type="button"
          onClick={handleToggleMenu}
          className="inline-flex items-center justify-center rounded-full p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-4 mb-4 flex flex-col gap-1 rounded-2xl bg-black/80 p-4 backdrop-blur-sm md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleCloseMenu}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <Link
            href={ROUTE.EXPLORE_GUIDES}
            onClick={handleCloseMenu}
            className="mt-2 rounded-full bg-white px-4 py-2 text-center text-sm font-medium text-neutral-900 transition hover:bg-white/90"
          >
            Explore guides
          </Link>
        </div>
      )}
    </header>
  );
};
