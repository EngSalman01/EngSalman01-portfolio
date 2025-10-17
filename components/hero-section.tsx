"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Download, ArrowDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedText, ClientMotion } from "@/components/client-animations"

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <AnimatedText text="Salman Rafid Almnaseer" className="text-4xl md:text-5xl font-bold tracking-tight" />
              <AnimatedText
                text="Software Engineer"
                className="text-2xl md:text-3xl font-semibold mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                once={true}
              />
            </div>
            <ClientMotion
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Results-driven Software Engineering graduate with expertise in AI implementation and full-stack
              development. Building scalable, real-world applications from AI-powered systems to real-time logistics
              platforms.
            </ClientMotion>
            <ClientMotion
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button asChild className="relative overflow-hidden group">
                <Link href="#contact">
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-white dark:bg-gray-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button variant="outline" asChild className="relative overflow-hidden group bg-transparent">
                <Link href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button variant="secondary" asChild className="relative overflow-hidden group">
                <Link href="/documents/salman-rafid-resume.pdf" target="_blank" download>
                  <Download className="w-4 h-4 mr-2" />
                  <span className="relative z-10">Resume</span>
                  <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </Link>
              </Button>
            </ClientMotion>
            <ClientMotion
              className="flex gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link
                href="https://www.linkedin.com/in/salmanrafid/"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/EngSalman01"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:eng.salman01@outlook.com"
                className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-6 h-6" />
              </Link>
              <Link
                href="tel:+966555339782"
                className="text-gray-600 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Phone className="w-6 h-6" />
              </Link>
            </ClientMotion>
          </div>
          <ClientMotion
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image src="/images/profile.png" alt="Salman Rafid Almnaseer" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 mix-blend-overlay" />
            </div>
          </ClientMotion>
        </div>

        <ClientMotion
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Link
            href="#about"
            className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </Link>
        </ClientMotion>
      </div>
    </section>
  )
}
