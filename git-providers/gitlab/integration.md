---
head:
  - - meta
    - name: description
      content: Coolify Documentation - GitLab Integration
  - - meta
    - name: keywords
      content: coolify self-hosting docker kubernetes vercel netlify heroku render digitalocean aws gcp azure gitlab
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify Documentation - GitLab Integration
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://coolcdn.b-cdn.net/assets/coolify/gitlab-integration-og-image.png
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
      content: https://coolcdn.b-cdn.net/assets/coolify/gitlab-integration-og-image.png
---

# GitLab Integration

This guide will show you how to use GitLab based repositories with Coolify.

## Public Repositories

You can use public repositories without any additional setup.
1. Select the `Public repository` option in the Coolify when you create a new resource.
2. Add your repository URL to the input field, for example: `https://gitlab.com/andrasbacsai/nodejs-example`
:::tip
You can only use the https URL.
::: 
3. That's it! Coolify will automatically pull the latest version of your repository and deploy it.

## Private Repositories
Private repositories require a few more steps to setup.
1. Add a private key (aka `Deploy Keys`) to Coolify and to your GitLab repository in the `Settings` / `Repository` / `Deploy Keys` menu.
:::tip
- You can generate a new key pair with the following command: `ssh-keygen -t rsa -b 4096 -C "
- Or you can also use Coolify to generate a new key for you in the `Security` menu.
:::
2. Create a new resource and select the `Private Repository (with deploy key)`
3. Add your repository URL to the input field, for example: `git@gitlab.com:andrasbacsai/nodejs-example.git`
:::tip
You need to use the SSH URL, so the one that starts with `git@`.
:::
4. That's it! Coolify will automatically pull the latest version of your repository and deploy it.

## Automatic commit deployments with webhooks (Optional)
You can add a custom webhook URL to your GitLab repository to trigger a new deployment when you push to your repository.

In your resource, there is a `Webhooks` menu. In the `Manual Git Webhooks` section, you can find the URL what you need to set in your GitLab repository.

1. Set a secret key in the `GitLab Webhook Secret` input field.
2. Go to your repository in GitLab and open the `Settings` / `Webhooks` menu.
3. Add the URL from Coolify to the `URL` input field and the secret token.
4. Select the `Push events` option.
5. That's it! Now when you push to your repository, GitLab will send a webhook request to Coolify and it will trigger a new deployment.

## Merge request deployments with webhooks (Optional)
You can add a custom webhook URL to your GitLab repository to trigger a new deployment when you create a new merge request.

The process is the same as the previous one, but you need to select the `Merge request events` option in the `Settings` / `Webhooks` menu.