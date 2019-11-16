const path = require('path');

// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions;

//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md');

//         //add new property to the node object
//         createNodeField({
//             node, 
//             name: 'slug', 
//             value: slug
//         })

//         console.log('@@@@@@@@@@@@@@@@@@@@@@@@@', node);

//     }

//     // Transform the new node here and create a new node or
//     // create a new node field.
// }

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
        
    //1. get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js');

    //2. fetch markdown data
    const queryRes = await graphql(`
    query {
        allContentfulBlogPost {
            edges {
                node {
                    slug, 
                }
            }
        }
    }`)

    //3. create new pages
    queryRes.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: { slug: edge.node.slug }
        })
    })
}



