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

# Deploy Webhook

:::tip
The URL for each resource could be found on the `Webhooks` menu on the resource page.
:::

GET `<instanceUrl>/api/v1/deploy?uuid=<resourceUuid>&force=false`

Example: `https://app.coolify.io/api/v1/deploy?uuid=hg04w48&force=false`

```bash
curl -H "Authorization: Bearer 4|bBx6dwcuY4IL05SxDvUjfFs547vOgZOJTx3Fp95rd76ff2dc" https://app.coolify.io/api/v1/deploy?uuid=hg04w48
```

## Query Parameters

- `uuid`: Could be found in the URL of the resource page.
- `force`: If set to `true`, the deployment won't use cache. Default is `false`.
