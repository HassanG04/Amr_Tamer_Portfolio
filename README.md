# Amr Tamer — Finance & Data Portfolio

A responsive static portfolio built with HTML, CSS, and JavaScript. No build step or package installation is required.

## Public website / private documents

This repository publishes work summaries and the four explicitly approved certificate images: images/1.png, images/2.png, images/DEPI.png, and images/McKinsey.png. CV, presentation PDFs, certificate PDFs, résumé previews, personal email, and phone number are not published. Visitors can request those materials through [Amr's LinkedIn](https://www.linkedin.com/in/amr-tamer-ahmed/).

Original PDFs remain in the owner's local project folder. The files/ and Certificates/ folders, rendered PDF previews, and extracted résumé text are excluded from both Git and Vercel uploads. Only the four named PNG images are allowed through the image exclusions. Do not force-add other files or remove privacy exclusions without permission.

## Content and design

- js/data.js: public services, experience, project, and qualification summaries.
- index.html: USP introduction, biography, education, and LinkedIn contact.
- css/styles.css: responsive layouts, wine-red/black and red/white themes, and animations.
- css/summaries.css: editorial project graphics.
- css/motion.css: toolkit glows, idle float and shine, shared hover motion, and certificate transitions.
- js/app.js: navigation, theme preference, unified sound controls, and the two-slide 365 Financial Analyst carousel.
- images/profile.jpeg: supplied portrait.
- sounds/: local interface cues; there is no ambience.

The theme follows the system initially and remembers a visitor's selection. Sounds start muted for new visitors and are optional. The sound button mutes every cue, including any already playing; browser interaction rules still apply. Reduced-motion preferences are respected. Idle card animations pause outside the viewport or when the page is hidden. The 365 carousel moves the full photograph and description together and supports arrows, keyboard navigation, and swipes. Clicking a certificate opens only its approved image in an on-site viewer.

Activity order: 365 Financial Analyst → DEPI → McKinsey.org Forward. Projects are attributed as collaborative research studies, not client investment results. No testimonials or returns have been invented.

## Preview and deploy

Run a static web server in this directory, for example `python -m http.server 4186 --bind 127.0.0.1`, then visit http://127.0.0.1:4186/.

Repository: https://github.com/HassanG04/Mr_Amr_Portfolio

Vercel project: mr-amr-portfolio. Framework: Other. No build command. The root folder is served directly. Environment files and local Vercel metadata are excluded from Git.

Live website: https://mr-amr-portfolio.vercel.app/

Deploy with Vercel CLI from this folder. Automatic GitHub-triggered deployment still requires a GitHub Login Connection in the Vercel account.

The local preview server is for the owner's computer only; public deployment must retain .vercelignore so private local files are not uploaded.
