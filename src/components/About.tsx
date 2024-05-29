"use client"

import React, { useState } from "react"
import Image from "next/image"
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc"

import { Reveal } from "./Reveal"

export default function About() {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <section>
      <div className="flex min-h-screen flex-col items-center lg:mx-28 lg:items-start xl:mx-96">
        <Reveal side="up">
          <div className="mb-10 mt-10 flex flex-row items-center justify-center lg:mb-14 lg:mt-20 lg:justify-normal lg:gap-x-10">
            <span className="text-4xl font-semibold text-[#f3f3f3] opacity-90">
              About Me
            </span>
            <div className="hidden w-80 border-t border-[#353D47] lg:flex" />
          </div>
        </Reveal>
        <div className="flex flex-col-reverse items-center lg:w-full lg:flex-row lg:justify-between lg:gap-x-20">
          <div className="mx-5 my-auto mt-10 lg:mx-0 lg:mt-0 lg:w-2/3">
            <div className="flex flex-col gap-y-4 text-lg opacity-70">
              <Reveal side="left">
                <span>
                  Hello I am Sai Anish, a Fullstack Developer and a Computer
                  Engineering Student.
                </span>
              </Reveal>
              <Reveal side="left">
                <span>{/* Add Description */}</span>
              </Reveal>
              <Reveal side="left">
                <span>{/* Add Description */}</span>
              </Reveal>
              <Reveal side="left">
                <span>{/* Add Description */}</span>
              </Reveal>
              <Reveal side="left">
                <span>{/* Add Description */}</span>
              </Reveal>
            </div>
            <Reveal side="left">
              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-base">
                <span className="flex flex-row items-center gap-2 text-[#66FCF1]">
                  <VscDebugBreakpointLogUnverified />
                  TypeScript | JavaScript
                </span>
                <span className="flex flex-row items-center gap-2 text-[#66FCF1]">
                  <VscDebugBreakpointLogUnverified />
                  NextJS | ReactJS
                </span>
                <span className="flex flex-row items-center gap-2 text-[#66FCF1]">
                  <VscDebugBreakpointLogUnverified />
                  Python
                </span>
                <span className="flex flex-row items-center gap-2 text-[#66FCF1]">
                  <VscDebugBreakpointLogUnverified />
                  Django
                </span>
                <span className="flex flex-row items-center gap-2 text-[#66FCF1]">
                  <VscDebugBreakpointLogUnverified />
                  Node.js|Express.js
                </span>
                <span className="flex flex-row items-center gap-2 text-[#66FCF1]">
                  <VscDebugBreakpointLogUnverified />
                  React Native
                </span>
                <span className="flex flex-row items-center gap-2 text-[#66FCF1]">
                  <VscDebugBreakpointLogUnverified />
                  Postgres | MySQL
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal side="right">
            <div
              className={`ml-5 mt-5 h-fit w-fit rounded border-2 border-[#66FCF1] transition-all lg:my-auto ${
                isHovered ? "translate-x-1 translate-y-1" : ""
              }`}
            >
              <Image
                src="/public/assets/2.png"
                alt="image"
                width={300}
                height={300}
                className={`-translate-x-4 -translate-y-4 rounded transition-all ${
                  isHovered ? "hover:-translate-x-6 hover:-translate-y-6" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
