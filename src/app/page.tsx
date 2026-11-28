import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Professional assessment, behavioural and developmental support, educational services and guidance for children, families, schools and healthcare institutions in Ilorin.",
};

const services = [
  {
    number: "01",
    title: "Behavioural Assessment and Therapy",
    description: "Behavioural assessment and behavioural therapy.",
  },
  {
    number: "02",
    title: "Communication and Language Therapy",
    description: "Communication and language therapy services.",
  },
  {
    number: "03",
    title: "Assessment Services",
    description: "Assessment services for children and families.",
  },
  {
    number: "04",
    title: "Parent Management Training",
    description: "Parent-focused training and guidance.",
  },
  {
    number: "05",
    title: "Special Educational Needs Support",
    description:
      "Remedial education, bridge courses and individualised educational support.",
  },
  {
    number: "06",
    title: "Teacher Training",
    description: "Training for teachers on special educational needs support.",
  },
  {
    number: "07",
    title: "Consultation",
    description: "Consultation for families and institutions.",
  },
  {
    number: "08",
    title: "School Consultancy and SEN Facility Setup",
    description: "School consultancy and special educational needs facility setup.",
  },
];

const audiences = [
  {
    title: "Parents and Families",
    description:
      "Explore support options, learn how to get started and find a way to contact Cedars.",
    href: "/who-we-work-with/families",
  },
  {
    title: "Schools",
    description:
      "Find information about SEN support, teacher training and school consultancy.",
    href: "/who-we-work-with/schools",
  },
  {
    title: "Hospitals and Healthcare Institutions",
    description:
      "Learn about the assessment, therapy and consultation services listed by Cedars.",
    href: "/who-we-work-with/hospitals",
  },
];

const supportSteps = [
  "Reach out",
  "Initial consultation",
  "Assessment and planning, where appropriate",
  "Intervention and support",
  "Review and ongoing guidance, where appropriate",
];

const faqs = [
  {
    question: "What services does Cedars offer?",
    answer:
      "Services listed for Cedars include behavioural assessment and therapy, communication and language therapy, assessment services, Parent Management Training, special educational needs support, teacher training, consultation, and school consultancy and SEN facility setup.",
  },
  {
    question: "Who can contact Cedars?",
    answer:
      "The website is for parents and families, K–12 schools, and children's hospitals and healthcare institutions seeking information about Cedars' services.",
  },
  {
    question: "Should I send my child's medical or developmental records in a general enquiry?",
    answer:
      "No. Please do not send sensitive child medical or developmental records through a general enquiry or WhatsApp message.",
  },
];

const whatsappUrl =
  "https://wa.me/2348135618486?text=Hello%20Cedars%20Special%20Needs%20Consult%2C%20I%20would%20like%20to%20make%20an%20enquiry.";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <Container>
          <div className="hero-layout">
            <div className="hero-content">
              <p className="eyebrow">Cedars Special Needs Consult · Ilorin, Nigeria</p>
              <h1>Every Child Is Unique. Every Child Deserves the Opportunity to Thrive.</h1>
              <p className="hero-description">
                Cedars Special Needs Consult provides professional assessment,
                behavioural and developmental support, educational services and
                practical guidance for children, families, schools and
                healthcare institutions.
              </p>
              <div className="button-row">
                <ButtonLink href="/contact">Book a consultation</ButtonLink>
                <ButtonLink href="#services" variant="secondary">
                  Explore our services
                </ButtonLink>
              </div>
              <p className="hero-note">
                Information for families, schools and healthcare institutions.
              </p>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="visual-orbit visual-orbit--outer" />
              <div className="visual-orbit visual-orbit--inner" />
              <div className="visual-center">
                <span className="visual-center-mark" />
                <span>Every child, seen as an individual</span>
              </div>
              <div className="visual-label visual-label--family">Families</div>
              <div className="visual-label visual-label--school">Schools</div>
              <div className="visual-label visual-label--health">Healthcare</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="home-intro" aria-label="Cedars support overview">
        <Container>
          <p>
            Practical information and support options for children, families
            and the institutions around them.
          </p>
          <a className="text-link" href="#about">
            Learn about Cedars <span aria-hidden="true">→</span>
          </a>
        </Container>
      </section>

      <section className="home-section services-section" id="services">
        <Container>
          <SectionHeading
            eyebrow="How Cedars can help"
            title="Services to support children and the people around them"
            description="Explore the service areas listed by Cedars. Specific support is discussed with Cedars when you get in touch."
          />
          <div className="service-grid">
            {services.map((service) => (
              <article className="home-service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="card-link" href="/services">
                  Explore services <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <div className="section-action">
            <ButtonLink href="/services" variant="secondary">
              View all services
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="home-section about-section" id="about">
        <Container>
          <div className="about-layout">
            <div className="about-copy">
              <p className="eyebrow">About Cedars</p>
              <h2>Support shaped around each child and their environment.</h2>
              <p>
                Cedars Special Needs Consult supports children and persons with
                developmental differences, learning disabilities and
                behavioural challenges. Its work includes families, K–12
                schools, children&apos;s hospitals and healthcare institutions.
              </p>
              <ButtonLink href="/about" variant="secondary">
                Learn about Cedars
              </ButtonLink>
            </div>
            <div className="about-note">
              <span className="about-note-mark" aria-hidden="true" />
              <p>
                Family-centred information, educational support and practical
                guidance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="home-section audiences-section" id="who-we-work-with">
        <Container>
          <SectionHeading
            eyebrow="Who we work with"
            title="Find the information that fits your role"
            description="Choose a starting point to learn more about the support and services relevant to you."
          />
          <div className="audience-grid">
            {audiences.map((audience) => (
              <article className="audience-card" key={audience.title}>
                <span className="audience-accent" aria-hidden="true" />
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
                <a className="card-link" href={audience.href}>
                  Explore information <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="home-section support-section" id="how-support-works">
        <Container>
          <SectionHeading
            eyebrow="Getting started"
            title="A possible path to support"
            description="Every situation is different. These are the steps that may be discussed when you contact Cedars."
          />
          <ol className="support-steps">
            {supportSteps.map((step, index) => (
              <li className="support-step" key={step}>
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="home-section programmes-section" id="programmes">
        <Container>
          <SectionHeading
            eyebrow="Programmes"
            title="Learning and connection for families and communities"
            description="Cedars' programme pages will share event details when they are confirmed."
          />
          <div className="programme-grid">
            <article className="programme-card programme-card--playbook">
              <p className="programme-kicker">Parent learning</p>
              <h3>The Parent&apos;s Playbook</h3>
              <p>
                A parent-focused webinar programme about child development,
                behaviour, parenting and related topics.
              </p>
              <a className="card-link" href="/programmes/parents-playbook">
                Learn about the programme <span aria-hidden="true">→</span>
              </a>
            </article>
            <article className="programme-card programme-card--outreach">
              <p className="programme-kicker">Community awareness</p>
              <h3>Quarterly Outreach</h3>
              <p>
                An awareness and community outreach initiative that offers
                information and free consultation opportunities.
              </p>
              <a className="card-link" href="/programmes/quarterly-outreach">
                Learn about the programme <span aria-hidden="true">→</span>
              </a>
            </article>
          </div>
          <p className="programme-disclaimer">
            Dates, locations, eligibility and registration details will be
            shared after they are confirmed.
          </p>
        </Container>
      </section>

      <section className="home-section faq-section" id="faqs">
        <Container>
          <div className="faq-layout">
            <div>
              <SectionHeading
                eyebrow="Frequently asked questions"
                title="A few helpful things to know"
              />
              <p className="faq-supporting-copy">
                For questions about a specific service or how to begin, contact
                Cedars directly.
              </p>
              <ButtonLink href="/faqs" variant="secondary">
                More questions
              </ButtonLink>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="home-contact-section" id="contact">
        <Container>
          <div className="contact-card">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2>Start with a conversation.</h2>
              <p>
                Ask about services, consultations or support for your school or
                institution.
              </p>
            </div>
            <div className="contact-actions">
              <ButtonLink href="/contact">Contact Cedars</ButtonLink>
              <ButtonLink href={whatsappUrl} variant="secondary">
                Chat on WhatsApp
              </ButtonLink>
              <a className="contact-phone" href="tel:+2348135618486">
                +234 813 561 8486
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

