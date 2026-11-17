import styles from "./Footer.module.css";

const footerLinks = [
  {
    heading: "Shop",
    links: [
      { label: "All tables", href: "#products" },
      { label: "Studio desks", href: "#products" },
      { label: "Standing desks", href: "#products" },
      { label: "Custom orders", href: "#products" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our story", href: "#story" },
      { label: "Materials", href: "#benefits" },
      { label: "Delivery & returns", href: "#benefits" },
      { label: "Guarantee", href: "#benefits" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "hello@desk.example", href: "mailto:hello@desk.example" },
      { label: "+1 (555) 000-0000", href: "tel:+15550000000" },
      { label: "Mon–Fri, 9am–6pm", href: "#" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="/" className={styles.logo} aria-label="Desk — home">
              <span className={styles.logoMark} aria-hidden="true">▪</span> Desk
            </a>
            <p className={styles.tagline}>
              Tables for home offices, studios, and modern workspaces.
            </p>
            <p className={styles.disclaimer}>
              Sample contact details — not real business information.
            </p>
          </div>

          {/* Nav columns */}
          <nav className={styles.navGrid} aria-label="Footer navigation">
            {footerLinks.map((col) => (
              <div key={col.heading} className={styles.navCol}>
                <h3 className={styles.navHeading}>{col.heading}</h3>
                <ul className={styles.navList}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.navLink}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Desk Ltd. All rights reserved.
          </p>
          <p className={styles.legal}>
            Demo storefront — no products are for sale on this site.
          </p>
        </div>
      </div>
    </footer>
  );
}
