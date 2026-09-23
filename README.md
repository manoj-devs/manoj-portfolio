# Manoj Personal Portfolio

Personal developer portfolio for Manoj M.

## Structure

- `public/index.html` — portfolio page
- `public/styles.css` — responsive styling
- `public/app.js` — navigation, animations, project case-study modal
- `public/resume.html` — print/PDF-friendly resume source
- `api/resume.js` — Hatchable endpoint that renders `resume.html` as a PDF

## Current stack

- HTML
- CSS
- Vanilla JavaScript
- Hatchable public static files + API endpoint

## Run locally

For the portfolio UI, serve the `public` directory with any static HTTP server.

```bash
cd public
python -m http.server 8000
```

Then open `http://localhost:8000`.

The `/api/resume` endpoint is Hatchable-specific. If you run locally, open `resume.html` directly or use a local PDF renderer.

## Updating the portfolio

Edit the files under `public/`.

- Main content: `public/index.html`
- Styling: `public/styles.css`
- Interactions: `public/app.js`
- Resume: `public/resume.html`

Keep `api/resume.js` when deploying the project to Hatchable if you want the Resume button to generate a PDF.

## Profile links

- GitHub: https://github.com/manoj-devs
- LinkedIn: https://www.linkedin.com/in/manojcse123/
- LeetCode: https://leetcode.com/u/Manoj_04102007/
