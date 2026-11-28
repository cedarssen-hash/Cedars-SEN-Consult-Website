import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the assessment, therapy, educational support, training and consultation services listed by Cedars Special Needs Consult.",
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section className="services-page-hero">
        <Container>
          <p className="eyebrow">Services</p>
          <h1>Support and guidance for children, families and institutions.</h1>
          <p>
            Explore the service areas provided by Cedars Special Needs Consult.
            For current details about what a service involves or who it may
            support, contact Cedars directly.
          </p>
        </Container>
      </section>

      <section className="home-section services-index-section">
        <Container>
          <SectionHeading
            eyebrow="Service areas"
            title="Choose a service to learn more"
            description="The information below reflects the services listed by Cedars. Service details can be discussed directly with the team."
          />
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="services-page-contact">
        <Container>
          <div className="services-page-contact-inner">
            <div>
              <p className="eyebrow">Have a question?</p>
              <h2>Talk with Cedars about your situation.</h2>
              <p>
                Please do not include sensitive child medical or developmental
                records in a general enquiry.
              </p>
            </div>
            <ButtonLink href="/#contact">
              Contact Cedars
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}

