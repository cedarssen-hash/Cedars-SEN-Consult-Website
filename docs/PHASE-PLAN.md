# Phased Development Plan and Approval Gates

## Mandatory approval rule
Complete one phase at a time. At each phase end, stop and request explicit user approval before beginning the next. Silence, a new question, or an unrelated request is not approval. If changes are requested, remain in the current phase. The user is a beginner: explain decisions and commands in plain language.

## Phase 0 — Discovery and preparation
Inspect repository structure, branch/status, files, dependencies, and configuration. Determine whether an implementation already exists. Identify reusable code/assets. Inspect logo if available. Propose palette, sitemap, architecture, missing information, risks, and dependencies. Prepare/update project documentation. Do not build website pages or start Phase 1.
Acceptance: repository state understood; scope/sitemap/design proposal/architecture documented; gaps and risks listed; user has reviewed.
**STOP and request approval for Phase 1.**

## Phase 1 — Foundation and design system
Set up/refine Next.js, TypeScript, Tailwind; approved brand tokens and typography; logo; reusable buttons/cards/containers/sections; responsive header, mobile navigation, footer; accessible focus states and image handling.
Acceptance: app starts; header/footer render; consistent brand; mobile navigation works; reusable components; basic accessibility checks pass.
**STOP and request approval for Phase 2.**

## Phase 2 — Homepage
Implement approved homepage sections from sitemap/content plan.
Acceptance: approved sections present; responsive; CTAs/navigation work; images and alt text correct; brand consistent; unconfirmed content omitted or marked.
**STOP and request approval for Phase 3.**

## Phase 3 — Services
Implement overview and eight individual service pages: behavioural assessment/therapy; communication/language therapy; assessment; PMT; SEN support; teacher training; consultation; school consultancy/SEN facility setup.
Acceptance: all pages exist; approved content; links, related services, CTAs, metadata, responsive layouts work; no unsupported clinical claims.
**STOP and request approval for Phase 4.**

## Phase 4 — About, audiences, programmes
Implement About, family/school/hospital audience pages, programmes, and FAQs.
Acceptance: pages navigable; audience CTAs work; Parent's Playbook and Quarterly Outreach can accommodate updates; no invented facts/event details.
**STOP and request approval for Phase 5.**

## Phase 5 — Contact and integrations
Implement contact page, general/institutional forms, secure email, WhatsApp, and verified map if approved.
Acceptance: correct WhatsApp number; client/server validation; email delivery tested; loading/success/error states; spam protection; minimal data collection; address verified before map/publication.
**STOP and request approval for Phase 6.**

## Phase 6 — Resources, SEO, content completion
Build resource landing/article templates, SEO foundations, privacy page, image optimisation. CMS requires separate approval.
Acceptance: resources structure works; metadata/sitemap/robots/Open Graph/internal links; privacy content ready for review; no fabricated articles/testimonials.
**STOP and request approval for Phase 7.**

## Phase 7 — QA and deployment preparation
Test navigation, links, CTAs, forms, WhatsApp, mobile menu, contact details, programme links; desktop/tablet/mobile; keyboard/focus/labels/contrast/alt/headings; TypeScript/lint/tests/build; broken links, console errors, images, secrets; SEO metadata/sitemap/robots/Open Graph. Prepare deployment instructions, environment checklist, domain guidance, launch/post-launch checklist.
Acceptance: production build succeeds; critical functionality works; no known critical defects; deployment documented; user review completed.
**STOP and request explicit approval before live deployment.**

## Required phase completion report
Report: completed work; files changed; tests and actual results; assumptions/open issues; preview/screenshots if available; next phase scope. Ask: “Do you approve this phase so I can proceed to Phase [next number], or would you like any changes first?” Never continue without explicit approval.