// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cobblemon Spawn Alerts',
  tagline: 'A highly customizable sidemod for Cobblemon to alert Pokemon spawning',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://StainlessStasis.github.io',
  baseUrl: '/CSA-Docs/',

  organizationName: 'StainlessStasis',
  projectName: 'CSA-Docs',
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/StainlessStasis/CSA-Docs/tree/main/csa-docs/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social_card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'CSA',
        logo: {
          alt: 'CSA Logo',
          src: 'img/csa_logo.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'aboutSidebar',
            position: 'left',
            label: 'About',
          },
          {
            type: 'docSidebar',
            sidebarId: 'configSidebar',
            position: 'left',
            label: 'Configs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'customizationSidebar',
            position: 'left',
            label: 'Customization',
          },
          {
            type: 'docSidebar',
            sidebarId: 'otherSidebar',
            position: 'left',
            label: 'Other',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://modrinth.com/mod/cobblemon-spawn-alerts',
            label: 'Download CSA',
            position: 'right',
          },
          {
            href: 'https://github.com/StainlessStasis/CobblemonSpawnAlerts',
            label: 'Mod Repository',
            position: 'right',
          },
          {
            href: 'https://ko-fi.com/stasistheshattered',
            label: 'Support Me!',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About',
                to: '/',
              },
              {
                label: 'Configs',
                to: '/config/',
              },
              {
                label: 'Customization',
                to: '/customization/',
              },
              {
                label: 'Other',
                to: '/other/changelog/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Support | Contact Me',
                href: 'https://discord.com/channels/934267676354834442/1387875174120165496',
              },
              {
                label: 'Feedback',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLSek3U1Df_Ycwb_h5R1DPQKedsTzK9eTD2jPayqD3zw7oAJXkg/viewform?usp=header',
              },
              {
                label: 'Donate on Ko-fi',
                href: 'https://ko-fi.com/stasistheshattered',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Download CSA',
                href: 'https://modrinth.com/mod/cobblemon-spawn-alerts'
              },
              {
                label: 'Mod Repository',
                href: 'https://github.com/StainlessStasis/CobblemonSpawnAlerts'
              },
              {
                label: 'Docs Repository',
                href: 'https://github.com/StainlessStasis/CSA-Docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Stasis, the Shattered. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "/"
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
};

export default config;
