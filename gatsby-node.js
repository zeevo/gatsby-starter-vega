exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic("failed to create posts ", result.errors);
  }
  const posts = result.data.allMdx.nodes;
  posts.forEach((page) => {
    actions.createPage({
      path: page.frontmatter.path,
      component: require.resolve("./src/templates/Post.js"),
      context: {
        pathSlug: page.frontmatter.path,
      },
    });
  });
};
