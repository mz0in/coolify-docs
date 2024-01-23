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
# Environment Variables

You can define environment variables for your resources, and they will be available in your application.

> Preview Deployments could have different environment variables, so you can test your application as a staging environment for example.

## Build Time Variables

If you would like to set environment variables for the build process, you can do by setting `Build Variable` on the UI.


## Shared Variables

You could have 3 types of shared variables:
1. Team Based
2. Project Based
3. Environment Based (production, staging, etc.)

You can set shared variables on their respective pages.

Then you can use these variables anywhere. For example: You defined `NODE_ENV` to `production`.

### Team Based

You can set them on the `Team` page and use it with <span v-pre>`{{team.NODE_ENV}}`</span>.

### Project Based

You can set them on the `Projects` page, under the gear icon and use it with <span v-pre>`{{project.NODE_ENV}}`</span>.

### Environment Based

You can set them on the `Environments` page (select a `Project`), under the gear icon and use it with <span v-pre>`{{environment.NODE_ENV}}`</span>.


## Predefined Variables

Coolify predefines some variables for you, so you can use them in your application. All you need to do is to add an environment variable like this to your application.

```bash
# For example, you can use this variable in your application
MY_VARIABLE=$SOURCE_COMMIT
# You will have the commit hash of the source code in your application as an environment variable in MY_VARIABLE
```

### `SOURCE_COMMIT`
Commit hash of the source code.