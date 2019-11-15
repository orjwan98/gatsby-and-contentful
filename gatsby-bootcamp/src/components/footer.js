import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import footerStyles from './footer.module.scss';


const Footer = () => {

    const { footer } = footerStyles;
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
        <footer className={footer}>
            <p>Created by {authorData.site.siteMetadata.author}. CopyRights 2019</p>
        </footer>
    )
}

export default Footer;