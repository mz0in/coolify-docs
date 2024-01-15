---
head:
  - - meta
    - name: description
      content: Coolify Documentation for Rails deployment
  - - meta
    - name: keywords
      content: coolify self-hosting rails ruby docker kubernetes vercel netlify heroku render digitalocean aws gcp azure nixpacks
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify Documentation for Rails deployment
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://coolcdn.b-cdn.net/assets/coolify/rails-og-image.png
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
      content: https://coolcdn.b-cdn.net/assets/coolify/rails-og-image.png
---

# Rails

Ruby on Rails is a web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern.

Example repository [here](https://github.com/coollabsio/coolify-examples/tree/rails).

## Requirements

If you would like to migrate the database during the deployment with `NIXPACKS` build pack, you need to set the following `Start Command`:

```bash
bundle exec rake db:migrate && bundle exec bin/rails server -b 0.0.0.0 -p ${PORT:-3000} -e $RAILS_ENV
```