---
head:
  - - meta
    - name: description
      content: Coolify Documentation
  - - meta
    - name: keywords
      content: coolify self-hosting docker kubernetes vercel netlify heroku render digitalocean aws gcp azure
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify Documentation
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://cdn.coollabs.io/assets/coolify/og-image-docs.png
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
      content: https://cdn.coollabs.io/assets/coolify/og-image-docs.png
---

# Authentication

API request requires a `Bearer` token in `Authorization` header, which could be generated from the UI.

## Generate a Token

Go to `Security` menu -> `API tokens`.

Define a name for your token and click `Create New Token`.

You will see the token once, so make sure to copy it and store it in a safe place.

### Scope

Tokens are scoped for your currently active Team. If you switch to another team, you will see the tokens for that team only.

## Revoking a Token

Go to `Security` menu -> API tokens and simple click `Revoke` button for the token you want to revoke.