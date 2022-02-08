import { gql } from "@apollo/client";

export const GET_REPOS = gql`
  query ($start: Int!, $search: String!, $before: String, $after: String) {
    search(
      type: REPOSITORY
      query: $search
      first: $start
      after: $after
      before: $before
    ) {
      repositoryCount
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
