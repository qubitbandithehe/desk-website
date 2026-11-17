import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-label="Customer testimonial"
    >
      <div className="container">
        <figure className={styles.card}>
          <blockquote className={styles.quote}>
            <p>
              &ldquo;I&rsquo;ve had the Studio Oak for eight months and it still
              looks the day it arrived. The finish is surprisingly warm, the
              frame is completely rigid, and I genuinely enjoy sitting down to
              work. It&rsquo;s the best furniture investment I&rsquo;ve
              made.&rdquo;
            </p>
          </blockquote>
          <figcaption className={styles.caption}>
            <div className={styles.avatar} aria-hidden="true">
              M
            </div>
            <div>
              <cite className={styles.name}>M. Larsson</cite>
              <p className={styles.role}>Illustrator, Stockholm</p>
              <p className={styles.disclaimer}>
                * Illustrative sample testimonial — not a verified review.
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
