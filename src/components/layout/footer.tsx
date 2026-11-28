import { Container } from "@/components/ui/container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-inner">
          <div className="footer-brand">
            <Link className="brand" href="/" aria-label="Cedars Special Needs Consult home">
              <span className="brand-name">Cedars Special Needs Consult</span>
            </Link>
            <p className="footer-location">Ilorin, Kwara State, Nigeria</p>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy-policy">Privacy</Link>
            </nav>
          </div>
          <p className="footer-note">
            A public information and enquiry website. Please do not send private
            medical or developmental records through general enquiries.
          </p>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Cedars Special Needs Consult
        </div>
      </Container>
    </footer>
  );
}

