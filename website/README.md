# Hopes Horizon — Charity Website

A simple, fast, static website for the **Hopes Horizon** charity. No build step, no
dependencies — just plain HTML, CSS, and a little JavaScript.

## Files

| File          | Purpose                                              |
|---------------|------------------------------------------------------|
| `index.html`  | The home page (all content lives here).              |
| `styles.css`  | All styling. Colors/fonts are set at the top.        |
| `script.js`   | Mobile menu toggle + auto-updating footer year.      |

## Viewing it locally

Just double-click `index.html` — it opens in your browser. No server needed.

## Editing common things

- **Charity name / text** — open `index.html` and edit the wording directly.
- **Colors** — open `styles.css` and change the values under `:root` at the top
  (`--brand`, `--accent`, etc.).
- **Donate button** — in `index.html`, find `id="donate"` and replace the
  `href="#"` with your real donation link (PayPal, Stripe, bank page, etc.).
- **Contact email** — search `index.html` for `hello@hopeshorizon.org`.
- **Impact numbers** — edit the values inside the `id="impact"` section.

## Swapping in real photos

The hero uses a faint **community illustration** (`images/community.svg`) as a
transparent background. To use your own community photos instead:

1. Drop your photo into the `images/` folder (e.g. `images/community.jpg`).
2. In `styles.css`, find the `.hero` rule and change the line
   `url("images/community.svg") ...` to `url("images/community.jpg") ...`.
3. Adjust the two `rgba(...,.80)`/`.92` opacity values in that same `background`
   block to make the photo lighter (higher numbers) or stronger (lower numbers)
   so your hero text stays readable.

Tip: use a wide, low-detail photo (1600px+ wide) for the cleanest result.

## Putting it on your domain

After you buy a domain, pick any of these (all support custom domains for free or cheap):

### Option A — Cloudflare Pages / Netlify (easiest, free)
1. Create a free account at [Cloudflare Pages](https://pages.cloudflare.com) or
   [Netlify](https://netlify.com).
2. Drag-and-drop this whole folder into their dashboard.
3. In the site settings, add your custom domain and follow the DNS instructions.

### Option B — Traditional shared hosting (cPanel / FTP)
1. Connect to your host via FTP (e.g. FileZilla) or the host's File Manager.
2. Upload `index.html`, `styles.css`, and `script.js` into the `public_html`
   (or `www`) folder.
3. Point your domain's DNS to the host (your provider gives you the details).

That's it — `index.html` is automatically served as the home page.
