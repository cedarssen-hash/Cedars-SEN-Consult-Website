import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const sampleServices = [
  "Behavioural support",
  "Communication and language",
  "Learning and school support",
];

export default function FoundationPreviewPage() {
  return (
    <>
      <section className="preview-hero">
        <Container>
          <p className="eyebrow">Phase 1 · Foundation preview</p>
          <h1>A welcoming foundation for Cedars.</h1>
          <p className="preview-copy">
            This temporary page shows the proposed colours, typography, buttons,
            cards, header and footer. The approved homepage content will be
            created in Phase 2.
          </p>
          <div className="button-row">
            <ButtonLink href="#preview-services">Primary button</ButtonLink>
            <ButtonLink href="#preview-services" variant="secondary">
              Secondary button
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="preview-section" id="preview-services">
        <Container>
          <SectionHeading
            eyebrow="Reusable building blocks"
            title="Clear, calm, and easy to explore"
            description="These sample cards demonstrate the design system without adding unconfirmed service claims or details."
          />
          <div className="card-grid">
            {sampleServices.map((service) => (
              <article className="service-card" key={service}>
                <span className="card-mark" aria-hidden="true">
                  C
                </span>
                <h3>{service}</h3>
                <p>Approved service information will be added in a later phase.</p>
                <a className="text-link" href="#main-content">
                  Example text link <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

