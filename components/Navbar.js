"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  
  const { setTheme } = useTheme()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0 hover:scale-110 text-xl font-bold text-gray-800 tracking-tighter bg-gradient-to-r from-gray-100 to-amber-200 rounded-xl px-4 py-1">
            <Link href="/">ZipBoard</Link>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors hover:bg-gradient-to-r from-gray-100 to-amber-200 rounded-xl px-4"
            >
              Sign Up
            </Link>

            {/* Theme dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}