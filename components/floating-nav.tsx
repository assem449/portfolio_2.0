"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface NavItem {
  name: string
  link: string
}

export function FloatingNav({ navItems }: { navItems: NavItem[] }) {
  const [activeSection, setActiveSection] = useState("home")
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Hide/show navbar based on scroll direction
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScrollY(window.scrollY)

      // Set active section based on scroll position
      const sections = navItems.map((item) => item.link.substring(1))

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY, navItems])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -20,
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-6 inset-x-0 z-50 mx-auto w-fit px-8"
    >
      <div className="flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-white/20 shadow-lg px-4 py-2">
        <nav className="flex gap-2 md:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                activeSection === item.link.substring(1)
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}

