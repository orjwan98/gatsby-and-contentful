import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyles from './header.module.scss';


const Header = () => {
    const { header, title, navList, navItem, activeNavItem } = headerStyles;
    const titleData = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title, 
                }
            }
        }
    `)

    console.log(titleData)
    return (
        <header className={header}>
            <h1><Link to="/" className={title}>{titleData.site.siteMetadata.title}</Link></h1>
            <nav>
                <ul className={navList}>
                    <li><Link className={navItem} to="/" activeClassName={activeNavItem}>Home</Link></li>
                    <li><Link className={navItem} to="/blog" activeClassName={activeNavItem}>Blog</Link></li>
                    <li><Link className={navItem} to="/about" activeClassName={activeNavItem}>About</Link></li>
                    <li><Link className={navItem} to="/contact" activeClassName={activeNavItem}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;