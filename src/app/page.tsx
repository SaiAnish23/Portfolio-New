"use client"

import React, { useEffect, useRef, useState } from "react"
import { Link } from "lucide-react"
import * as THREE from "three"
import { Globe } from "vanta/dist/vanta.globe.min"

import { siteConfig } from "@/config/site"
import { BackgroundBeams } from "@/components/ui/background-beams"
import About from "@/components/About"
import Header from "@/components/Header"
import { Reveal } from "@/components/Reveal"

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      // setVantaEffect(
      //   Globe({
      //     el: vantaRef.current,
      //     THREE: THREE,
      //     mouseControls: true,
      //     touchControls: true,
      //     gyroControls: false,
      //     minHeight: 200.0,
      //     minWidth: 200.0,
      //     scale: 1.0,
      //     scaleMobile: 1.0,
      //     color: 0x66fcf1,
      //     backgroundColor: 0x0b0c10,
      //     size: 1.0,
      //   })
      // )
    }
  }, [vantaEffect])

  const variants = {
    hidden: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.25,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <>
      <div className="flex flex-col">
        <Header />

        <div
          className="flex min-h-screen w-full flex-col items-start justify-center bg-[#0B0C10]"
          // ref={vantaRef}
        >
          <div className="flex min-h-screen w-full px-5 backdrop-blur-[2px] lg:pl-24 lg:backdrop-blur-[1px] xl:pl-32">
            <div className="my-auto flex flex-col gap-y-5">
              <Reveal side="up">
                <span className="text-lg text-[#66FCF1] lg:text-xl">
                  Hello, I&apos;m
                </span>
              </Reveal>
              <Reveal side="up">
                <span className="text-5xl font-bold tracking-wider text-white lg:text-7xl">
                  Sai Anish
                </span>
              </Reveal>
              <Reveal side="up">
                <span className="text-4xl font-semibold text-[#d7d7d7] lg:text-6xl ">
                  I build things for Web
                </span>
              </Reveal>

              <Reveal side="up">
                <div className="w-fit rounded transition-all hover:bg-[#66FCF1]">
                  <Link
                    href="https://docs.google.com/document/d/1_40BOE1B-5jpTZuXItFlf1SOA98PuWMPaWzvgUYLFxQ/edit?usp=sharing"
                    target="_blank"
                  >
                    <button className="z-10 w-fit rounded border border-[#66FCF1] bg-[#0B0C10] p-5 text-sm text-[#66FCF1] transition-all hover:-translate-x-1 hover:-translate-y-1 lg:text-base">
                      Resume
                    </button>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div>
          <About></About>
        </div>

        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-white">
            {/* {siteConfig.title}
             */}
            Anish
          </h1>
          <p className="text-center text-lg text-white">
            {/* {siteConfig.description}
             */}
            anish
          </p>
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-white">
            {/* {siteConfig.title}
             */}
            Anish
          </h1>
          <p className="text-center text-lg text-white">
            {/* {siteConfig.description}
             */}
            anish
          </p>
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-white">
            {/* {siteConfig.title}
             */}
            Anish
          </h1>
          <p className="text-center text-lg text-white">
            {/* {siteConfig.description}
             */}
            anish
          </p>
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-white">
            {/* {siteConfig.title}
             */}
            Anish
          </h1>
          <p className="text-center text-lg text-white">
            {/* {siteConfig.description}
             */}
            anish
          </p>
        </div>
      </div>

      {/* <BackgroundBeams /> */}
    </>
  )
}
