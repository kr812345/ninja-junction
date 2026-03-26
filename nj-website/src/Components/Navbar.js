"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

export default function Navbar() {
  const [selected, setSelection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const path = usePathname();

  const menus = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/Events" },
    { name: "Collabs", link: "/Collaborations" },
    { name: "About", link: "/About" },
    { name: "Contact", link: "/Contact" },
    { name: "•••", link: "/login" },
  ];

  useEffect(() => {
    const currentMenu = menus.find((menu) => menu.link === path);
    if (currentMenu) {
      setSelection(currentMenu.name);
    }
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setHidden(currentY > 100 && currentY > lastScrollY.current);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = (e) => {
    e.preventDefault();
    setIsVisible((p) => !p);
  };

  const handleSelection = (e, menu) => {
    // Remove preventDefault to allow navigation
    e.stopPropagation();
    setSelection(menu.name);
    setIsVisible(false);
  };

  if (path === "/login" || path?.startsWith("/dashboard")) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed w-full z-[10000] transition-all duration-500 ${hidden ? "-translate-y-full" : "translate-y-0"} ${
        scrolled
          ? "bg-white/35 backdrop-blur-3xl backdrop-saturate-150 border-b border-white/50 shadow-[0_8px_32px_rgba(79,70,229,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[92%] mx-auto px-3 sm:px-4 lg:px-6 relative">
        <div className="flex justify-between items-center h-12 md:h-16">
          {/* Left — Compact Nav Pills (MoM style) */}
          <div className="hidden md:flex items-center gap-1.5">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.link}
                className={`nav-pill ${selected === menu.name ? "active" : ""}`}
                onClick={() => setSelection(menu.name)}
              >
                {menu.name}
              </Link>
            ))}
          </div>

          {/* Center — Logo (Always Absolute Center) */}
          <Link
            href="/"
            className="flex items-center gap-2 group absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          >
            <Image
              src="/logo-bg.svg"
              alt="Ninja Junction"
              width={48}
              height={48}
              className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="flex flex-col leading-none">
              <span
                className="text-sm md:text-base font-bold text-[var(--color-text-primary)] tracking-tight md:tracking-wide"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                NinjaJunction
              </span>
              <span className="text-[0.45rem] md:text-[0.5rem] text-[var(--color-text-secondary)] uppercase tracking-[0.2em] md:tracking-[0.25em] mt-0.5">
                Tech Community
              </span>
            </div>
          </Link>

          {/* Right — Compact CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://chat.whatsapp.com/KCMrNnAQgBNBZaZ3WxorTm"
              target="_blank"
              className="capsule-btn"
            >
              <span className="btn-text">Join Us</span>
              <span className="btn-icon">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile — Hamburger */}
          <div className="md:hidden">
            <button
              onClick={handleMenu}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 backdrop-blur-lg border border-black/8 text-[var(--color-text-primary)]"
            >
              {isVisible ? (
                <IoCloseOutline className="text-xl" />
              ) : (
                <IoIosMenu className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed bg-white h-fit inset-0 pt-1 px-6 pb-6"
          >
            <div className="flex flex-col items-start gap-0 py-2">
              {menus.map((menu, i) => (
                <motion.div
                  key={menu.name}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02, duration: 0.15 }}
                  className="w-full"
                >
                  <Link
                    href={menu.link}
                    className={`block py-0.5 text-base font-medium uppercase tracking-widest transition-all active:scale-95 ${
                      selected === menu.name
                        ? "text-[var(--color-primary)]"
                        : "text-slate-800"
                    }`}
                    style={{ fontFamily: "var(--font-oswald)" }}
                    onClick={(e) => handleSelection(e, menu)}
                  >
                    {menu.name === "•••" ? "Login" : menu.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menus.length * 0.02, duration: 0.15 }}
                className="w-full pt-2 flex justify-center"
              >
                <Link
                  href="https://chat.whatsapp.com/KCMrNnAQgBNBZaZ3WxorTm"
                  target="_blank"
                  className="capsule-btn !w-auto !px-4 !py-1"
                  onClick={() => setIsVisible(false)}
                >
                  <span className="btn-text text-xs">Join Us</span>
                  <span className="btn-icon">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Social/Bottom links if needed */}
            <div className="mt-auto pt-10 text-center border-t border-black/5">
              <p className="text-[0.65rem] text-[var(--color-text-secondary)] uppercase tracking-[0.3em]">
                Ninja Junction Tech Community
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Toaster position="top-center" reverseOrder={false} />
    </motion.nav>
  );
}
