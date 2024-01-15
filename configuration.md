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
# Configuration

## OpenSSH Server

Coolify uses SSH to connect to your server and deploy your application, even if you are using only the `localhost` server - where Coolify is running on.

To validate your configuration, make sure the followings are set on your server.

:::warning
Some commands may vary based on your Linux distribution.
:::

1. Make sure the SSH server is installed and running.

```bash
# Ubuntu/Debian
sudo apt install openssh-server
sudo systemctl status sshd

# CentOS/RHEL
sudo yum install openssh-server
sudo systemctl status sshd

# Arch Linux
sudo pacman -S openssh
sudo systemctl status sshd

# Alpine Linux
sudo apk add openssh
sudo rc-service sshd status

# SLES/openSUSE
sudo zypper install openssh
sudo systemctl status sshd
```
2. Make sure `PermitRootLogin` is set to `yes` or `without-password` or `prohibit-password`  in `/etc/ssh/sshd_config` file.

```bash
# Check the current value
grep PermitRootLogin /etc/ssh/sshd_config

# If the value is not `yes` or `without-password` or `prohibit-password`, change it and make sure it is not commented out.
# If it is commented out, remove the `#` character at the beginning of the line.

sudo vi /etc/ssh/sshd_config

# You can exit the editor by pressing `Esc` and then `:wq` and then `Enter` keys - thank me later.

# Restart the SSH service
# Ubuntu/Debian
sudo systemctl restart sshd

# CentOS/RHEL
sudo systemctl restart sshd

# Arch Linux
sudo systemctl restart sshd

# Alpine Linux
sudo rc-service sshd restart

# SLES/openSUSE
sudo systemctl restart sshd
```

3. Make sure an SSH key is added to the `authorized_keys` file.

If you installed Coolify with the automated script, you don't need to do anything else. 

If you installed Coolify manually, you need to add an SSH key to the `authorized_keys` file.

```bash
# Create a new SSH key pair ed25519 (recommended) or rsa (legacy) with the following command.

# The key needs to be created in the `/data/coolify/ssh/keys` directory with,
# id.root@host.docker.internal name,
# no passphrase,
# root@coolify comment.

ssh-keygen -t ed25519 -a 100 -f /data/coolify/ssh/keys/id.root@host.docker.internal -q -N "" -C root@coolify
chown 9999 /data/coolify/ssh/keys/id.root@host.docker.internal

# Copy the public key to the `authorized_keys` file
cat /data/coolify/ssh/keys/id.root@host.docker.internal.pub >>~/.ssh/authorized_keys

# Set the correct permissions
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

Add the private key to Coolify at `Security` menu -> `Private Keys` and set this new key in the localhost server settings.

## Firewall

If you are using any kind of firewall, you need to allow the following ports:

- For Coolify: `8000` (http), `6001` (websocket) and `22` (or a custom port) (required)
- Reverse Proxy: `80, 443` (optional)

:::warning 
If you are using `Oracle Cloud free ARM server`, you need to allow these ports inside Oracle's Dashboard, otherwise you cannot reach your instance from the internet after installation.
:::

- For GitHub integration, [check this](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses).
  

### Coolify Cloud
If you need the public facing IPs to allow inbound connections to your servers, please [contact us](/contact.md).


#### Where are our server located?

All of our servers are located in Germany.


## Instance Domain

You can set your Coolify instance a custom domain in the `/settings` page.

## Custom Proxy
If you are using a custom proxy (like Nginx / Caddy), you need to set the following manually for your Coolify instance.

You need to proxy `/app*` to `coolify-realtime:6001` and `*` to `coolify:8000` containers. 

### Caddy

```bash
# Caddyfile
app.coolify.io {
  handle /app* {
		reverse_proxy coolify-realtime:6001
	}

	handle {
		reverse_proxy coolify:8000
	}
}
```

### Nginx

```bash
# nginx.conf
server {
  listen 80;
  server_name app.coolify.io;

  location /app {
    proxy_pass http://coolify-realtime:6001;
  }

  location / {
    proxy_pass http://coolify:8000;
  }
}
```

## Notifications

You can set up several types of notifications to your resources. Each team could have different notification settings.

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
