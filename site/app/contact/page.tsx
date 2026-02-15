"use client"

import * as React from "react"
import Link from "next/link"
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  FileText,
  Send,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { personalInfo } from "@/lib/data"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="max-w-2xl">
            <p className="text-sm text-muted-foreground mb-3 tracking-wide uppercase">
              Contact
            </p>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Let&apos;s Connect
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind or just want to say hello? I&apos;d love to
              hear from you. Fill out the form below or reach out directly
              through any of the channels listed.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <div className="p-8 rounded-lg border border-border bg-card text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl font-medium mb-2">
                    Message Sent Successfully
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out! I&apos;ll get back to you as
                    soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input
                      id="organization"
                      name="organization"
                      placeholder="Company or Organization"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Direct Contact */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <h2 className="font-medium mb-6">Direct Contact</h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground">{personalInfo.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground">{personalInfo.phone}</p>
                    </div>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="text-foreground">Connect with me</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Download */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <h2 className="font-medium mb-4">Resume</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Download my resume for a comprehensive overview of my
                  experience, skills, and accomplishments.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href={personalInfo.resumeUrl} target="_blank">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>

              {/* Availability */}
              <div className="p-6 rounded-lg border border-border bg-secondary/30">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <h2 className="font-medium">Currently Available</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  I&apos;m open to new opportunities and freelance projects.
                  Response time is typically within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
