---
head:
  - - meta
    - name: description
      content: Coolify Documentation for SvelteKit deployment
  - - meta
    - name: keywords
      content: coolify self-hosting svelte sveltekit docker kubernetes vercel netlify heroku render digitalocean aws gcp azure
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify Documentation for SvelteKit deployment
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://coolcdn.b-cdn.net/assets/coolify/sveltekit-og-image.png
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://coolify.io
  - - meta
    - property: og:title
      content: Coolify
  - - meta
    - property: og:description
      content: Self-hosting with superpowers.
  - - meta
    - property: og:site_name
      content: Coolify
  - - meta
    - property: og:image
      content: https://coolcdn.b-cdn.net/assets/coolify/sveltekit-og-image.png
---

# SvelteKit

Svelte Kit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.

Example repository [here](https://github.com/coollabsio/coolify-examples/tree/sveltekit).

## Static build (`adapter-static`)

You need to use `@sveltejs/adapter-static` ([docs](https://kit.svelte.dev/docs/adapter-static)) adapter to build a static site.

1. Set your site to static `on` (under `Build Pack` section).
2. Set your `Publish Directory` to `/build`

## Node server (`adapter-node`)
You need to use `@sveltejs/adapter-node` ([docs](https://kit.svelte.dev/docs/adapter-node)) adapter to build a node server based SvelteKit app.

1. Set your site to static to `off` (under `Build Pack` section).
2. Set your `Start Command` to `node build`.