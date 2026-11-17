import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h2 id="cta-heading" className={styles.title}>
            Find the table that fits your life.
          </h2>
          <p className={styles.sub}>
            Browse the full collection and configure your finish, size, and
            frame colour.
          </p>
        </div>
        <div className={styles.actions}>
          <a href="#products" className="btn btn-primary">
            Explore the collection
          </a>
          <a href="#benefits" className="btn btn-outline-light">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
