"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu } from "lucide-react"

import { BackgroundBeams } from "@/components/ui/background-beams"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

const Header = () => {
  const items = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ]

  const router = useRouter()
  const pathname = usePathname()
  //   const screenSize = require("screen-size")
  const [nav, setNav] = useState(false)
  const [open, setOpen] = useState(false)
  const [socialsOpen, setSocialsOpen] = useState(false)

  const navItemRefs = useRef([])
  // const [indicatorStyle, setIndicatorStyle] = useState({})

  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    bottom: -3,
  })

  const handleMouseEnter = (index: any) => {
    const { offsetLeft, offsetWidth } = navItemRefs.current[index]
    setIndicatorStyle({
      left: offsetLeft - 5,
      width: offsetWidth + 10,
      bottom: -3,
    })
  }

  useEffect(() => {
    if (window.innerWidth < 768) {
      //@ts-ignore
      setIndicatorStyle({
        //@ts-ignore
        left: navItemRefs.current[0].offsetLeft - 5,
        //@ts-ignore
        width: navItemRefs.current[0].offsetWidth + 10,
        bottom: -3,
      })
      setNav(true)
    } else {
      setIndicatorStyle({
        //@ts-ignore
        left: navItemRefs.current[0].offsetLeft - 5,
        //@ts-ignore
        width: navItemRefs.current[0].offsetWidth + 10,
        bottom: -3,
      })
    }

    console.log("ani")
  }, [])

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full flex-row items-center justify-between  px-8 py-4  backdrop-filter lg:px-32">
        <div
          className="flex cursor-pointer flex-row gap-4 transition-opacity duration-300 ease-in-out hover:opacity-80"
          onClick={() => router.push("/")}
        >
          <h1 className="text-2xl font-bold">
            Sai Anish<span className="text-blue-500">.</span>
          </h1>
        </div>
        <div>
          <div className="relative hidden flex-row items-center justify-center gap-4 lg:flex">
            <nav className="flex flex-row items-center justify-center gap-4">
              {items.map((item, index) => (
                <div
                  className="relative"
                  key={item.name}
                  //@ts-ignore
                  ref={(el) => (navItemRefs.current[index] = el)}
                >
                  <a
                    href={item.href}
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
              <div
                className="absolute bottom-0 left-0 z-[-1] h-[2rem] rounded-md bg-blue-500 transition-all duration-300 ease-in-out"
                style={{
                  ...indicatorStyle,
                }}
              ></div>
            </nav>
          </div>
        </div>
        <div>
          <button
            className="hidden items-center justify-center rounded-lg bg-blue-500 px-6 py-2 font-bold text-white shadow-lg transition-colors hover:bg-blue-600 lg:flex"
            onClick={() => router.push("/contact")}
          >
            Let&apos;s Connect
          </button>
        </div>

        {/* <div className="flex lg:hidden"> */}
        <Menubar
          className="
           relative flex border-none bg-transparent shadow-none lg:hidden
           "
        >
          <MenubarMenu>
            <MenubarTrigger className="  ">
              <div
                // className=""
                className={`text-white ${open ? "rounded-xl bg-slate-500" : "text-white"}`}
              >
                <Menu
                  size={32}
                  onClick={() => {
                    setOpen(!open) // Fix typo here, should be setOpen(!open)
                  }}
                />
              </div>
            </MenubarTrigger>

            <MenubarContent className="mr-4 rounded-2xl border border-neutral-800 bg-neutral-900">
              <MenubarItem
                className={` bg-transparent px-3 py-2 ${pathname === "/" ? "bg-white/5 text-blue-500" : "text-white"} rounded-lg transition-colors hover:bg-white/5`}
                onClick={() => router.push("/")}
              >
                Home
              </MenubarItem>

              <MenubarItem
                className={` bg-transparent px-3 py-2 ${pathname === "/about" ? "bg-white/5 text-blue-500" : "text-white"} rounded-lg transition-colors hover:bg-white/5`}
                onClick={() => router.push("/about")}
              >
                About
              </MenubarItem>

              <MenubarItem
                className={` bg-transparent px-3 py-2 ${pathname === "/blog" ? "bg-white/5 text-blue-500" : "text-white"} rounded-lg transition-colors hover:bg-white/5`}
                onClick={() => router.push("/projects")}
              >
                Blog
              </MenubarItem>

              <MenubarItem
                className={` bg-transparent px-3 py-2 ${pathname === "/projects" ? "bg-white/5 text-blue-500" : "text-white"} rounded-lg transition-colors hover:bg-white/5`}
                onClick={() => router.push("/projects")}
              >
                Projects
              </MenubarItem>

              <MenubarItem
                className={` bg-transparent px-3 py-2 ${pathname === "/projects" ? "bg-white/5 text-blue-500" : "text-white"} rounded-lg transition-colors hover:bg-white/5`}
                onClick={() => router.push("/projects")}
              >
                Contact
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </header>
      <BackgroundBeams />
    </>
  )
}

export default Header
