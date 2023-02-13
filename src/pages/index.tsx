import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '~/styles/Home.module.css'
import fs from 'fs'
import matter from 'gray-matter'

type Props = {
  posts: string
}

export const Home: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>NextBlog</title>
        <meta name="description" content="NextBlog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="my-8">posts</div>
      </main>
    </>
  )
}

export const getStaticProps = () => {
  const files = fs.readdirSync('posts')
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const { data } = matter(fileContent)
    return {
      frontMatter: data,
      slug,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
