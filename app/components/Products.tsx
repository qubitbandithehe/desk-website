import styles from "./Products.module.css";

const products = [
  {
    id: 1,
    name: "Studio Oak",
    description:
      "Solid white oak top with tapered steel legs. A clean, timeless workspace companion.",
    price: "$849",
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop",
    alt: "Studio Oak table — solid white oak top with tapered steel legs",
  },
  {
    id: 2,
    name: "Loft Walnut",
    description:
      "Warm walnut veneer surface over birch ply core. Perfect for creative studios.",
    price: "$1,090",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80&auto=format&fit=crop",
    alt: "Loft Walnut table — warm walnut veneer surface",
  },
  {
    id: 3,
    name: "Arch Standing",
    description:
      "Height-adjustable frame, smooth matte top. Sit or stand — it adapts with you.",
    price: "$1,350",
    tag: null,
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80&auto=format&fit=crop",
    alt: "Arch Standing table — height-adjustable frame with matte top",
  },
  {
    id: 4,
    name: "Slim Ash",
    description:
      "Ash wood top, slim powder-coated frame. Understated elegance for smaller spaces.",
    price: "$695",
    tag: null,
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80&auto=format&fit=crop",
    alt: "Slim Ash table — ash wood top with slim powder-coated frame",
  },
];

export default function Products() {
  return (
    <section className={`section ${styles.section}`} id="products" aria-labelledby="products-heading">
      <div className="container">
        <header className={styles.sectionHeader}>
          <h2 id="products-heading" className={styles.title}>
            Featured tables
          </h2>
          <p className={styles.subtitle}>
            Each piece is made to order and ships fully assembled. Sample product
            content — not live listings.
          </p>
        </header>

        <ul className={styles.grid} aria-label="Product list">
          {products.map((p) => (
            <li key={p.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img
                  src={p.image}
                  alt={p.alt}
                  className={styles.image}
                  loading="lazy"
                  width={600}
                  height={450}
                />
                {p.tag && (
                  <span className={styles.tag} aria-label={`Tagged as ${p.tag}`}>
                    {p.tag}
                  </span>
                )}
              </div>
              <div className={styles.info}>
                <div className={styles.nameRow}>
                  <h3 className={styles.name}>{p.name}</h3>
                  <span className={styles.price}>{p.price}</span>
                </div>
                <p className={styles.desc}>{p.description}</p>
                <button
                  className={`btn btn-outline ${styles.addBtn}`}
                  aria-label={`View ${p.name}`}
                >
                  View details
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
