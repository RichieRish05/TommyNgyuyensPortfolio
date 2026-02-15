"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Briefcase, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { experiences, type ExperienceField } from "@/lib/data"
import { cn } from "@/lib/utils"

const filters: { value: ExperienceField; label: string }[] = [
  { value: "all", label: "All Experience" },
  { value: "marketing", label: "Marketing" },
  { value: "design", label: "Design" },
  { value: "media", label: "Media" },
]

export default function ExperiencePage() {
  const [activeFilter, setActiveFilter] = React.useState<ExperienceField>("all")

  const filteredExperiences = experiences.filter(
    (exp) => activeFilter === "all" || exp.field === activeFilter
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground mb-3 tracking-wide uppercase">
              Career
            </p>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Professional Experience
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A timeline of my professional journey across marketing, design,
              and media production. Each role has shaped my approach to creative
              problem-solving.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="max-w-6xl mx-auto px-6 pb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all",
                  activeFilter === filter.value
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-6xl mx-auto px-6 py-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {filteredExperiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={cn(
                    "relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16",
                    index % 2 === 0 ? "md:text-right" : ""
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-foreground border-4 border-background md:-translate-x-1/2 z-10" />

                  {/* Date Column */}
                  <div
                    className={cn(
                      "pl-8 md:pl-0",
                      index % 2 === 0 ? "md:pr-8" : "md:order-2 md:pl-8"
                    )}
                  >
                    <span className="text-sm text-muted-foreground">
                      {experience.startDate} — {experience.endDate}
                    </span>
                  </div>

                  {/* Content Column */}
                  <div
                    className={cn(
                      "pl-8 md:pl-0 -mt-6 md:mt-0",
                      index % 2 === 0
                        ? "md:order-2 md:pl-8 md:text-left"
                        : "md:pr-8 md:text-left"
                    )}
                  >
                    <div className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-md bg-secondary shrink-0">
                          <Briefcase className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg leading-tight">
                            {experience.role}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {experience.organization}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <Badge
                          variant="outline"
                          className="capitalize text-xs"
                        >
                          {experience.field}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume CTA */}
        <section className="max-w-6xl mx-auto px-6 py-16 mt-8 border-t border-border">
          <div className="bg-secondary/50 rounded-lg p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-medium mb-2">
                Want the full picture?
              </h2>
              <p className="text-muted-foreground">
                Download my resume for a comprehensive overview of my experience
                and skills.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <Link href="/resume.pdf" target="_blank">
                  Download Resume
                </Link>
              </Button>
              <Button asChild className="group">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
