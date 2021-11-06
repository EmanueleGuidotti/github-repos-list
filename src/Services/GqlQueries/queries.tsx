import {gql} from "@apollo/client";

export const GET_REPOS = gql`
  query ($start: Int!, $end: String) {
    search(
      type: REPOSITORY
      query: """
      name: "react"
      """
      first: $start
      after: $end
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

export const GET_REPOS_TOTAL = gql`
  query {
    search(
      type: REPOSITORY
      query: """
      name: "react"
      """
    ) {
      repositoryCount
    }
  }
`;
