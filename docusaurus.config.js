const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "The Universal Truth of Humankind",
  tagline: "A book about human society.",
  url: "https://new-humanism-book.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "enlightenedExplorers", // Usually your GitHub org/user name.
  projectName: "NewHumanismBook", // Usually your repo name.

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
            "https://github.com/neohumanism/NewHumanismBook/blob/main/",
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
        title: "The Universal Truth of Humankind",
        logo: {
          alt: "Website Logo - A humand hand",
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
            href: "https://github.com/neohumanism/NewHumanismBook/",
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
