# How to Contribute

Anyone can add their own page to this site — no coding experience needed!

## Quick steps

1. **Fork** this repository on GitHub (click the Fork button).
2. **Create a folder** inside `contributions/` named after you, using only lowercase letters, numbers, and hyphens. Example: `contributions/cool-cat/`
3. **Add exactly two files** inside your folder:
   - `page.html` — your page content
   - `meta.json` — your info (see below)
4. **Open a Pull Request** back to this repo.
5. If everything looks good, your PR is **automatically merged** and your page goes live in about a minute!

## Your meta.json

```json
{
  "name": "cool-cat",
  "location": "Austin, TX"
}
```

- `name` (required) — must match your folder name exactly.
- `location` (optional) — any place name as text, e.g. `"Tokyo, Japan"`. If provided, you get a pin on the map!

## What you can put in page.html

- Headings, paragraphs, lists, tables
- Images using **data URIs** only (no links to external websites)
- Basic HTML formatting (`<b>`, `<i>`, `<em>`, etc.)

## What is NOT allowed

- JavaScript (`<script>`, click handlers, etc.)
- External links or resources (no `https://` images, fonts, or stylesheets)
- `<iframe>`, `<style>` blocks, `<object>`, `<embed>`
- Files other than `page.html` and `meta.json`
- More than **20 KB** total for your folder

## Tips

- Pick a **unique folder name** — if someone already used it, choose another.
- One person per PR — only change your own folder.
- Keep it friendly! Inappropriate content may be removed.

## Need help?

Open an issue on GitHub or check the main [README](README.md) for more details.

Happy building!
