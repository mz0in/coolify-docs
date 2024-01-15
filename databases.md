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

# Databases

You can configure a database with a simple click. Coolify supports the following databases:

- PostgreSQL
- MySQL
- MariaDB
- MongoDB
- Redis

## Ports Mapping vs Public Port

### Ports Mapping
Ports mapping is using the Docker [port mapping](https://docs.docker.com/network/#published-ports) feature. It is used to map the container port to the host port. For example, if you set the port mapping to `8080:80`, the container port `80` will be mapped to the host port `8080`.

### Public Port
Public port is used to expose the container port to the internet, by starting an Nginx TCP proxy.


### Which one should I use?
- Port mappings makes the connection/port permanent (you need to restart your database to change it).
- The public port makes the connection/port dynamic (you can change it without restarting the database, Coolify will restart the Nginx TCP proxy for you).

## Access database during builds

If you are using `Nixpacks` build pack, you have two ways to access your database during builds:

1. Database & your application are `in the same network`: You can reach it using the `internal URL` provided by Coolify.
2. Database & your application `are not in the same network`: You need to set enable yout database to be `Accessible over the internet` and use the `public URL` provided by Coolify.