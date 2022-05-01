import { GetStaticProps } from 'next'
import Header from '../../Components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import Head from 'next/head'

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: Post
}

function PostPage({ post }: Props) {
  // console.log(post);

  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // console.log(data);
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
        setSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
        setSubmitted(false)
      })
  }

  return (
    <main  className='relative overflow-clip'>
      <div className='hidden md:inline-block absolute w-72 h-72 bg-purple-500 rounded-full top-[130vh] -left-32 opacity-80 blur-sm'></div>
      <div className='hidden md:inline-block absolute w-72 h-72 bg-gray-500 rounded-full top-[260vh] -right-40 opacity-80 blur-sm'></div>
      <div className='hidden md:inline-block absolute w-72 h-72 bg-orange-500 rounded-full top-[230vh] -left-28 mix-blend-multiply opacity-80 blur-sm'></div>
      <div className='hidden md:inline-block absolute w-72 h-72 bg-pink-300 rounded-full top-[160vh] -right-20 mix-blend-multiply opacity-80 blur-sm'></div>
      {/* <div className='hidden md:inline-block absolute w-72 h-72 bg-orange-500 rounded-full top-[50vh] -left-28 mix-blend-multiply opacity-80 blur-sm'></div> */}
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <img
        className="object-cover w-full h-screen "
        src={urlFor(post.mainImage).url()!}
        alt=""
      />
      
      <article className="max-w-3xl p-5 mx-auto">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <h2 className="text-xl font-light text-gray-500">{post.description}</h2>
        <div className="flex items-center space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt=""
          />
          <p className="text-sm font-extralight">
            Blog post by{' '}
            <span className="text-green-600">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <div className="mt-10">
          <PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET! || "production"}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || "8cdj48ib"}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h1 className="my-5 text-xl font-bold" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
              // image: (props: any) => (
              //   <img {...props} className="items-center flex-1 w-full" />
              // )
            }}
          />
        </div>
      </article>
      <hr className="max-w-lg mx-auto my-5 border border-yellow-500" />

      {submitted ? (
        <div className="flex flex-col max-w-2xl p-10 mx-auto my-10 text-white bg-yellow-500">
          <h3 className="text-3xl font-bold">
            Thank You for submitting your comment!
          </h3>
          <p>Once it has been approved,it will appear below!!!</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col max-w-2xl p-5 mx-auto mb-10"
        >
          <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">Leave a comment below!</h4>
          <hr className="py-3 mt-2" />

          <input
            {...register('_id')}
            type="hidden"
            name="_id"
            value={post._id}
          />

          <label className="block mb-5">
            <span className="text-gray-700">Name</span>
            <input
              {...register('name', { required: true })}
              className="block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-input ring-yellow-500 focus:ring"
              placeholder="Mailer Daemon"
              type="text"
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-700">Email</span>
            <input
              {...register('email', { required: true })}
              className="block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-input ring-yellow-500 focus:ring"
              placeholder="MD@mailer-daemon.com"
              type="email"
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-700">Comment</span>
            <textarea
              {...register('comment', { required: true })}
              className="block w-full px-3 py-2 mt-1 border rounded shadow outline-none form-textarea ring-yellow-500 focus:ring"
              placeholder="Enter your comment here..."
              rows={8}
            />
          </label>
          {/* errors */}
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">The Name Field is required</span>
            )}
            {errors.email && (
              <span className="text-red-500">The Email Field is required</span>
            )}
            {errors.comment && (
              <span className="text-red-500">
                The Comment Field is required
              </span>
            )}
          </div>
          <input
            className="px-4 py-2 font-bold text-white bg-yellow-500 rounded shadow cursor-pointer focus:shadow-outline hover:bg-yellow-400 focus:outline-none"
            type="submit"
          />
        </form>
      )}
      <div className="flex flex-col max-w-2xl p-10 mx-auto my-10 space-y-2 shadow shadow-yellow-500">
        <h3 className="text-4xl">Comments</h3>
        <hr className="pb-2" />
        {post.comments.map((comment) => {
          return (
            <div key={comment._id}>
              <p>
                <span className="text-yellow-500">{comment.name}:</span>
                {comment.comment}
              </p>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default PostPage

export const getStaticPaths = async () => {
  const query = `*[_type=="post"]{
  _id,
  slug {
    current
}
 }`
  const posts = await sanityClient.fetch(query)
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type=="post" && slug.current==$slug][0]{
  _id,
  _createdAt,
  title,
  author->{
  name,
  image
},
'comments':*[
  _type=="comment" &&
  post._ref == ^._id && 
  approved == true
],
description,
mainImage,
slug,
body
 }`
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post,
    },
    revalidate: 60, //after 60 seconds
  }
}
