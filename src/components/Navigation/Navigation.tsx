"use client";

import Link from "next/link";
import { CloseIcon, MenuIcon } from "./components";
import { useDisclose } from "@/hooks";
import { ROUTE } from "@/const/routes";
import { NAV_LINKS } from "./const";

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
    <section className="font-body absolute inset-x-0 top-0 z-20 h-24 bg-linear-to-b from-black/45 via-black/15 to-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <Link
          href={ROUTE.HOME}
          className="text-title font-semibold tracking-tight text-white"
          onClick={handleLogoClick}
        >
          itinna
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body font-medium text-white/90 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={ROUTE.LOG_IN}
            className="text-small inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2.5 font-medium text-white backdrop-blur-sm transition hover:border-white/35 hover:bg-white/15"
          >
            Log in
          </Link>

          <Link
            href={ROUTE.EXPLORE_GUIDES}
            className="text-small inline-flex rounded-full bg-white px-5 py-2.5 font-medium text-neutral-900 transition hover:bg-white/90"
          >
            Explore guides
          </Link>
        </div>

        <button
          type="button"
          onClick={handleToggleMenu}
          className="inline-flex items-center justify-center rounded-full p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {isOpen && (
        <nav className="mx-4 mb-4 flex flex-col gap-1 rounded-2xl bg-black/80 p-4 backdrop-blur-sm md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleCloseMenu}
              className="text-body rounded-lg px-3 py-2 font-medium text-white/90 transition hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <Link
            href={ROUTE.LOG_IN}
            onClick={handleCloseMenu}
            className="text-small mt-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-center font-medium text-white backdrop-blur-sm transition hover:border-white/35 hover:bg-white/15"
          >
            Log in
          </Link>
          <Link
            href={ROUTE.EXPLORE_GUIDES}
            onClick={handleCloseMenu}
            className="text-small mt-2 rounded-full bg-white px-4 py-2 text-center font-medium text-neutral-900 transition hover:bg-white/90"
          >
            Explore guides
          </Link>
        </nav>
      )}
    </section>
  );
};
