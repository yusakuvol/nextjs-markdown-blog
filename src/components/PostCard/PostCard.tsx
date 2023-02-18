import Link from 'next/link'
import Image from 'next/image'

type Props = {
  post: {
    frontMatter: {
      [key: string]: any
    }
    slug: string
  }
}

const PostCard = (props: Props) => {
  const { post } = props
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="border rounded-lg">
        <Image
          src={`/${post.frontMatter.image}`}
          width={1200}
          height={700}
          alt={post.frontMatter.title}
        />
      </div>
      <div className="px-2 py-4">
        <h1 className="font-bold text-lg">{post.frontMatter.title}</h1>
        <span>{post.frontMatter.date}</span>
      </div>
    </Link>
  )
}

export default PostCard