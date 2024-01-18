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

# Monitoring

Coolify has a built-in monitoring system, which can be used to monitor your resources and send notifications to your team if something goes wrong.

Currently Coolify monitors the following resources:

- Disk usage - If your disk usage is above the configured threshold, it does an automatic cleanup.
- If any of your containers are stopped or restarted.
- Backup status.

## Notifications
You can set up several types of notifications. Each team could have different notification settings.

### Email

Email notifications requires you to set up an SMTP server or supported service (Resend).

#### System Wide (transactional)

If you self-host Coolify, you can set up a system-wide SMTP server in the **Settings** menu.

#### Team Wide

To setup notifications, go to the **Team** tab and click on **Notifications** and then **Email**.

If you have a System Wide Email settings, you can enable to use it for the team. Otherwise, you can set up a custom SMTP server/Resend for the team.

### Telegram

You need to create a bot token on Telegram. You can do that by talking to the [BotFather](https://t.me/botfather).

More information on how to create a bot token can be found [here](https://core.telegram.org/bots/tutorial).

> You can add your new bot to a group chat, so you can share these notifications with your team.

### Discord

You only need to add a Discord webhook endpoint to receive notifications.

More information on how to create a webhook can be found [here](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).

### Events

You can subscribe to the following events:

- Container Status Changed (Stopped, Started, Restarted).
- Application Deployments (Finished, Failed).
- Backup Status (Finished, Failed).
