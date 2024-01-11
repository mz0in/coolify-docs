---
head:
  - - meta
    - name: description
      content: Coolify Documentation for Laravel deployment
  - - meta
    - name: keywords
      content: coolify self-hosting laravel php docker kubernetes vercel netlify heroku render digitalocean aws gcp azure nixpacks
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify Documentation for Laravel deployment
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://coolcdn.b-cdn.net/assets/coolify/laravel-og-image.png
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
      content: https://coolcdn.b-cdn.net/assets/coolify/laravel-og-image.png
---

# Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling.

Example repository [here](https://github.com/coollabsio/coolify-examples/tree/laravel).

## Requirements

All you need to do is to set `Ports Exposes` field to `80`.

:::tip
If you configured your application before version beta.184 and set the `NIXPACKS_PHP_ROOT_DIR` and `NIXPACKS_PHP_FALLBACK_PATH` environment variables, you need to remove them.
:::