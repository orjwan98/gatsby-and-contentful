import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';

const BlogPage = () => {

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
            <ol>
                {
                    postDataArray.map(ele => {
                       return (
                            <li key={ele.node.frontmatter.title}>
                               <h2><Link to={`/blog/${ele.node.fields.slug}`}>{ele.node.frontmatter.title}</Link></h2>
                                <p>{ele.node.frontmatter.date}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    )
}

export default BlogPage;