import { defineConfig } from "vitepress";
const config = {
  title: "Coolify",
  description: "Coolify Documentation",
  lastUpdated: true,
  lang: "en-US",
  base: "/docs/",
  cleanUrls: true,
  head: [
    [
      "link", {
        rel: "icon",
        href: "/favicon.png"
      },
      "script",
      {
        src: "https://cdn.tailwindcss.com",
      },
    ],
  ],
  themeConfig: {
    outline: "deep",
    search: {
      provider: "local",
    },
    logo: "/favicon.png",
    nav: [
      {
        text: "Other Products",
        items: [
          { text: "Safetyper", link: "https://safetyper.com" },
          { text: "Fonts", link: "https://fonts.coollabs.io" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is Coolify?", link: "/" },
          { text: "Contact", link: "/contact" },
        ],
      },
      {
        text: "Get Started",
        items: [
          { text: "Installation", link: "/installation" },
          { text: "Configuration", link: "/configuration" },
          { text: "Upgrade", link: "/upgrade" },
          { text: "Cloudflare Tunnels", link: "/cloudflare-tunnels" },
          {
            text: "Building Blocks",
            link: "/building-blocks",
          },
          {
            text: "No Vendor Lock-in",
            link: "/no-vendor-lock-in",
          },
          {
            text: "Password Reset",
            link: "/password-reset",
          },
          {
            text: "FAQ",
            link: "/faq",
          },
        ],
      },
      {
        text: "Guides",
        items: [
          { text: "Docker Swarm Cluster", link: "/swarm" },
          {
            text: "Git Providers",
            link: "/git-providers/index",
            items: [
              { text: "GitHub Actions", link: "/git-providers/github-actions" },
              { text: "GitLab Integration", link: "/git-providers/gitlab-integration" },

            ]
          },
          {
            text: "Server Providers",
            link: "/server-providers/index",
            items: [
              { text: "Oracle ARM Server Setup", link: "/server-providers/oracle-arm-server-setup" },
            ]
          },
          {
            text: "Traefik",
            link: "/traefik/index",
            items: [
              { text: "Basic Auth", link: "/traefik/basic-auth" },
              { text: "Wildcard SSL", link: "/traefik/wildcard-certificates" },
              { text: "Redirects", link: "/traefik/redirects" },
            ]
          },
          {
            text: "Frameworks",
            link: "/frameworks/index",
            items: [
              { text: "SvelteKit", link: "/frameworks/svelte-kit" },
              { text: "Laravel", link: "/frameworks/laravel" },
              { text: "Django", link: "/frameworks/django" },
              { text: "Rails", link: "/frameworks/rails" },
            ]
          },
          {
            text: "Services",
            link: "/services/index",
            items: [
              { text: "Plausible Analytics", link: "/services/plausible-analytics" },
            ]
          },
        ],
      },
    
      {
        text: "Deep Dive",
        items: [
          {
            text: "Servers",
            link: "/servers",
            items: [
              { text: "Automated Cleanup", link: "/automated-cleanup" }
            ]
          },
          { text: "Applications", link: "/applications" },
          { text: "Databases", link: "/databases" },
          {
            text: "Services",
            link: "/one-click-services",
            items: [
              { text: "How To Add A Service", link: "/how-to-add-a-service" },
            ],
          },
          { text: "Domains", link: "/domains" },
          { text: "Environment Variables", link: "/environment-variables" },
          { text: "Persistent Storage", link: "/persistent-storage" },
          { text: "Backups", link: "/backups" },
          { text: "S3 Storages", link: "/s3-storages" },
          { text: "Drain Logs", link: "/drain-logs" },
          { text: "Docker Registries", link: "/docker-registries" },
          { text: "Docker Compose", link: "/docker-compose" },
          { text: "Commands", link: "/commands" },
        ],
      },
      {
        text: "API",
        items: [
          {
            text: "Authentication",
            link: "/api-authentication",
          },
          {
            text: "Endpoints",
            link: "/api-endpoints",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/coollabsio/coolify" },
      { icon: "twitter", link: "https://twitter.com/heyandras" },
      { icon: "discord", link: "https://coollabs.io/discord" },
      { icon: "mastodon", link: "https://fosstodon.org/@andrasbacsai" },
    ],
  },
};
if (process.env.NODE_ENV !== "development") {
  config.head.push([
    "script",
    {
      defer: "",
      src: "https://analytics.coollabs.io/js/plausible.js",
      "data-domain": "coolify.io/docs",
    },
  ]);
}

export default defineConfig(config);
