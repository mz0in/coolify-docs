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
      content: '@coolifyio'
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
# Frequently Asked Questions

Here you can find answers to the most common questions, errors and problems.

## Permission denied (publickey)

Example: `Server is not reachable. Reason: root@host.docker.internal: Permission denied (publickey).`

Your Coolify instance cannot reach the server it is running on. During installation, a public key is generated to `/data/coolify/ssh/keys/id.root@host.docker.internal.pub` and automatically added to `~/.ssh/authorized_keys`.

If it is not added, you can add it manually by running the following command on your server:

```bash
cat /data/coolify/ssh/keys/id.root@host.docker.internal.pub >> ~/.ssh/authorized_keys
```

## Cloudflare Proxy activated but application is not reachable
You need to set your SSL/TLS configuration to at least `Full` in your Cloudflare dashboard.

Documentation: https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/


## Prisma cannot connect to local database
If you are using `Nixpacks`, you need to set the database to public to be able to reach it during the build process.
If you are using `Dockerfile` or `Docker Compose`, it should work.
