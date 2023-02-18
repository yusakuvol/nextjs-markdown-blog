import Head from 'next/head'
import Link from 'next/link'
import styles from '~/styles/Home.module.css'
import fs from 'fs'
import matter from 'gray-matter'
import type { InferGetStaticPropsType } from 'next'

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { posts } = props
  return (
    <>
      <Head>
        <title>NextBlog</title>
        <meta name="description" content="NextBlog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="my-8">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/post/${post.slug}`}>{post.frontMatter.title}</Link>
            </div>
          ))}
        </div>
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

export default Home
