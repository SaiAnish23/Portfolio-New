"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

function Loading({ children }: any) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 400)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0C10]">
        <div className="text-[#f3f3f3]">
          <Image
            src="/assets/2.png"
            width={200}
            height={200}
            alt="logo"
            className="animate-pulse duration-1000"
          />
        </div>
      </div>
    )
  }

  return <div>{children}</div>
}

export default Loading
