import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={`container ${styles.inner}`}>
        {/* Text column */}
        <div className={styles.text}>
          <p className={styles.eyebrow}>Crafted for focus</p>
          <h1 className={styles.headline}>
            A table that earns its place in every room.
          </h1>
          <p className={styles.sub}>
            Desk designs tables built for the way you actually work — durable
            materials, honest proportions, and a finish that improves with time.
          </p>
          <div className={styles.actions}>
            <a href="#products" className="btn btn-primary">
              Shop the collection
            </a>
            <a href="#story" className="btn btn-outline">
              Our story
            </a>
          </div>
        </div>

        {/* Image column */}
        <div className={styles.imageWrap}>
          <img
            src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80&auto=format&fit=crop"
            alt="Minimal oak writing desk in a bright home studio"
            className={styles.image}
            loading="eager"
            width={900}
            height={700}
          />
          <div className={styles.imageBadge} aria-hidden="true">
            <span>Free delivery</span>
            <span>on all orders</span>
          </div>
        </div>
      </div>
    </section>
  );
}
