# Technical Requirements

## Proposed stack
Next.js, TypeScript, Tailwind CSS, Lucide React, React Hook Form and Zod, secure server-side email provider such as Resend, and Vercel hosting subject to approval. Use shadcn/ui only where useful. Keep dependencies minimal. Confirm architecture in Phase 0 after repository inspection.

## Discovery first
Inspect existing files, branches, configuration, dependencies, and implementation before coding. Do not assume the repository is empty or replace existing work without approval.

## Suggested structure
- `src/app/`: routes/layouts.
- `src/components/`: shared layout, navigation, service, programme, form, and UI.
- `src/data/`: approved services, FAQs, programmes.
- `src/lib/`: validation, email, WhatsApp.
- `public/images/`: approved logo and imagery.
- `docs/`: project specifications.
Adapt to existing repository conventions.

## General enquiry form
Fields: full name, email, phone, enquiry type (Parent/Caregiver, School, Hospital/Healthcare Professional, Other), service of interest, message, privacy/consent checkbox.
Institutional enquiry may additionally request institution, contact person/role, institution type, contact details, services of interest, and support needs.

Requirements: client/server validation; clear errors; loading/success/error states; spam protection; secure server-side notification to Cedars.sen@gmail.com; optional acknowledgement email only if approved. Do not solicit sensitive child medical/developmental records. Do not rely on mailto as the only submission mechanism.

## WhatsApp
Use https://wa.me/2348135618486?text=Hello%20Cedars%20Special%20Needs%20Consult%2C%20I%20would%20like%20to%20make%20an%20enquiry.
Provide an accessible floating control that does not obscure mobile content.

## Security and privacy
Keep secrets server-side in environment variables. Include `.env.example` with placeholders only. Never commit real credentials. Minimise data collection. Do not build clinical records into this public site. Privacy, consent, and safeguarding text needs review before launch.

## SEO
Unique page titles/descriptions; semantic headings; descriptive URLs; descriptive alt text; Open Graph metadata; XML sitemap; robots.txt; canonical URLs where appropriate; internal links; optimised images; structured data only when accurate. Search themes include special needs support Ilorin, child development services Ilorin, behavioural therapy Ilorin, speech and language therapy Ilorin, behavioural assessment, SEN services Kwara, PMT, teacher training, SEN consultancy, and SEN facility setup Nigeria. Avoid keyword stuffing.

## Quality checks
Run available lint, type-check, tests, and production build. Report actual results. Test responsive layouts, forms, navigation, accessibility basics, links, images, and console errors.

## Deployment
Do not deploy, change DNS, or modify production infrastructure without explicit approval. Document environment variables and deployment steps.