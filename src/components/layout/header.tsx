"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#who-we-work-with", label: "Who We Work With" },
  { href: "#programmes", label: "Programmes" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

const whatsappUrl =
  "https://wa.me/2348135618486?text=Hello%20Cedars%20Special%20Needs%20Consult%2C%20I%20would%20like%20to%20make%20an%20enquiry.";

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Cedars Special Needs Consult home">
      <span className="brand-logo-frame">
        <Image
          alt="Cedars Special Needs Consult"
          className="brand-logo"
          fill
          priority
          sizes="(max-width: 700px) 190px, 240px"
          src="/images/logo/cedars-logo.jpeg"
        />
      </span>
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <Container>
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <ButtonLink href="#contact">Book a consultation</ButtonLink>
            <ButtonLink href={whatsappUrl} variant="secondary">
              WhatsApp
            </ButtonLink>
          </div>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="menu-toggle"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
        <nav
          aria-label="Mobile navigation"
          className="mobile-nav"
          data-open={menuOpen}
          id="mobile-navigation"
          hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <Link href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <Link href="#contact" onClick={closeMenu}>
            Book a consultation
          </Link>
          <a href={whatsappUrl} onClick={closeMenu}>
            Chat on WhatsApp
          </a>
        </nav>
      </Container>
    </header>
  );
}

