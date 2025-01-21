"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-white text-gray-800 fixed z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <Image src={logo} width={300} height={50} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => handleScroll("home")}
              className="relative group px-3 py-2"
            >
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-yellow-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="z-10 relative">Home</span>
            </button>
            <button
              onClick={() => handleScroll("programs")}
              className="relative group px-3 py-2"
            >
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-yellow-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="z-10 relative">Programs</span>
            </button>
            <button
              onClick={() => handleScroll("admissions")}
              className="relative group px-3 py-2"
            >
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-yellow-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="z-10 relative">Admission</span>
            </button>
            <button
              onClick={() => handleScroll("gallery")}
              className="relative group px-3 py-2"
            >
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-yellow-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="z-10 relative">Gallery</span>
            </button>
            <button
              onClick={() => handleScroll("about")}
              className="relative group px-3 py-2"
            >
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-yellow-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="z-10 relative">About Us</span>
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="relative group px-3 py-2"
            >
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-yellow-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="z-10 relative">Contact Us</span>
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none hover:text-gray-500"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-200">
          <button
            onClick={() => {
              handleScroll("home");
              toggleMenu();
            }}
            className="w-full block px-4 py-2 hover:bg-gray-400"
          >
            Home
          </button>
          <button
            onClick={() => {
              handleScroll("programs");
              toggleMenu();
            }}
            className="w-full block px-4 py-2 hover:bg-gray-400"
          >
            Programs
          </button>
          <button
            onClick={() => {
              handleScroll("admissions");
              toggleMenu();
            }}
            className="w-full block px-4 py-2 hover:bg-gray-400"
          >
            Admission
          </button>
          <button
            onClick={() => {
              handleScroll("gallery");
              toggleMenu();
            }}
            className="w-full block px-4 py-2 hover:bg-gray-400"
          >
            Gallery
          </button>
          <button
            onClick={() => {
              handleScroll("about");
              toggleMenu();
            }}
            className="w-full block px-4 py-2 hover:bg-gray-400"
          >
            About
          </button>
          <button
            onClick={() => {
              handleScroll("contact");
              toggleMenu();
            }}
            className="w-full block px-4 py-2 hover:bg-gray-400"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
