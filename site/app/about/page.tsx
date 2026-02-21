import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { personalInfo, aboutMe, skills } from "@/lib/data"

import backgroundImage from "@/assets/aboutBackgroundImage.jpg"

import headshot from "@/assets/Tommy Nguyen.webp"
import styles from "./about.module.scss"


export const metadata = {
  title: "About | Tommy Nguyen",
  description:
    "Learn more about Tommy Nguyen",
}

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.backgroundWrapper} aria-hidden="true">
        <Image src={backgroundImage} alt="About Page Background Image" fill className={styles.backgroundImage} />
      </div>
      <Navigation />
      <main className="relative z-10 pt-24 pb-16">
        {/*
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className={styles.heroWrapper}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Photo */}
            <div className={styles.headshotWrapper}>
              <Image src={headshot} alt="Tommy Nguyen Headshot" fill className={styles.headshot} />
            </div>


            {/* Content */}
            <div className="lg:top-24">
              <p className="text-sm mb-3 tracking-wide uppercase">
                About
              </p>
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6">
                {personalInfo.name}
              </h1>
              <p className="text-lg mb-2">
                {personalInfo.title}
              </p>
              <p className="text-sm mb-8">
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
          </div>
        </section>


        {/* Skills Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
          <div className="flex items-center gap-2 mb-10 bg-black/50 backdrop-blur-sm rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-medium">Skills & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-6 rounded-lg border border-border bg-card/80 backdrop-blur-sm hover:border-foreground/20 transition-colors"
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

      </main>

      <Footer />
    </div>
  )
}
