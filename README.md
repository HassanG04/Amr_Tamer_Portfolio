# Amr Tamer — Finance & Data Portfolio

A responsive static portfolio built with HTML, CSS, and JavaScript. No build step or package installation is required.

## Public website / private documents

This repository publishes **summaries only**, as approved by the owner. CV, certificate scans, presentation PDFs, document previews, personal email, and phone number are not published. Visitors can request materials through [Amr's LinkedIn](https://www.linkedin.com/in/amr-tamer-ahmed/).

Original documents remain in the owner's local project folder. The files/ and Certificates/ folders, document screenshots, rendered previews, and extracted résumé text are excluded from both Git and Vercel uploads. Do not force-add these files or remove privacy exclusions without permission.

## Content and design

- js/data.js: public services, experience, project, and qualification summaries.
- index.html: USP introduction, biography, education, and LinkedIn contact.
- css/styles.css: responsive layouts, wine-red/black and red/white themes, and animations.
- css/summaries.css: editorial project graphics and qualification summary cards (not certificate replicas).
- js/app.js: navigation, theme preference, unified sound controls, and the two-slide 365 Financial Analyst carousel.
- images/profile.jpeg: supplied portrait.
- sounds/: local interface cues; there is no ambience.

The theme follows the system initially and remembers a visitor's selection. Sounds start muted for new visitors and are optional. The sound button mutes every cue, including any already playing; browser interaction rules still apply. Reduced-motion preferences are respected.

Activity order: 365 Financial Analyst → DEPI → McKinsey.org Forward. Projects are attributed as collaborative research studies, not client investment results. No testimonials or returns have been invented.

## Preview and deploy

Run a static web server in this directory, for example `python -m http.server 4186 --bind 127.0.0.1`, then visit http://127.0.0.1:4186/.

Repository: https://github.com/HassanG04/Mr_Amr_Portfolio

Vercel project: mr-amr-portfolio. Framework: Other. No build command. The root folder is served directly. Environment files and local Vercel metadata are excluded from Git.

The local preview server is for the owner's computer only; public deployment must retain .vercelignore so private local files are not uploaded.
