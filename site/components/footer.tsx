import Link from "next/link"
import { Linkedin, Mail, Phone } from "lucide-react"
import { personalInfo, navLinks } from "@/lib/data"
import clsx from "clsx"
import styles from "./footer.module.scss"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={clsx(styles.footerContainer, "transluscentBackground")}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-medium text-lg mb-2">{personalInfo.name}</h3>
            <p className="text-sm text-foreground">{personalInfo.title}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="linkText"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className={clsx(styles.linkText, "flex items-center gap-2 linkText")}
              >
                <Mail className="h-4 w-4" />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(styles.linkText, "flex items-center gap-2 linkText")}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className={"flex items-center gap-2 linkText"}
              >
                <Phone className="h-4 w-4" />
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="linkText"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
