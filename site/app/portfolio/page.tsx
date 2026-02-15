"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Grid3X3, LayoutList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { projects, type ProjectCategory, type Project } from "@/lib/data"
import { cn } from "@/lib/utils"

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "photo", label: "Photography" },
  { value: "video", label: "Video" },
  { value: "graphics", label: "Graphics" },
  { value: "campaign", label: "Campaigns" },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] =
    React.useState<ProjectCategory>("all")
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid")
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null
  )

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "all" || project.category === activeCategory
  )

  // Group projects by category for section display
  const photoProjects = filteredProjects.filter((p) => p.category === "photo")
  const videoProjects = filteredProjects.filter((p) => p.category === "video")
  const graphicsProjects = filteredProjects.filter(
    (p) => p.category === "graphics"
  )
  const campaignProjects = filteredProjects.filter(
    (p) => p.category === "campaign"
  )

  const showSections = activeCategory === "all"

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm text-muted-foreground mb-3 tracking-wide uppercase">
                Portfolio
              </p>
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
                Selected Work
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A collection of projects spanning photography, video production,
                graphic design, and integrated marketing campaigns.
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 border border-border rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  viewMode === "grid"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Grid view"
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  viewMode === "list"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="List view"
              >
                <LayoutList className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="max-w-6xl mx-auto px-6 pb-8">
          <div className="flex items-center gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all",
                  activeCategory === category.value
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Display */}
        {showSections ? (
          <div className="space-y-16">
            {/* Photography Section */}
            {photoProjects.length > 0 && (
              <ProjectSection
                title="Photography"
                subtitle="Visual storytelling through the lens"
                projects={photoProjects}
                viewMode={viewMode}
                onSelectProject={setSelectedProject}
              />
            )}

            {/* Video Section */}
            {videoProjects.length > 0 && (
              <ProjectSection
                title="Video Production"
                subtitle="Moving images that move people"
                projects={videoProjects}
                viewMode={viewMode}
                onSelectProject={setSelectedProject}
              />
            )}

            {/* Graphics Section */}
            {graphicsProjects.length > 0 && (
              <ProjectSection
                title="Graphic Design"
                subtitle="Visual identity and brand systems"
                projects={graphicsProjects}
                viewMode={viewMode}
                onSelectProject={setSelectedProject}
              />
            )}

            {/* Campaigns Section */}
            {campaignProjects.length > 0 && (
              <ProjectSection
                title="Campaigns"
                subtitle="Integrated marketing experiences"
                projects={campaignProjects}
                viewMode={viewMode}
                onSelectProject={setSelectedProject}
              />
            )}
          </div>
        ) : (
          <section className="max-w-6xl mx-auto px-6 py-8">
            <div
              className={cn(
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              )}
            >
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="text-left w-full"
                >
                  {viewMode === "grid" ? (
                    <ProjectCard project={project} />
                  ) : (
                    <ProjectListItem project={project} />
                  )}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 mt-8 border-t border-border">
          <div className="bg-secondary/50 rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-medium mb-4">
              Have a project in mind?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              I&apos;m always excited to collaborate on new creative ventures.
              Let&apos;s discuss how we can bring your vision to life.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

// Project Section Component
function ProjectSection({
  title,
  subtitle,
  projects,
  viewMode,
  onSelectProject,
}: {
  title: string
  subtitle: string
  projects: Project[]
  viewMode: "grid" | "list"
  onSelectProject: (project: Project) => void
}) {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="mb-8 pb-4 border-b border-border">
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      </div>
      <div
        className={cn(
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        )}
      >
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="text-left w-full"
          >
            {viewMode === "grid" ? (
              <ProjectCard project={project} />
            ) : (
              <ProjectListItem project={project} />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}

// Project List Item Component
function ProjectListItem({ project }: { project: Project }) {
  return (
    <div className="group flex items-center gap-6 p-4 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors">
      <div className="relative w-24 h-16 rounded-md overflow-hidden bg-muted shrink-0">
        <img
          src={`https://picsum.photos/seed/${project.id}/200/150`}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium truncate group-hover:text-foreground transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground truncate">
          {project.description}
        </p>
      </div>
      <div className="text-sm text-muted-foreground shrink-0">
        {project.year}
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
    </div>
  )
}
