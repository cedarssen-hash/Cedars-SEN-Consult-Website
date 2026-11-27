# AGENTS.md — Cedars Special Needs Consult Website

## Project identity
This repository contains the public-facing website for Cedars Special Needs Consult. It is separate from the Neurodevelopmental Practice and Care Management Platform (professional SaaS). Do not merge their code, data models, requirements, or workflows.

## Working rules
- Follow the project brief and documents in `docs/`.
- Work in the approved phase only. Stop at each phase gate and request explicit user approval before proceeding.
- A new question or silence is not approval.
- The user is a beginner. Explain technical decisions and terminal steps in plain, sequential language.
- Inspect existing files before changing them. Do not overwrite or delete existing work without explaining the impact and obtaining approval.
- Do not invent organisation facts, staff credentials, clinical instruments, diagnostic claims, partnerships, statistics, testimonials, event dates, or outcomes.
- Mark unconfirmed content as a placeholder and identify what Cedars must confirm.
- Keep the public website separate from confidential clinical records and clinical case-management workflows.
- Never request or store sensitive child medical/developmental records through general enquiry forms.
- Never expose API keys, tokens, passwords, or secrets in client-side code or commits.

## Brand and design
- Use the supplied Cedars logo as the primary brand reference.
- Primary brand direction: deep forest green sampled from the logo; supporting muted sage and light green; white/warm-neutral backgrounds; deep charcoal text.
- Do not use blue as the primary brand colour.
- Use professional, accessible typography (Poppins for headings and Inter for body text are suggested).
- Prioritise respectful, authentic imagery of Black/African children, parents, caregivers, teachers, and professionals.
- Use only images with appropriate licensing or documented permission. Pinterest may be used for visual inspiration, not as permission to republish images.
- Do not imply stock photographs depict actual Cedars clients or staff.
- Design responsively for desktop, tablet, and mobile. Use semantic HTML, keyboard accessibility, visible focus states, descriptive alt text, and strong colour contrast.

## Engineering
- Prefer Next.js, TypeScript, and Tailwind CSS unless repository inspection or an approved decision justifies another stack.
- Keep dependencies minimal and components reusable.
- Validate forms on both client and server.
- Keep secrets in environment variables and provide an `.env.example` without real values.
- Run relevant checks and report their actual results. Do not claim tests passed if they were not run.

## Phase approval report
At the end of each phase, report: completed work, files changed, tests run/results, assumptions and outstanding issues, preview/screenshot if available, and the next phase. Then ask for explicit approval. Do not begin the next phase until approval is received.
