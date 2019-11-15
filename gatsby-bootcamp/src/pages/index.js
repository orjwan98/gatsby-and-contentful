import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
    return (
        <Layout>
            <h1>The Great Gatsby Bootcamp</h1>
            <h2>Orjwan Rajaby</h2>
            <p>Hello my name is Orjwan and I am a baaaaaaaaaad bitch</p>
            <Link to="/contact"><p>Need a developer?</p></Link>
        </Layout>
    )
}
 
export default IndexPage;