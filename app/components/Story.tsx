import styles from "./Story.module.css";

export default function Story() {
  return (
    <section className={`section ${styles.section}`} id="story" aria-labelledby="story-heading">
      <div className={`container ${styles.inner}`}>
        {/* Image side */}
        <div className={styles.imageWrap}>
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80&auto=format&fit=crop"
            alt="A craftsperson finishing a wood table surface in a workshop"
            className={styles.image}
            loading="lazy"
            width={800}
            height={700}
          />
          <div className={styles.pullStat} aria-label="Founded in 2019">
            <span className={styles.statNum}>2019</span>
            <span className={styles.statLabel}>Founded</span>
          </div>
        </div>

        {/* Text side */}
        <div className={styles.text}>
          <p className={styles.eyebrow}>Our story</p>
          <h2 id="story-heading" className={styles.title}>
            Built to last. Designed to inspire.
          </h2>
          <p className={styles.body}>
            Desk began with a simple question: why are most work tables either
            too cheap to endure or too precious to actually use?
          </p>
          <p className={styles.body}>
            We partnered with small workshops to source responsibly harvested
            timber, test steel alloys for load and longevity, and iterate on
            proportions until every table felt honest in a room. No decorative
            seams, no filler materials — just structure that shows.
          </p>
          <p className={styles.body}>
            Every piece leaves our workshop with a 10-year structural guarantee.
            We think furniture should outlive trends, and we design accordingly.
          </p>
          <dl className={styles.stats}>
            <div className={styles.stat}>
              <dt className={styles.statValue}>4,000+</dt>
              <dd className={styles.statDesc}>Tables in homes worldwide</dd>
            </div>
            <div className={styles.stat}>
              <dt className={styles.statValue}>10 yr</dt>
              <dd className={styles.statDesc}>Structural guarantee</dd>
            </div>
            <div className={styles.stat}>
              <dt className={styles.statValue}>FSC</dt>
              <dd className={styles.statDesc}>Certified timber sources</dd>
            </div>
          </dl>
          <p className={styles.disclaimer}>
            * Figures are illustrative sample content.
          </p>
        </div>
      </div>
    </section>
  );
}
