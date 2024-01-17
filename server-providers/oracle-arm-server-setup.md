---
head:
  - - meta
    - name: description
      content: Coolify - Oracle ARM Setup
  - - meta
    - name: keywords
      content: coolify self-hosting github github-actions docker kubernetes vercel netlify heroku render digitalocean aws gcp azure oracle arm free
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify - Oracle ARM Setup
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://coolcdn.b-cdn.net/assets/coolify/oracle-arm-og-image.png
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
      content: https://coolcdn.b-cdn.net/assets/coolify/oracle-arm-og-image.png
---

# Oracle ARM Server Setup

If you are using `Oracle Cloud free ARM server`, you need to do a few extra steps to use it in Coolify, as a Coolify instance or just a remote server.

## Setup Root User
By default, you can't login as root user. You need to do the following steps to enable root user.

1. Switch to root user `sudo su -`
2. Edit `/etc/ssh/sshd_config` and change `PermitRootLogin` to `without-password`.
3. Restart ssh service `service sshd restart`
4. Add a public key to `/root/.ssh/authorized_keys` file which is also defined in your Coolify instance.

## Firewall Rules
This is only required if you self-host Coolify on Oracle ARM server.

By default, Oracle ARM server has a firewall enabled and you need to allow some ports to use Coolify.

For more details, check [this](../configuration.md#firewall) page.