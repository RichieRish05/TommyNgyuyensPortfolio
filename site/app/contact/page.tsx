"use client"

import * as React from "react"
import {
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

import styles from "./contact.module.scss"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [isFormValid, setIsFormValid] = React.useState(false)

  const validateForm = (form: HTMLFormElement) => {
    const formData = new FormData(form)
    const firstName = (formData.get("firstName") as string)?.trim()
    const lastName = (formData.get("lastName") as string)?.trim()
    const email = (formData.get("email") as string)?.trim()
    const subject = (formData.get("subject") as string)?.trim()
    const message = (formData.get("message") as string)?.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    setIsFormValid(
      !!firstName && !!lastName && !!email && emailRegex.test(email) && !!subject && !!message
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsError(false)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      form.reset()
      setIsSubmitted(true)
    } catch {
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background playfair">
      <Navigation />

      <div className={styles.backgroundWrapper} aria-hidden="true">
        <Image 
          src="https://d395js6c4h8h6h.cloudfront.net/Images/contactBackgroundImage.webp" 
          alt="Experiences Page Background Image" 
          fill 
          className={styles.backgroundImage} 
        />
      </div>

      <main className="relative z-10 pt-8 sm:pt-15 pb-16">
        {/* Header */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="max-w-2xl">
            <p className="text-sm text-foreground mb-3 tracking-wide uppercase">
              Contact
            </p>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Let&apos;s Connect
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
              Have a project in mind or just want to say hello? I&apos;d love to
              hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-6xl mx-auto px-6 py-8">
          <div className="rounded-xl border border-border radialBackground backdrop-blur-sm p-8 sm:p-10">
              {isError ? (
                <div className="p-8 rounded-lg border border-destructive/50 bg-card text-center">
                  <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="h-8 w-8 text-destructive" />
                  </div>
                  <h2 className="text-xl font-medium mb-2">
                    Failed to Send Message
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Something went wrong. Please try again or reach out
                    directly via email.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsError(false)}
                  >
                    Try Again
                  </Button>
                </div>
              ) : isSubmitted ? (
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
                <form onSubmit={handleSubmit} onChange={(e) => validateForm(e.currentTarget)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Jane"
                        required
                        className="bg-black border-neutral-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                        className="bg-black border-neutral-700"
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
                      className="bg-black border-neutral-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input
                      id="organization"
                      name="organization"
                      placeholder="Company or Organization"
                      className="bg-black border-neutral-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      className="bg-black border-neutral-700"
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
                    disabled={isSubmitting || !isFormValid}
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
        </section>
      </main>

      <Footer />
    </div>
  )
}
