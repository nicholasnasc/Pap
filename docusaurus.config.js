// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Claro - PAP Tools',
  tagline: 'Documentação de Porta em Porta',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://pap.discloud.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'paptools', // Usually your GitHub org/user name.
  projectName: 'paptools', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'http://github.com/nicholasnasc',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'http://github.com/nicholasnasc',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'PAP Tools Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'http://github.com/nicholasnasc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Introdução',
                to: '/docs/intro',
              },
              {
                label: 'Tutorial',
                to: '/docs/tutorial-basics/create-a-document',
              },
              {
                label: 'Guia de Uso',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Sobre',
            items: [
              {
                label: 'RedeInova',
                href: 'https://www.redeinova.com.br',
              },
              {
                label: 'PAP Tools',
                href: 'https://paptools.redeinova.com.br',
              },
              {
                label: 'Claro',
                href: 'https://www.claro.com.br',
              },
            ],
          },
          {
            title: 'Contato',
            items: [
              {
                label: 'Email',
                href: 'mailto:suporte@redeinova.com.br',
              },
              {
                label: 'Website RedeInova',
                href: 'https://www.redeinova.com.br',
              },
              {
                label: 'Suporte',
                href: 'https://paptools.redeinova.com.br/support',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PAP Tools. Desenvolvido por <a href="https://www.redeinova.com.br" target="_blank" rel="noopener noreferrer">RedeInova</a> para Claro.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
