---
head:
  - - meta
    - name: description
      content: Coolify - Dynamic Configs with Traefik
  - - meta
    - name: keywords
      content: coolify self-hosting github github-actions docker kubernetes vercel netlify heroku render digitalocean aws gcp azure dynamic configuration traefik
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify - Dynamic Configs with Traefik
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://coolcdn.b-cdn.net/assets/coolify/dynamic-traefik-config-og-image.png
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
      content: https://coolcdn.b-cdn.net/assets/coolify/dynamic-traefik-config-og-image.png
---

# Dynamic Configs with Traefik

This guide will help you to configure dynamic configurations in Coolify & Traefik.

All configurations should be saved in `/data/coolify/proxy/dynamic/` directory. Traefik will automatically detect the changes and apply them.

For example, if you want to loadbalance your application between two docker containers, you can create a file named `loadbalancer.yml` in `/data/coolify/proxy/dynamic/` directory.

```yaml
http:
  middlewares:
    redirect-to-https:
      redirectscheme:
        scheme: https
    gzip:
      compress: true
  routers:
    lb-http:
      middlewares:
        - gzip
      entryPoints:
        - http
      service: lb-http
      rule: Host(`lb.127.0.0.1.sslip.io`)
  services:
    lb-http:
      loadBalancer:
        servers:
          - url: 'http://c400co8:3000'
          - url: 'http://fgssgsk:3000'
```

Or the same with `https`:

```yaml
http:
  middlewares:
    redirect-to-https:
      redirectscheme:
        scheme: https
    gzip:
      compress: true
  routers:
    lb-https:
      tls:
        certResolver: letsencrypt
      middlewares:
        - gzip
      entryPoints:
        - https
      service: lb-https
      rule: Host(`lb.127.0.0.1.sslip.io`)
    lb-http:
      middlewares:
        - redirect-to-https
      entryPoints:
        - http
      service: noop
      rule: Host(`lb.127.0.0.1.sslip.io`)
  services:
    lb-https:
      loadBalancer:
        servers:
          - url: 'http://c400co8:3000'
          - url: 'http://fgssgsk:3000'
    noop:
      loadBalancer:
        servers:
          - url: ''
```

- `c400co8` and `fgssgsk` are the names of the docker containers (you can find the UUID's by opening the resources in Coolify and check the URL).
- `lb.127.0.0.1.sslip.io` is the domain name of the loadbalancer. You can change it to whatever you want.
- `letsencrypt` is configured by default by Coolify.