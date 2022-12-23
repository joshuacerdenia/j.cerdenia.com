const siteConfig = {
  links: [
    // eslint-disable-next-line prettier/prettier
    ["Source", "https://github.com/joshuacerdenia/j.cerdenia.com", "bi bi-code-slash"],
    ["GitHub", "https://github.com/joshuacerdenia", "bi bi-github"],
    ["Music", "https://music.cerdenia.com", "bi bi-music-note"],
    ["Contact", "mailto:joshua@cerdenia.com", "bi bi-envelope-fill"],
    ["RSS", "/feed", "bi bi-rss-fill"],
  ],
  metadata: {
    brand: "Joshua Cerdenia",
    copyright: "&#169; 2022 Joshua Cerdenia",
    description: "The online home of Joshua Cerdenia",
    icon: "/images/marsh.jpeg",
    image: "/images/marsh.jpeg",
    siteUrl: "https://j.cerdenia.com",
  },
  redirects: {
    feed: "/rss.xml",
    music: "https://cerdenia.com",
  },
};

export const { links, metadata, redirects } = siteConfig;
