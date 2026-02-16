"use client"

import Link from "next/link"
import { ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { personalInfo, projects } from "@/lib/data"
import { ProjectCard } from "@/components/project-card"
import styles from "./homepage.module.scss"
import { useRef, useState, useEffect } from "react"


export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Background Video */}
        <video 
            src={"https://d395js6c4h8h6h.cloudfront.net/Videos/DelMarNikes.mp4"} 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            className={styles.backgroundVideo} 
          />
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center pt-16">
          <div className={styles.title}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium">Tommy Nguyen</h1>
          </div>
      </section>

      {/* Featured Work Section */}
      <section className="relative py-24 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Button asChild variant="ghost" className="group">
              <Link href="/portfolio">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">
            Interested in working together?
          </h2>
          <p className="text-white mb-8 max-w-lg mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  )


}
