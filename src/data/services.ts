export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "behavioural-assessment-and-therapy",
    number: "01",
    title: "Behavioural Assessment and Therapy",
    summary: "Behavioural assessment and behavioural therapy.",
    related: ["assessment-services", "parent-management-training", "consultation"],
  },
  {
    slug: "communication-and-language-therapy",
    number: "02",
    title: "Communication and Language Therapy",
    summary: "Communication and language therapy.",
    related: ["assessment-services", "special-educational-needs-support", "consultation"],
  },
  {
    slug: "assessment-services",
    number: "03",
    title: "Assessment Services",
    summary: "Assessment services.",
    related: ["behavioural-assessment-and-therapy", "communication-and-language-therapy", "consultation"],
  },
  {
    slug: "parent-management-training",
    number: "04",
    title: "Parent Management Training",
    summary: "Parent Management Training (PMT).",
    related: ["behavioural-assessment-and-therapy", "consultation", "special-educational-needs-support"],
  },
  {
    slug: "special-educational-needs-support",
    number: "05",
    title: "Special Educational Needs Support",
    summary:
      "Remedial education, bridge courses, individualised educational support, IEPs, goals and milestones.",
    related: ["teacher-training", "school-consultancy-and-sen-facility-setup", "assessment-services"],
  },
  {
    slug: "teacher-training",
    number: "06",
    title: "Teacher Training",
    summary: "Teacher training.",
    related: ["special-educational-needs-support", "school-consultancy-and-sen-facility-setup", "consultation"],
  },
  {
    slug: "consultation",
    number: "07",
    title: "Consultation",
    summary: "Consultation.",
    related: ["assessment-services", "parent-management-training", "teacher-training"],
  },
  {
    slug: "school-consultancy-and-sen-facility-setup",
    number: "08",
    title: "School Consultancy and SEN Facility Setup",
    summary: "School consultancy and special educational needs (SEN) facility setup.",
    related: ["teacher-training", "special-educational-needs-support", "consultation"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service) {
  return service.related
    .map((slug) => getService(slug))
    .filter((related): related is Service => Boolean(related));
}

