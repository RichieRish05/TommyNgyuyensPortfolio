"use client"

import * as React from "react"
import Image from "next/image"
import { X, ExternalLink, Play, Camera, Palette, Megaphone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/data"
import { cn } from "@/lib/utils"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
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

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  // Reset image index when project changes
  React.useEffect(() => {
    setCurrentImageIndex(0)
  }, [project])

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [project])

  if (!project) return null

  const Icon = categoryIcons[project.category]
  const images = project.images || [`/projects/${project.id}-thumb.jpg`]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-lg overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="overflow-y-auto">
          {/* Image Gallery */}
          <div className="relative aspect-video bg-muted">
            <Image
              src={`https://picsum.photos/seed/${project.id}${currentImageIndex}/1200/675`}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />

            {/* Image Navigation */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      currentImageIndex === index
                        ? "bg-foreground w-6"
                        : "bg-foreground/50 hover:bg-foreground/70"
                    )}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Video Play Button (for video projects) */}
            {project.category === "video" && project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-background/20 hover:bg-background/30 transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-background/90 flex items-center justify-center">
                  <Play className="h-8 w-8 ml-1" />
                </div>
              </a>
            )}
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="gap-1.5">
                    <Icon className="h-3 w-3" />
                    {categoryLabels[project.category]}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
                  {project.title}
                </h2>
                {project.client && (
                  <p className="text-muted-foreground mt-1">
                    Client: {project.client}
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-neutral dark:prose-invert max-w-none mb-6">
              <p className="text-foreground/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4 border-t border-border">
              {project.videoUrl && (
                <Button asChild variant="outline" className="group bg-transparent">
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Video
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
