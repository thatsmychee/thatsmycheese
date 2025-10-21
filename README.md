# Minimal Landing Starter

A clean, responsive landing page with:
- Fixed header + accessible mobile menu
- Hero section with gradient/image overlay
- Email capture form (client-side; Netlify-ready)
- Sections for Work/About/Contact
- Zero dependencies (HTML + CSS + JS)

## Quick start

1) Open the folder in VS Code.
2) Drop a background image at `assets/hero.jpg` (optional).
3) Open `index.html` in a browser to preview.

## Deploy (Vercel)

- Create a new project in Vercel and import this folder (or push to GitHub and import).
- Framework preset: **Other** (pure HTML). Output dir: `/`.
- Connect your domain in **Settings → Domains** and add your DNS records at your registrar.

## Deploy (Netlify)

- Drag-and-drop this folder into the Netlify app **or** run `netlify deploy` with the CLI.
- To capture emails without a custom backend, keep `data-netlify="true"` + `form-name` attributes on the form.

## Customize

- Edit colors in `:root` (see `--accent`, `--bg`, etc.) inside `styles.css`.
- Replace text in the hero and sections.
- Add your own pages/sections and update the nav links.

## Notes

- The email form is front-end only. For production, connect Netlify Forms, a serverless function, or a tool like Mailchimp/ConvertKit.
- Accessibility: semantic HTML, proper labels, and reduced motion support.
