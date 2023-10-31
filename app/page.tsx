import styles from './page.module.css'
import Link from "next/link"


export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.howdy}>
        Hello World!!! (Now Top Page)
      </h1>
      <Link 
        className={styles.goToAbout}
        href="/about"
      >
        Go to About Page
      </Link>
    </main>
  )
}
