const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "The Fate of Humanity",
  tagline: "Humanity is in peril and it falls on us to find a solution.",
  url: "https://human-urgency-book.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "enlightenedExplorers", // Usually your GitHub org/user name.
  projectName: "HumanUrgencyBook", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          path: "book",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/neohumanism/HumanUrgencyBook/blob/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Life Optimization Manifesto",
        logo: {
          alt: "Website Logo - A colored brain",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Book",
          },
          {
            href: "https://discord.gg/", //TBD
            label: "Discord",
            position: "right",
          },
          {
            href: "https://github.com/neohumanism/HumanUrgencyBook/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        copyright: `Free Use. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
