"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl text-sky-600">
            Assem Malgazhdarova 
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-sky-600 transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Skills
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Education
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Projects
            </Link>
            <Link href="#interests" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Interests
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-sky-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 p-4 bg-white shadow-md">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-sky-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-sky-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-sky-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium hover:text-sky-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-sky-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#interests"
              className="text-sm font-medium hover:text-sky-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Interests
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-sky-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

