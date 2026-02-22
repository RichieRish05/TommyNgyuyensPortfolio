"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowUpRight, Play, Camera, Palette, Megaphone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/data"
import styles from "./project-card.module.scss"
import clsx from "clsx"

import headshot from "@/assets/Tommy Nguyen.webp"

interface ProjectCardProps {
  project: Project
  className?: string
}

const categoryIcons = {
  photo: Camera,
  video: Play,
  graphics: Palette,
  campaign: Megaphone,
  all: Camera,
}

const categoryLabels = {
  photo: "Photography",
  video: "Video",
  graphics: "Graphics",
  campaign: "Campaign",
  all: "All",
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const Icon = categoryIcons[project.category]

  return (
    <div
      className={cn(
        "group relative border-white border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-foreground/20 hover:shadow-lg",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={headshot}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover Overlay Content */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className={styles.tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className={styles.tag}>
            <Icon className="h-3 w-3" />
            {categoryLabels[project.category]}
          </Badge>
        </div>

        {/* Arrow */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight className="h-4 w-4 text-black" />
        </div>
      </div>

      {/* Content */}
      <div className={clsx(styles.content, "radialBackground")}>
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-medium text-lg leading-tight group-hover:text-foreground transition-colors">
            {project.title}
          </h3>
          <span className="text-sm shrink-0">
            {project.year}
          </span>
        </div>
        <p className="text-sm line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  )
}
