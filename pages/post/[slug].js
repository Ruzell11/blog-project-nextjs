import React from 'react';
import { getCatergories, getPost, getPostDetails } from '../../services/index'
import Categories from '../../components/Categories'
import PostWidget from '../../components/PostWidget'
import PostDetail from '../../components/PostDetail';
import Author from '../../components/Author';
import CommentsForm from '../../components/CommentsForm';
import Comments from '../../components/Comments';

const PostDetails = ({ posts }) => {
  
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetail post={posts} />
                    <Author author={posts.author} />
                    <CommentsForm slug={posts.slug} />
                    <Comments slug={posts.slug} />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                    <PostWidget slug={posts.slug} categories={posts.catergories.map((category) => category.slug)} />
                        <Categories />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default PostDetails



export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug)
    console.log(data)

    return {
        props: { posts: data }
    }
}

export async function getStaticPaths() {
    const post = (await getPost() || [])

    return {
        paths: post.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: false
    }
}