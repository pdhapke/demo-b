import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      Hello world, auto deploy!
      <h1>This will test the repeat deploy</h1>
    </main>
  )
}
