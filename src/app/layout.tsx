"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/theme-provider"

import Loading from "./loading"

const inter = Inter({ subsets: ["latin"] })

interface RootLayoutProps {
  children: React.ReactNode
}

// export const metadata: Metadata = {
//   metadataBase: new URL(siteConfig.url.base),
//   title: {
//     default: siteConfig.name,
//     template: `%s | ${siteConfig.name}`p
//   },
//   description: siteConfig.description,
//   keywords: siteConfig.keywords,
//   authors: [
//     {
//       name: siteConfig.author,
//       url: siteConfig.url.author,
//     },
//   ],
//   creator: siteConfig.author,
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteConfig.url.base,
//     title: siteConfig.name,
//     description: siteConfig.description,
//     siteName: siteConfig.name,
//     images: [
//       {
//         url: siteConfig.ogImage,
//         width: 1200,
//         height: 630,
//         alt: siteConfig.name,
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: siteConfig.name,
//     description: siteConfig.description,
//     images: [siteConfig.ogImage],
//     creator: "@_rdev7",
//   },
//   icons: {
//     icon: "/favicon.ico",
//   },
// }

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head />
//       <body
//         className={cn(
//           "bg-background min-h-screen antialiased",
//           inter.className
//         )}
//       >
//         <Loading />

//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

export default function RootLayout({ children }: RootLayoutProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-background min-h-screen antialiased",
          inter.className
        )}
      >
        {isLoading ? (
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
        ) : (
          <>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <main className="overflow-hidden">
                {children}
                <div className="bottom-0 left-0 z-20 hidden flex-row text-white lg:fixed lg:ml-14 lg:flex">
                  <div className="flex flex-col items-center gap-y-5 text-2xl">
                    <Link href="https://github.com/Anish0369">
                      <FiGithub className="transition-all duration-500 hover:scale-125 hover:text-[#66FCF1]" />
                    </Link>
                    <Link href="https://github.com/Anish0369">
                      <FiLinkedin className="transition-all duration-500 hover:scale-125 hover:text-[#66FCF1]" />
                    </Link>
                    <div className="h-32 border-l-2 border-white" />
                  </div>
                </div>
                <div className="bottom-0 right-0 z-20 mr-14 hidden flex-row text-white lg:fixed lg:flex">
                  <div className="flex flex-col items-center gap-y-5 text-base">
                    <Link href="mailto:anish231003@gmail.com">
                      <span className="transition-all duration-500 [writing-mode:vertical-lr] hover:scale-110 hover:text-[#66FCF1]">
                        anish231003@gmail.com
                      </span>
                    </Link>
                    <div className="h-32 border-r-2 border-white" />
                  </div>
                </div>
              </main>
            </ThemeProvider>
          </>
        )}
      </body>
    </html>
  )
}
