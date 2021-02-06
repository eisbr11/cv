import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Felix Schliemann - CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Main
      </main>

      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  );
}
