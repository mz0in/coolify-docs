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

## WWW <-> Non-WWW
You can redirect your `www` to `non-www` or vice versa with Traefik. 

1. You need to set both FQDNs for your resource, so for example: `coolify.io,www.coolify.io`

2. Add a unique middleware to your resource. 
  
### http www->non-www
```bash{4,6-8}
# A similar line is already defined.
traefik.http.routers.<unique_router_name>.rule=Host(`www.coolify.io`) && PathPrefix(`/`)
# You need to add these lines
traefik.http.routers.<unique_router_name>.middlewares=example-middleware
# Replace http:// with https:// if you want to redirect to https
traefik.http.middlewares.example-middleware.redirectregex.regex=^http://www\.(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=http://$1
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```

### http non-www->www
```bash{4,6-8}
# A similar line is already defined.
traefik.http.routers.<unique_router_name>.rule=Host(`coolify.io`) && PathPrefix(`/`)
# You need to add these lines
traefik.http.routers.<unique_router_name>.middlewares=example-middleware
# Replace http:// with https:// if you want to redirect to https
traefik.http.middlewares.example-middleware.redirectregex.regex=^http://(?:www\.)?(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=http://www.$${1}
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```

### https www->non-www
```bash{4,6-8}
# A similar line is already defined.
traefik.http.routers.<unique_router_name>.rule=Host(`www.coolify.io`) && PathPrefix(`/`)
# You need to add these lines
traefik.http.routers.<unique_router_name>.middlewares=example-middleware
# Replace http:// with https:// if you want to redirect to https
traefik.http.middlewares.example-middleware.redirectregex.regex=^https://www\.(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=https://$1
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```

### https non-www->www
```bash{4,6-8}
# A similar line is already defined.
traefik.http.routers.<unique_router_name>.rule=Host(`coolify.io`) && PathPrefix(`/`)
# You need to add these lines
traefik.http.routers.<unique_router_name>.middlewares=example-middleware
# Replace http:// with https:// if you want to redirect to https
traefik.http.middlewares.example-middleware.redirectregex.regex=^https://(?:www\.)?(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=https://www.$${1}
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```