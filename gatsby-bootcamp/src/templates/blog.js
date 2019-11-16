import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost (slug: {
      eq: $slug
    }) {
      title, 
      publishedDate(formatString: "DD MMMM YYYY"), 
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {/* <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div> */}
        </Layout>
    )
}

export default Blog;