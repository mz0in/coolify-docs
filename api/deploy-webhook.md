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

# Deploy Webhooks


GET `<instanceUrl>/api/v1/deploy?uuid=<UUID>&force=false`

GET `<instanceUrl>/api/v1/deploy?tag=<tag_name>&force=false`

:::tip
`uuid` can be a list of comma-separated UUIDs, e.g. `uuid=uuid1,uuid2,uuid3`.

`tag` can be a list of comma-separated tags, e.g. `tag=tag1,tag2,tag2`.
:::

## Examples

With `uuid`:
- `<instanceUrl>/api/v1/deploy?uuid=hg04w48&force=false`
- `<instanceUrl>/api/v1/deploy?uuid=hg04w48,hjh43ig,23iigj4,uh4238f&force=false`
  
With `tag`:
- `<instanceUrl>/api/v1/deploy?tag=tag1&force=false`
- `<instanceUrl>/api/v1/deploy?tag=tag1,tag2,tag3&force=false`

Curl:

```bash
# With UUID
curl -H "Authorization: Bearer <token>" https://app.coolify.io/api/v1/deploy?uuid=hg04w48
curl -H "Authorization: Bearer <token>" https://app.coolify.io/api/v1/deploy?uuid=hg04w48,hjh43ig,23iigj4,uh4238f

# With Tag
curl -H "Authorization: Bearer <token>" https://app.coolify.io/api/v1/deploy?tag=api
curl -H "Authorization: Bearer <token>" https://app.coolify.io/api/v1/deploy?tag=api,web
```

## Query Parameters
You could deploy by `uuid` or by `tag`;

- `uuid`: The UUID of the resource(s) you want to deploy. 
- `tag`: The name of the tag(s) you want to deploy.
- `force`: If set to `true`, the deployment won't use cache. Default is `false`.
