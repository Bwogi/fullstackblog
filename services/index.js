import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
// from line 40 below, we created the above line no 3. We then create a .env file and paste NEXT_PUBLIC_GRAPHCMS_ENDPOINT
// we then place  this variable in the .env file and then got to the graphcms playground we go to settings>environments
// copy the master environment and paste it as an environment variable in the .env file
// then restart the server to activate this environment variable in the .env file

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            excerpt
            slug
            title
            updatedAt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  //   lets make a request here to get the data
  const result = await request(graphqlAPI, query)
  //   we then create the specified graphqlAPI above this function - see line 3 above

  // from line 7 above
  return result.postsConnection.edges
}
