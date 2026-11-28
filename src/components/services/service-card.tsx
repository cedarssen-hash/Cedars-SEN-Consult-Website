import Link from "next/link";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="home-service-card">
      <span className="service-number">{service.number}</span>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link className="card-link" href={`/services/${service.slug}`}>
        Read about this service <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

