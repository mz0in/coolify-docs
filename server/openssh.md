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

# OpenSSH

Coolify uses SSH to connect to your server and deploy your application, even if you are using only the `localhost` server - where Coolify is running on.

To validate your configuration, make sure the followings are set on your server.

:::warning
Some commands may vary based on your Linux distribution.
:::

**1. Make sure the SSH server is installed and running.**

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
**2. Make sure `PermitRootLogin` is set to `yes` or `without-password` or `prohibit-password`  in `/etc/ssh/sshd_config` file.**

```bash
# Check the current value
grep PermitRootLogin /etc/ssh/sshd_config

# If the value is not `yes` or `without-password` or `prohibit-password`, change it and make sure it is not commented out.
# If it is commented out, remove the `#` character at the beginning of the line.

sudo vi /etc/ssh/sshd_config

# You can exit the editor by pressing `Esc` and then `:wq` and then `Enter` keys - thank me later.

# Restart the SSH service
# Ubuntu/Debian/CentOS/RHEL/Arch Linux/SLES/openSUSE
sudo systemctl restart sshd

# Alpine Linux
sudo rc-service sshd restart

```

**3. Make sure an SSH key is added to the `authorized_keys` file.**

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

**4. Add the private key to Coolify at `Security` menu -> `Private Keys` and set this new key in the localhost server settings.**