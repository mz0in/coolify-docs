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
# Installation
## Supported Operating Systems

- Debian based Linux distributions (Debian, Ubuntu, etc.)
- Redhat based Linux distributions (CentOS, Fedora, Redhat, AlmaLinux, Rocky etc.)
- SUSE based Linux distributions (SLES, SUSE, openSUSE, etc.)
- Raspberry Pi OS (Raspbian)

If you would like to have other, please consider [open an issue on GitHub](https://github.com/coollabsio/coolify/issues/new).

> `AMD64` and `ARM` architecture are supported.

:::tip
We recommend [Hetzner](https://hetzner.cloud/?ref=VBVO47VycYLt) **(referral link!)**. They have very cheap but super powerful servers, in EU and US.
:::

## Required Server Resources

Minimum required resources for Coolify:

- 2 CPUs
- 2 GBs memory
- 30+ GB of storage for the images.

It could run on smaller servers as well, but not recommended.

Based on what you would like to host additional resources (CPU, memory, disk) are needed.

Self-hosting could be heavy if you would like to run a lot of things.

But for example, I'm hosting most of my production stuffs on a server with:
```
- 8GB of memory (average usage 3.5GB)
- 4 CPUs (average usage ~20-30%)
- 150GB disk (usage 40GB)
```
Hosting the following things:
```
- 3 NodeJS apps
- 4 Static sites
- Plausible Analytics (for visitor analytics)
- Fider (feedback tool)
- UptimeKuma (uptime monitoring)
- Ghost (my newsletters)
- 3 Redis databases
- 2 PostgreSQL databases
```

## Automated Installation
### Prerequisites
1. Make sure `SSH` is enabled and you can connect to your server with `SSH` from your local machine with `root` user.
2. Make sure `curl` command is available on your server.
Installation of Coolify is automated with a single script.

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

You can find the source code [here](https://github.com/coollabsio/coolify/blob/main/scripts/install.sh).

The script will do the followings on your operating system:
- Install basic commands: `curl wget git jq jc`
- Docker Engine (24+)
- Configures proper logging for Docker Engine.
- Creates directory structure at `/data/coolify` for all the configuration files.
- Creates an SSH key for Coolify to be able to manage this server from itself at `/data/coolify/ssh/keys/id.root@host.docker.internal`.
- Install and start dockerized Coolify.

## Manually Installation
If you want to manually install Coolify on a system where Docker Engine available, follow the steps below.

1. Install Docker Engine (24+) - [official instructions](https://docs.docker.com/engine/install/#server).
   
:::warning
Make sure it is started and enabled with `systemd` or `systemctl` or `service` or similar command.
:::

2. Install `curl` command.
3. Make sure `SSH` is enabled and you can connect to your server with `SSH` from your local machine with `root` user.

:::tip
This is required because Coolify from the docker container will connect to all of your servers via SSH, even to the host machine itself.
:::

4. Create the base configuration directories under `/data/coolify`.
```bash
mkdir -p /data/coolify/{source,ssh,applications,databases,backups,services,proxy}
mkdir -p /data/coolify/ssh/{keys,mux}
mkdir -p /data/coolify/proxy/dynamic

```
5. Generate an SSH key for Coolify to be able to manage this server from itself.
```bash
ssh-keygen -f /data/coolify/ssh/keys/id.root@host.docker.internal -t ed25519 -N '' -C root@coolify
```
6. Add your public SSH key to `~/.ssh/authorized_keys`:

This will allow Coolify to connect to this server from itself.

```bash
cat /data/coolify/ssh/keys/id.root@host.docker.internal.pub >>~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

:::tip
You can skip the SSH key generation if you already have one. But you need to add your public SSH key to `~/.ssh/authorized_keys` manually.
:::

7. Copy the `docker-compose.yml`, `docker-compose.prod.yml`, `.env.production` & `upgrade.sh` files from Coolify's CDN to `/data/coolify/source`.
```bash
curl -fsSL https://cdn.coollabs.io/coolify/docker-compose.yml -o /data/coolify/source/docker-compose.yml
curl -fsSL https://cdn.coollabs.io/coolify/docker-compose.prod.yml -o /data/coolify/source/docker-compose.prod.yml
curl -fsSL https://cdn.coollabs.io/coolify/.env.production -o /data/coolify/source/.env
curl -fsSL https://cdn.coollabs.io/coolify/upgrade.sh -o /data/coolify/source/upgrade.sh
```

8. Set permissions for all the files and directories:
   
```bash
chown -R 9999:root /data/coolify
chmod -R 700 /data/coolify
```

9. Generate values for the following variables in `/data/coolify/source/.env`:
```bash
sed -i "s|APP_ID=.*|APP_ID=$(openssl rand -hex 16)|g" /data/coolify/source/.env
sed -i "s|APP_KEY=.*|APP_KEY=base64:$(openssl rand -base64 32)|g" /data/coolify/source/.env
sed -i "s|DB_PASSWORD=.*|DB_PASSWORD=$(openssl rand -base64 32)|g" /data/coolify/source/.env
sed -i "s|REDIS_PASSWORD=.*|REDIS_PASSWORD=$(openssl rand -base64 32)|g" /data/coolify/source/.env
sed -i "s|PUSHER_APP_ID=.*|PUSHER_APP_ID=$(openssl rand -hex 32)|g" /data/coolify/source/.env
sed -i "s|PUSHER_APP_KEY=.*|PUSHER_APP_KEY=$(openssl rand -hex 32)|g" /data/coolify/source/.env
sed -i "s|PUSHER_APP_SECRET=.*|PUSHER_APP_SECRET=$(openssl rand -hex 32)|g" /data/coolify/source/.env
```

:::warning
This only needs to be done once, when you install Coolify for the first time. If you do it after Coolify has been started, it will break your installation.

Make sure you save the values somewhere. If you lose them, you will lose access to your Coolify installation and all your data.
:::

10. Make sure the default `coolify` network is available.
```bash
docker network create --attachable coolify
```

11. Start Coolify with the following command:
```bash
docker compose --env-file /data/coolify/source/.env -f /data/coolify/source/docker-compose.yml -f /data/coolify/source/docker-compose.prod.yml up -d --pull always --remove-orphans --force-recreate
```

12. Now you can access Coolify on port `8000` of your server.

## Uninstall

You can easily uninstall Coolify by stopping the following containers,
`coolify`,`coolify-db`, `coolify-proxy`, and `coolify-redis` or by executing the following script:

```bash
docker stop -t 0 coolify coolify-db coolify-proxy coolify-redis; docker rm coolify coolify-db coolify-proxy coolify-redis
```

You also need to cleanup all the docker volumes as well.

```bash
docker volume rm coolify-db coolify-redis
```

:::warning
The following command will delete EVERYTING related to your configurations, backups, etc.
:::

And delete all configurations in `/data/coolify`:

```bash
rm -fr /data/coolify
```