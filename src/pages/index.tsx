import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css";
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h3 className={inter.className}>PWA with Next</h3>
    </main>
  );
}
