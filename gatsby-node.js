const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulPage {
        edges {
          node {
            pathName
            id
            title
          }
        }
      }
    }
  `)
  
  const templatePath = path.resolve(`src/templates/page.jsx`)

  result.data.allContentfulPage.edges.forEach(({ node }) => {
    createPage({
      path: node.pathName,
      component: templatePath,
      context: {
        id: node.id,
        title: node.title 
      },
    })
  })
}