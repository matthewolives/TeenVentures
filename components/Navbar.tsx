"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, type RefObject } from "react";

const NAV_EDITIONS = [{ label: "Vol.1", href: "/competizione/vol1" }];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "After Hours", href: "/after-hours" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Media", href: "/media" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isCompetizione = pathname.startsWith("/competizione");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/20">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo.png" alt="TeenVentures" className="h-16 object-contain" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 list-none">
          {/* Competizione dropdown */}
          <li
            ref={dropdownRef as RefObject<HTMLLIElement>}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`font-mono text-sm tracking-wide transition-opacity hover:opacity-60 flex items-center gap-1 cursor-pointer ${
                isCompetizione ? "opacity-100 underline underline-offset-4" : "opacity-80"
              }`}
            >
              Competizione
              <span className="text-xs">▾</span>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 min-w-[160px] bg-black border border-white/30">
                {NAV_EDITIONS.map((edition) => (
                  <Link
                    key={edition.href}
                    href={edition.href}
                    className="block px-4 py-3 font-mono text-sm text-white hover:bg-white hover:text-black transition-colors"
                  >
                    {edition.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {NAV_LINKS.filter((l) => l.label !== "Home").map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-mono text-sm tracking-wide transition-opacity hover:opacity-60 ${
                  isActive(link.href) ? "opacity-100 underline underline-offset-4" : "opacity-80"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform origin-center ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/20 bg-black">
          <ul className="list-none px-6 py-4 flex flex-col gap-4">
            <li>
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className="font-mono text-sm text-white opacity-80 w-full text-left"
              >
                Competizione ▾
              </button>
              {dropdownOpen && (
                <ul className="list-none pl-4 mt-2 flex flex-col gap-2">
                  {NAV_EDITIONS.map((edition) => (
                    <li key={edition.href}>
                      <Link
                        href={edition.href}
                        className="font-mono text-sm text-white/60 hover:text-white"
                      >
                        {edition.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {NAV_LINKS.filter((l) => l.label !== "Home").map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-sm text-white opacity-80 hover:opacity-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
