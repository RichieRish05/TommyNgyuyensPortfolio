"use client"

import Link from "next/link"
import { ArrowRight, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { personalInfo, projects } from "@/lib/data"
import { ProjectCard } from "@/components/project-card"

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-16">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-4 tracking-wide">
              Good to see you here
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-balance mb-6">
              I&apos;m a creative marketing strategist who brings brands to life
              through{" "}
              <span className="text-muted-foreground">
                storytelling, visual design, and strategic thinking.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
              {personalInfo.tagline}. I help brands connect authentically with
              their audiences through photography, video, graphic design, and
              integrated campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/about">
                  Learn About Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span>Scroll to see featured work</span>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Selected work
              </p>
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
      <section className="py-24 border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">
            Interested in working together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
