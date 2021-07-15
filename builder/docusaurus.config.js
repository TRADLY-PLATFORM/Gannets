const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tradly - Building App Guides',
  tagline: 'Easy to understand templates',
  url: 'https://templates.tradly.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TRADLY-PLATFORM', // Usually your GitHub org/user name.
  projectName: 'Gannets', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-143764314-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'Templates ',
      logo: {
        alt: 'Tradly Platform Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://www.youtube.com/playlist?list=PLiKQzSFReAziYUvOKfUPxglX-HOhWabVi',
          label: 'Videos',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Submit',
          items: [
            {
              label: 'Technical Enquiry',
              href: 'https://community.tradly.app',
            },
            {
              label: 'Submit Bug',
              href: 'https://tradly.atlassian.net/servicedesk/customer/portals',
            },
            {
              label: 'Feature Request',
              href: 'https://community.tradly.app',
            },
          ],
        },
        {
          title: 'Important Links',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'API Reference',
              href: 'https://developer.tradly.app/',
            },
            {
              label: 'Video Tutorials',
              href: 'https://www.youtube.com/playlist?list=PLiKQzSFReAziYUvOKfUPxglX-HOhWabVi',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
