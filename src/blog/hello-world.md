---
title: Hello, World
date: 2026-08-02
description: A template post demonstrating common blog elements — headings, prose, code, quotes, and lists.
---

Welcome! This is your first blog post. It serves as a template you can copy and iterate on. Edit the front matter above (title, date, description) and replace the body below with your own content.

## Getting started

This paragraph is regular body prose. It renders using the `.prose` styles which set comfortable reading defaults: a readable line length, balanced leading, and sensible margins between elements.

You can link to things like this: [11ty documentation](https://www.11ty.dev/docs/) opens in the same tab. Links inside prose are underlined and inherit the accent colour.

### A smaller heading

Use `h3` (`###`) for sub-sections within a section. Avoid skipping heading levels — it helps screen readers navigate the page.

## Code examples

Inline code like `const greeting = "hello"` sits naturally in a sentence.

Fenced code blocks use triple backticks with an optional language hint:

```js
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

```css
.post {
  max-inline-size: 65ch;
  margin-inline: auto;
}
```

## Blockquotes

> The details are not the details. They make the design.
>
> — Charles Eames

## Lists

An unordered list:

- Modern CSS: custom properties, `@layer`, container queries
- Fast builds with 11ty
- Deployed to Cloudflare Pages

An ordered list:

1. Write post in Markdown
2. Run `npm run dev`
3. Iterate until happy
4. Commit and push — Cloudflare Pages builds and deploys automatically

## Images

Add images by placing them in the `src/img/` directory and referencing them:

```md
![A descriptive alt text](/img/example.jpg)
```

---

That covers the common elements. Delete everything below the front matter dashes and start writing!
