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
# Coolify


## What is Coolify?
Coolify is an all-in one PaaS that helps you to self-host your own applications, databases or services (like Wordpress, Plausible Analytics, Ghost) without managing your servers, also known as an open-source & self-hostable Heroku / Netlify / Vercel alternative.

Looking for the hosted cloud & paid version? [Here you go.](https://app.coolify.io)

## Features
- **BYOS:** You can use your own server from any cloud provider or even set up your own server at home as long as you have SSH access.
- **Push to Deploy:** Today, Git integration is the standard. We offer integration with hosted platforms such as GitHub, GitLab, Bitbucket, Gitea and more (even self-hosted).
- **No Vendor Lock-in:** You have full ownership of your data. All configurations are stored on your own servers, allowing you to manage your deployed resources even if you choose to stop using Coolify (oh nooo).
- **Server Automations:** After connecting your server, Coolify will take over management and handle various administrative tasks for you.
- **Monitoring:** Coolify will monitor your set servers and deployed resources automatically. It will alert you through your preferred channels such as Discord, Telegram, and email.
- **Multiple Deployment Endpoints:** You can deploy your resources to a single server, multiple servers, or Docker Swarm clusters seamlessly, based on your needs. (Kubernetes support is coming soon!)
- **Automatic Backups:** Your databases are automatically backed up to any S3 compatible solution. If an issue arises, you can effortlessly restore your data with just a few clicks.
- **Powerful API:** Programmatically deploy, query, and manage your servers and resources. Integrate with your CI/CD pipelines or build your own custom integrations, with Github Actions, Gitlab CI, Bitbucket Pipelines, or basically any CI/CD tool.
- **Pull request Deployments:** Automagically deploy new commits and pull requests separately to quickly review contributions and speed up your teamwork!

