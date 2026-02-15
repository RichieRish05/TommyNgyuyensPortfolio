import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { personalInfo, aboutMe, skills } from "@/lib/data"

import headshot from "@/assets/Tommy Nguyen.webp"

export const metadata = {
  title: "About | Alex Morgan",
  description:
    "Learn more about Alex Morgan - Creative Marketing Strategist with expertise in brand storytelling, photography, and video production.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Photo */}
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted">
              <Image
                src={headshot}
                alt={`${personalInfo.name} - Professional headshot`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="lg:sticky lg:top-24">
              <p className="text-sm text-muted-foreground mb-3 tracking-wide uppercase">
                About
              </p>
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6">
                {personalInfo.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                {personalInfo.title}
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                {personalInfo.location}
              </p>

              <div className="prose prose-neutral dark:prose-invert">
                {aboutMe.bio.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-foreground/80 leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <Button asChild className="group">
                  <Link href="/portfolio">
                    View Portfolio
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Languages & Interests */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-xl font-medium">Languages</h2>
              </div>
              <ul className="space-y-3">
                {aboutMe.languages.map((language) => (
                  <li
                    key={language}
                    className="text-muted-foreground flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                    {language}
                  </li>
                ))}
              </ul>
            </div>

            {/* Interests */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Heart className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-xl font-medium">Interests & Hobbies</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {aboutMe.hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-foreground/30 hover:text-foreground transition-colors"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
          <div className="flex items-center gap-2 mb-10">
            <Sparkles className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-2xl font-medium">Skills & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors"
              >
                <h3 className="font-medium mb-4 text-lg">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
          <div className="bg-secondary/50 rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-medium mb-4">
              Want to see my work in action?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Explore my portfolio to see how I&apos;ve helped brands tell their
              stories through creative campaigns and visual content.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/portfolio">
                Explore Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
