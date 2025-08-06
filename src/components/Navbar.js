"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/", label: "About" },
    { path: "/", label: "Contact" },
    { path: "#fqa", label: "FQA" },
    { path: "/", label: "Login" },
  ];

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white dark:bg-gray-900 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 hover:scale-110 text-xl font-bold text-gray-900 dark:text-white tracking-tighter bg-gradient-to-r from-gray-100 to-amber-200 dark:from-gray-800 dark:to-yellow-900 rounded-xl px-4 py-1 transition-all duration-300">
            <Link href="/">ZipBoard</Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Theme switch */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Moon className="cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent >
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2" />
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-800 dark:text-gray-200"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 px-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* Theme switch in mobile */}
            <div className="flex space-x-4 pt-2">
              <button onClick={() => setTheme("light")} className="flex items-center text-gray-800 dark:text-gray-200">
                <Sun className="mr-2" /> Light
              </button>
              <button onClick={() => setTheme("dark")} className="flex items-center text-gray-800 dark:text-gray-200">
                <Moon className="mr-2" /> Dark
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;