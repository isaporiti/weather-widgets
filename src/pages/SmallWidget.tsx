import styles from '@/styles/Widget.module.css'

export function SmallWidget() {
  return <main className={`${styles.widget} ${styles.widget__small} ${styles.clear_sky}`}>
    <section>
      <div className={styles.widget__city_name}>Barcelona</div>
      <div className={styles.widget__temperature}>22°</div>
    </section>
    <section>
      <div>☀️</div>
      <span className={styles.widget__description}>Severe high temperature warning</span>
    </section>
  </main>
}
