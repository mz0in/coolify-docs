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
# Firewall

For self-hosting Coolify, you need to allow some ports on your firewall.

- For Coolify: `8000` (http), `6001` (websocket) and `22` (or a custom port) (required)
- Reverse Proxy: `80, 443` (optional)

:::warning 
If you are using `Oracle Cloud Free ARM Server`, you need to allow these ports inside Oracle's Dashboard, otherwise you cannot reach your instance from the internet after installation.
:::

- For GitHub integration, check [this](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses).
  

### Coolify Cloud
If you need the public facing IPs to allow inbound connections to your servers, please [contact us](/contact.md).
