import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';
import blogStyles from './blog.module.scss';

const BlogPage = () => {

    const { posts, post } = blogStyles;

    const postDataArray = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (sort: {
            fields: publishedDate
            order: DESC
        }) {
            edges {
                node {
                    title,
                    slug, 
                    publishedDate(formatString: "DD MMMM YYYY"),  
                }
            }
        }
    }
    `).allContentfulBlogPost.edges

    console.log(postDataArray);
    return (
        <Layout>
            <h1>This is my blog page</h1>
            <h2>Posts will show up here</h2>
            <ol className={posts}>
                {
                    postDataArray.map(ele => {
                       return (
                           <li key={ele.node.title} className={post}>
                               <Link to={`/blog/${ele.node.slug}`}>
                                   <h2>{ele.node.title}</h2>
                                   <p>{ele.node.publishedDate}</p>
                               </Link>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    )
}

export default BlogPage;