import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="brand" href="/" aria-label="Cedars Special Needs Consult home">
              <span className="brand-mark" aria-hidden="true">
                C
              </span>
              <span>
                <span className="brand-name">Cedars Special Needs Consult</span>
                <span className="brand-description">Ilorin, Kwara State, Nigeria</span>
              </span>
            </a>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
              <a href="/privacy-policy">Privacy</a>
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

