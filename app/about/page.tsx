import Link from "next/link"
import styles from './styles.module.css'

export default function About() {
  throw new Error('Not today!')
  return (
    <>
    <h1 className={styles.h1}>About</h1>
    <Link 
    href="/"
    className={styles.goToTop}
    >
      Link to Home Page(Go To Top Page)
    </Link>
    </>
  )
}
 