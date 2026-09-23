# Amr Tamer — Finance & Data Portfolio

A responsive static portfolio built with HTML, CSS, and JavaScript. No build step or package installation is required.

## Public website / private documents

This repository publishes work summaries, the five approved certificate images (365, DEPI, McKinsey, and Dreem), and three approved presentation cover images (Arabian Cement, Elsewedy, and WE). The owner-supplied public Google Drive links open the CV and three presentations directly. Original CV, presentation PDFs, certificate PDFs, résumé previews, personal email, and phone number are not uploaded to this repository or Vercel.

Original PDFs remain in the owner's local project folder. The files/ and Certificates/ folders, rendered PDF previews, and extracted résumé text are excluded from both Git and Vercel uploads. Only the seven named PNG images are allowed through the image exclusions. Do not force-add other files or remove privacy exclusions without permission.

## Content and design

- js/data.js: public services, experience, project, and qualification summaries.
- index.html: USP introduction, biography, education, and LinkedIn contact.
- css/styles.css: responsive layouts, wine-red/black and red/white themes, and animations.
- css/summaries.css: responsive presentation covers and flippable teammate ID cards.
- css/motion.css: toolkit glows, idle float and shine, shared hover motion, and certificate transitions.
- js/app.js: navigation, theme preference, interaction sounds, and the two-slide 365 Financial Analyst carousel.
- images/profile.jpeg: supplied portrait.
- sounds/: local interface cues; there is no ambience.

The theme follows the system initially and remembers a visitor's selection. Interface sound cues remain active without a separate sound button; browser autoplay rules and device mute settings still apply. Reduced-motion preferences are respected. Idle card animations pause outside the viewport or when the page is hidden. The 365 carousel moves the full photograph and description together and supports arrows, keyboard navigation, and swipes. Clicking a certificate opens only its approved image in an on-site viewer.

Activity order: 365 Financial Analyst → DEPI → McKinsey.org Forward → Dreem. Projects are attributed as collaborative research studies, not client investment results. Each project card links to its presentation and flips to reveal teammate LinkedIn ID cards. A five-second hint appears when the selected-work cards enter view. No testimonials or returns have been invented.

## Preview and deploy

Run a static web server in this directory, for example `python -m http.server 4186 --bind 127.0.0.1`, then visit http://127.0.0.1:4186/.

Repository: https://github.com/HassanG04/Amr_Tamer_Portfolio

Vercel project: amr-tamer-portfolio. Framework: Other. No build command. The root folder is served directly. Environment files and local Vercel metadata are excluded from Git.

Live website: https://amr-tamer-ahmed.vercel.app/ (the shorter amr-tamer-portfolio.vercel.app address was unavailable.)

Deploy with Vercel CLI from this folder. Automatic GitHub-triggered deployment still requires a GitHub Login Connection in the Vercel account.

The local preview server is for the owner's computer only; public deployment must retain .vercelignore so private local files are not uploaded.
