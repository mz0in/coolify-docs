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
# Build Server 

:::warning
This is an experimental feature.
:::

You could have a build server to build your projects on instead of building them on the server where you host your resources.

This keeps the load separated, so it does not affect your application's performance.

## Requirements
- The built images needs to be pushed to a container registry.
- The server needs to be authenticated to the container registry. See [this](../docker/registry.md) for more information.
- The server needs to have access to the source code.
- The server needs Docker Engine installed.

If you have more than one build server, the used server will be chosen randomly.

## How to use
1. Add a new server to Coolify.
2. Enable the `Build Server` feature while creating a new resource.

After this, Coolify will use this server to build your resources, in case you enabled the `Build Server` feature for them.

## How to set a build server for a resource
1. Create or go to a resource that you want to use a build server for.
2. Enable the `Build Server` feature on the `General` tab, `Build` section.
3. Make sure you set up a container registry for the resource.