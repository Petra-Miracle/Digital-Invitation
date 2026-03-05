export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Undangan Digital",
  description:
    "Undangan digital yang elegan, interaktif, dan berkesan untuk momen spesial Anda.",
  navItems: [
    { label: "Beranda", href: "/" },
    { label: "Harga", href: "#harga" },
    { label: "Kontak", href: "#kontak" },
  ],
  navMenuItems: [
    { label: "Beranda", href: "/" },
    { label: "Harga", href: "#harga" },
    { label: "Kontak", href: "#kontak" },
  ],
  links: {
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
};
