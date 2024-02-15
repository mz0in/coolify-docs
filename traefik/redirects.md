---
head:
  - - meta
    - name: description
      content: Coolify - Redirects with Traefik
  - - meta
    - name: keywords
      content: coolify self-hosting github github-actions docker kubernetes vercel netlify heroku render digitalocean aws gcp azure redirects traefik
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify - Redirects with Traefik
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://coolcdn.b-cdn.net/assets/coolify/redirects-og-image.png
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
      content: https://coolcdn.b-cdn.net/assets/coolify/redirects-og-image.png
---

# Redirects with Traefik

This guide will help you to configure redirects in Coolify with Traefik.

The configuration is slightly different for `Standard Applications` and `Docker Compose` based applications/one-click services.

## Standard Applications
- You need to set both FQDNs for your resource, so for example: `coolify.io,www.coolify.io`
- Add a unique middleware to your resource.

### www -> non-www
```bash{4,8-10}
# A similar line is already defined.
traefik.http.routers.<unique_router_name>.rule=Host(`www.coolify.io`) && PathPrefix(`/`)
# You need to add the middleware to the router.
traefik.http.routers.<unique_router_name>.middlewares=example-middleware
# If you have multiple middlewares, you need to add them comma separated.
# traefik.http.routers.<unique_router_name>.middlewares=gzip,example-middleware
#
traefik.http.middlewares.example-middleware.redirectregex.regex=^(http|https)://www\.(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=$${1}://$${2}
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```

### non-www -> www
```bash{4,8-10}
# A similar line is already defined.
traefik.http.routers.<unique_router_name>.rule=Host(`coolify.io`) && PathPrefix(`/`)
# You need to add the middleware to the router.
traefik.http.routers.<unique_router_name>.middlewares=example-middleware
# If you have multiple middlewares, you need to add them comma separated.
# traefik.http.routers.<unique_router_name>.middlewares=gzip,example-middleware
#
traefik.http.middlewares.example-middleware.redirectregex.regex=^(http|https)://(?:www\.)?(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=$${1}://www.$${2}
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```

## Docker Compose based Applications & one-click Services
- You need to set both FQDNs for your resource, so for example: `coolify.io,www.coolify.io`
- You only need add the middleware to the router.

### www -> non-www
```bash
traefik.http.middlewares.example-middleware.redirectregex.regex=^(http|https)://www\.(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=$${1}://$${2}
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```

### non-www -> www
```bash
traefik.http.middlewares.example-middleware.redirectregex.regex=^(http|https)://(?:www\.)?(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=$${1}://www.$${2}
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```
