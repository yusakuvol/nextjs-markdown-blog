import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '~/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NextBlog</title>
        <meta name="description" content="NextBlog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="my-8">コンテンツ</div>
      </main>
    </>
  )
}
