const base = "/";

export default {
  base,
  // 站点级选项
  title: "sunmin‘s blog", // 网站标题
  description: "sunmin's blog", // 网站描述
  themeConfig: {
    // 主题级选项
    nav: [
      { text: 'About', link: '/about' },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/sunminx"}
    ],
    sidebar: {
      // "/bigFrontEnd/html/": {
      //   text: "html",
      //   items: [
      //     { text: "html", link: "/bigFrontEnd/html/" },
      //     { text: "html1", link: "/bigFrontEnd/html/html1" },
      //     { text: "html2", link: "bigFrontEnd/html/html2" },
      //   ],
      // },
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} sunminx.github.io`,
      message: '保留所有权利'
    }
  },
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `/favicon.png` }],
  ],
};
