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


## Cannot connect to database during build phase
Some applications / libraries (Prisma) need to connect to the database during the build phase, to run migrations for example.

### Nixpacks
To do so, you need to set the database to public. You can do so by going to your database and clicking on `Accessible over the internet`.

## Other
Other build packs could reach database internally - if they are placed in the same network. You can check this by going to the `Server` tab on both resources and check if they are in the same network and server.

