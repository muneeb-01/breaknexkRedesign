import { useState } from "react"
import { navLinks } from "@/Utils/constants"
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"
import { Button } from "./index"

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<null | number>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-1/2 w-[80%] py-4 z-50 -translate-x-1/2">
      <div className=" rounded-full border-1 flex items-center justify-between backdrop-blur-sm px-6 py-2 md:py-4 shadow-md">
        <h1>LOGO</h1>

        <button
          className="md:hidden text-2xl text-emerald-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="hidden md:flex gap-6">
          {navLinks.map((link, idx) => (
            <li key={idx} className="relative group">
              {/* Parent Link */}
              {!link.dropdown ? (
                <a href={link.href} className="font-medium transition-colors">
                  {link.name}
                </a>
              ) : (
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                  className="flex items-center gap-1 font-medium transition-colors"
                >
                  {link.name}
                  <FaChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openDropdown === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}

              {/* Dropdown Menu */}
              {link.dropdown && openDropdown === idx && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  {link.dropdown.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Button name={"Let's Talk"} theme={"light"}/>
      </div>
    </nav>
  )
}
