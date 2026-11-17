import styles from "./Benefits.module.css";

const benefits = [
  {
    icon: "🪵",
    title: "Considered materials",
    body: "We use FSC-certified hardwoods, powder-coated steel, and water-based finishes. No particle board, no shortcuts.",
  },
  {
    icon: "🔩",
    title: "Sturdy construction",
    body: "Mortise-and-tenon joinery on wood surfaces, welded steel frames rated to 150 kg. Built for decades of daily use.",
  },
  {
    icon: "📦",
    title: "White-glove delivery",
    body: "Every order is delivered fully assembled by a two-person team, placed exactly where you want it.",
  },
  {
    icon: "🛡️",
    title: "10-year guarantee",
    body: "If anything structural fails within ten years, we repair or replace it — no questions asked.",
  },
];

export default function Benefits() {
  return (
    <section
      className={`section ${styles.section}`}
      id="benefits"
      aria-labelledby="benefits-heading"
    >
      <div className="container">
        <header className={styles.header}>
          <h2 id="benefits-heading" className={styles.title}>
            Why Desk?
          </h2>
          <p className={styles.subtitle}>
            We obsess over the parts you won't see so the parts you will stay
            beautiful.
          </p>
        </header>

        <ul className={styles.grid} aria-label="Key benefits">
          {benefits.map((b) => (
            <li key={b.title} className={styles.card}>
              <span className={styles.icon} role="img" aria-hidden="true">
                {b.icon}
              </span>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardBody}>{b.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
