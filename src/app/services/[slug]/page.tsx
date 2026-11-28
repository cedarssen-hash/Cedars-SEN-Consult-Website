import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/services/service-card";
import { getRelatedServices, getService, services } from "@/data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.title,
    description: `${service.summary} Learn about this service from Cedars Special Needs Consult in Ilorin.`,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service);

  return (
    <div className="service-detail-page">
      <section className="service-detail-hero">
        <Container>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.title}</span>
          </nav>
          <p className="eyebrow">Service {service.number}</p>
          <h1>{service.title}</h1>
          <p className="service-detail-summary">{service.summary}</p>
          <div className="button-row">
            <ButtonLink href="/#contact">Ask Cedars about this service</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              All services
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="home-section service-detail-content">
        <Container>
          <div className="service-detail-columns">
            <div>
              <SectionHeading
                eyebrow="About this service"
                title={service.title}
                description={service.summary}
              />
              <p className="service-detail-text">
                Cedars lists this service among its support areas. Contact
                Cedars for current information about who this service may
                support, how it is offered and what to expect.
              </p>
              <h2>What you can ask Cedars</h2>
              <ul className="service-question-list">
                <li>Whether this service may be suitable for your situation.</li>
                <li>What the service involves and how it is arranged.</li>
                <li>What information is helpful for an initial conversation.</li>
              </ul>
              <p className="service-privacy-note">
                Please do not send sensitive child medical or developmental
                records through general enquiries.
              </p>
            </div>
            <aside className="service-contact-card">
              <span className="service-number">{service.number}</span>
              <h2>Ask a question</h2>
              <p>
                Cedars can provide current details about this service and the
                next steps for making an enquiry.
              </p>
              <ButtonLink href="/#contact">Contact Cedars</ButtonLink>
              <a href="https://wa.me/2348135618486">Chat on WhatsApp</a>
            </aside>
          </div>
        </Container>
      </section>

      <section className="service-faq-section">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Questions about this service"
          />
          <div className="service-faq-grid">
            <details className="faq-item">
              <summary>Who may this service support?</summary>
              <p>
                Contact Cedars to discuss who this service may support and
                whether it fits your needs.
              </p>
            </details>
            <details className="faq-item">
              <summary>What does the service involve?</summary>
              <p>
                The service description above reflects the information
                currently supplied. Cedars can explain the current approach
                and arrangements directly.
              </p>
            </details>
            <details className="faq-item">
              <summary>How do I ask about this service?</summary>
              <p>
                Use the contact options on this page. Please do not share
                sensitive child medical or developmental records through a
                general enquiry.
              </p>
            </details>
          </div>
        </Container>
      </section>

      {relatedServices.length > 0 ? (
        <section className="home-section related-services-section">
          <Container>
            <SectionHeading
              eyebrow="Explore more"
              title="Other service areas"
            />
            <div className="service-grid">
              {relatedServices.map((relatedService) => (
                <ServiceCard key={relatedService.slug} service={relatedService} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <div className="service-back-link">
        <Container>
          <Link href="/services">← Back to all services</Link>
        </Container>
      </div>
    </div>
  );
}

