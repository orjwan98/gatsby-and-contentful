import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


const Footer = () => {
    const authorData = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer>
            <p>Created by {authorData.site.siteMetadata.author}. CopyRights 2019</p>
        </footer>
    )
}

export default Footer;