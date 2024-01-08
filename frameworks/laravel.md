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
      content: https://coolcdn.b-cdn.net/assets/coolify/laravel-og-image.jpg
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
      content: https://coolcdn.b-cdn.net/assets/coolify/laravel-og-image.jpg
---

# Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling.

Example repository [here](https://github.com/coollabsio/coolify-examples/tree/laravel).

## Requirements

1. Set `Ports Exposes` field to `80`.
2. If you use `Nixpacks` buildpack, set the following environment variable:

```
NIXPACKS_PHP_ROOT_DIR=/app/public
```