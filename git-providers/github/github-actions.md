---
head:
  - - meta
    - name: description
      content: Coolify - How to use Github Actions to deploy to Coolify
  - - meta
    - name: keywords
      content: coolify self-hosting github github-actions docker kubernetes vercel netlify heroku render digitalocean aws gcp azure
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify - How to use Github Actions to deploy to Coolify
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://coolcdn.b-cdn.net/assets/coolify/github-actions-og-image.png
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
      content: https://coolcdn.b-cdn.net/assets/coolify/github-actions-og-image.png
---

# GitHub Actions

You can use Github Actions to build your image and deploy it to Coolify.

Here is an [example repository](https://github.com/andrasbacsai/github-actions-with-coolify) and a [workflow file](https://github.com/andrasbacsai/github-actions-with-coolify/blob/main/.github/workflows/build.yaml) that you can check how it works.

## Process Overview

1. You need to create a [Github Action workflow](https://github.com/andrasbacsai/github-actions-with-coolify/blob/main/.github/workflows/build.yaml) file in your repository.
2. You need to build your image and push it to a Docker registry. In the example, I use ghcr.io, but you can use any other registry.
3. You need to create a [Coolify API Token](../../api-authentication.md#generate-a-token) and add it to your Github repository secrets.
   - `COOLIFY_TOKEN` in the example.
4. In Coolify, you need to setup your deployment type. It could be a simple Dockerfile, Docker Compose or Docker Image based deployment.
5. Get the proper webhook endpoint from Coolify (Your resource / `Webhook` menu) and add it to your Github repository secrets.
   - `COOLIFY_WEBHOOK` in the example.
6. Need to send a GET request to that webhook endpoint (authenticated with the token) to trigger the deployment
   - Example: <span v-pre>`curl --request GET '${{ secrets.COOLIFY_WEBHOOK }}' --header 'Authorization: Bearer ${{ secrets.COOLIFY_TOKEN }}'`</span>
7. That's it! Now you can push to your repository and the deployment will be triggered automatically.
