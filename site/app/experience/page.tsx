"use client"

import Link from "next/link"
import { ArrowRight, Briefcase, Filter } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { experiences, type ExperienceField } from "@/lib/data"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

import styles from "./experiences.module.scss"
import Image from "next/image"



export default function ExperiencePage() {

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
  )

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <div className="min-h-screen bg-background playfair">
      <div className={styles.backgroundWrapper} aria-hidden="true">
        <Image 
          src="https://d395js6c4h8h6h.cloudfront.net/Images/experiencesBackgroundImage.jpg"
          alt="Experiences Page Background Image" 
          fill 
          className={styles.backgroundImage} 
        />
      </div>
      <Navigation />

      <main className="relative z-10 pt-8 sm:pt-15 pb-16">
        {/* Header */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="max-w-2xl">
            <p className="font-medium text-sm text-foreground mb-3 tracking-wide uppercase">
              Career
            </p>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Professional Experience
            </h1>
            <p className="text-sm md:text-lg text-foreground leading-relaxed">
              A timeline of my professional journey so far.
            </p>
          </div>
        </section>


        {/* Timeline */}
        <section className="max-w-6xl mx-auto px-6 py-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-foreground border-4 border-background md:-translate-x-1/2 z-10" />

                  <motion.div
                    className={cn(
                      "pl-8 md:pl-0 md:w-1/2",
                      index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:pr-8"
                    )}
                    initial={{ opacity: 0, x: isMobile ? 40 : index % 2 === 0 ? 40 : -40, y: 16 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                  >
                    <div className={styles.cardWrapper}>
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 rounded-md bg-secondary shrink-0">
                            <Briefcase className="h-4 w-4" />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg leading-tight">
                              {experience.role}
                            </h3>
                            <p className="text-sm text-foreground">
                              {experience.organization}
                            </p>
                          </div>
                        </div>
                
                      <p className="text-foreground text-sm leading-relaxed mb-4">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between mt-4 pt-4 border-t border-border">
                        <Badge
                          variant="outline"
                          className="capitalize text-xs"
                        >
                          {experience.field}
                        </Badge>
                        <div className="text-sm text-foreground">
                            {experience.startDate} — {experience.endDate}
                        </div>
                      </div>
                      
                    </div>

                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  )
}
