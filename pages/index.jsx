import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components'

const posts = [
  { title: 'Blog title 1', excerpt: 'Blog 1 excerpt' },
  { title: 'Blog title 2', excerpt: 'Blog 2 excerpt' },
]

const Home = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Full Stack Blog</title>
        <meta name="title" description="Full Stack Blog" />
        <link rel="icon" href="/favicon" />
      </Head>

      <div className="mt-5 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1  lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
