import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';
import blogStyles from './blog.module.scss';

const BlogPage = () => {

    const { posts, post } = blogStyles;

    const postDataArray = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                        frontmatter {
                            title,
                            date, 
                        }
                    
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `).allMarkdownRemark.edges

    console.log(postDataArray);
    return (
        <Layout>
            <h1>This is my blog page</h1>
            <h2>Posts will show up here</h2>
            <ol className={posts}>
                {
                    postDataArray.map(ele => {
                       return (
                           <li key={ele.node.frontmatter.title} className={post}>
                               <Link to={`/blog/${ele.node.fields.slug}`}>
                                   <h2>{ele.node.frontmatter.title}</h2>
                                   <p>{ele.node.frontmatter.date}</p>
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