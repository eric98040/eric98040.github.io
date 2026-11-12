# jaewon.work

Personal website of Jaewon Kim. Plain HTML/CSS, no build step.
Layout adapted from [etoilekim.github.io](https://etoilekim.github.io/) (built on Scholarly, MIT License).

## Editing

| What | File |
| --- | --- |
| Home intro, research directions, selected papers | `index.html` |
| Publication entries | `publications/index.html` |
| CV | replace `assets/pdf/CV_Jaewon_Kim.pdf` (same name) |
| Photo and figures | `assets/img/` |
| Design | `assets/css/site.css` |

The header and footer are repeated in each HTML file; edit all three when changing them.

## Deploy

Push to `main`. `.github/workflows/deploy.yml` copies the site to the `gh-pages` branch,
which GitHub Pages serves at https://jaewon.work.

Preview locally: `python3 -m http.server` and open http://localhost:8000.
