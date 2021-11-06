import {gql} from "@apollo/client";

export const GET_REPOS = gql`
  query ($start: Int!) {
    search(
      type: REPOSITORY
      query: """
      name: "react"
      """
      first: $start
      end: null
    ) {
      pageInfo {
        startCursor
        hasNextPage
        endCursor
      }
      repos: edges {
        repo: node {
          ... on Repository {
            id
            name
            url
            forks {
              totalCount
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;
