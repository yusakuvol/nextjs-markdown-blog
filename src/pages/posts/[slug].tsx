import fs from 'fs'

const Post = () => {
  return <div>コンテンツ</div>
}

export async function getStaticProps() {
  return { props: { post: '' } }
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }))
  console.log('paths:', paths)
  return {
    paths,
    fallback: false,
  }
}

export default Post
