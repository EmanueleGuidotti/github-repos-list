import { GET_REPOS } from "../../Services/GqlQueries/queries";
import { GraphQLError } from "graphql";

export const SuccessMock = [
  {
    request: {
      query: GET_REPOS,
      variables: {
        start: 100,
        search: "name: react ",
        before: null,
        after: null,
      },
    },
    result: {
      data: {
        search: {
          repositoryCount: 3382,
          pageInfo: {
            startCursor: "Y3Vyc29yOjE=",
            hasNextPage: true,
            endCursor: "Y3Vyc29yOjEwMA==",
            __typename: "PageInfo",
          },
          repos: [
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk0MTM2NzM0Mg==",
                name: "react-css-modules",
                url: "https://github.com/gajus/react-css-modules",
                forks: {
                  totalCount: 215,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 5228,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk1MzA3OTk3MQ==",
                name: "react-native-country-picker-modal",
                url: "https://github.com/xcarpentier/react-native-country-picker-modal",
                forks: {
                  totalCount: 592,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 864,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkzMTQ5MjQ5MA==",
                name: "NativeScript",
                url: "https://github.com/NativeScript/NativeScript",
                forks: {
                  totalCount: 1479,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 20636,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkzMjE3Mzg2Nw==",
                name: "bem-cn",
                url: "https://github.com/albburtsev/bem-cn",
                forks: {
                  totalCount: 22,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 309,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk2NDA1MTA2NQ==",
                name: "react-baby-names",
                url: "https://github.com/simonswiss/react-baby-names",
                forks: {
                  totalCount: 31,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 16,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMzgwNjk2MzU=",
                name: "class-names",
                url: "https://github.com/sindresorhus/class-names",
                forks: {
                  totalCount: 8,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 288,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxNzY1MzE0Mjc=",
                name: "resq",
                url: "https://github.com/baruchvlz/resq",
                forks: {
                  totalCount: 18,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 106,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkzMzI3ODQwNw==",
                name: "react-inline",
                url: "https://github.com/martinandert/react-inline",
                forks: {
                  totalCount: 15,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 447,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMTYxMjY2NzE=",
                name: "react-geocode",
                url: "https://github.com/shukerullah/react-geocode",
                forks: {
                  totalCount: 29,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 153,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk4NjYwNzQ4NA==",
                name: "babel-plugin-react-element-info",
                url: "https://github.com/suprraz/babel-plugin-react-element-info",
                forks: {
                  totalCount: 14,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 24,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk3NjkxMzIzNQ==",
                name: "react-native-sim-data",
                url: "https://github.com/pocesar/react-native-sim-data",
                forks: {
                  totalCount: 26,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 45,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxOTQ4MjY5NDM=",
                name: "react-ens-address",
                url: "https://github.com/ensdomains/react-ens-address",
                forks: {
                  totalCount: 7,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 30,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk0NTU5NjQ3MA==",
                name: "qingcheng-react",
                url: "https://github.com/Junnplus/qingcheng-react",
                forks: {
                  totalCount: 9,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 36,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk0MzgxODk2MA==",
                name: "react-display-name",
                url: "https://github.com/jurassix/react-display-name",
                forks: {
                  totalCount: 4,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 58,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMDAxNzI2ODA=",
                name: "site",
                url: "https://github.com/fabe/site",
                forks: {
                  totalCount: 9,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 52,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk1NTEzNzM0NA==",
                name: "react-style-proptype",
                url: "https://github.com/brigand/react-style-proptype",
                forks: {
                  totalCount: 12,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 55,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk4ODA3Nzk2OQ==",
                name: "babel-plugin-transform-react-qa-classes",
                url: "https://github.com/davesnx/babel-plugin-transform-react-qa-classes",
                forks: {
                  totalCount: 14,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 38,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkzNjE2MjExOQ==",
                name: "bem-classnames",
                url: "https://github.com/pocotan001/bem-classnames",
                forks: {
                  totalCount: 5,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 103,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk0NTQzMjU4OQ==",
                name: "react-router-named-routes",
                url: "https://github.com/adamziel/react-router-named-routes",
                forks: {
                  totalCount: 11,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 106,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk5MzM0NDY5OQ==",
                name: "react-native-ci-tools",
                url: "https://github.com/najeeb-rifaat/react-native-ci-tools",
                forks: {
                  totalCount: 12,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 30,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkzMzMzMDYyNA==",
                name: "react-suitcssify",
                url: "https://github.com/RallySoftware/react-suitcssify",
                forks: {
                  totalCount: 4,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 25,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMTI2NTUyNjM=",
                name: "named-urls",
                url: "https://github.com/tricoder42/named-urls",
                forks: {
                  totalCount: 5,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 73,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMDA2MDM4NDM=",
                name: "react-circular-color",
                url: "https://github.com/ubcent/react-circular-color",
                forks: {
                  totalCount: 9,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 29,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMTg1OTE1OTc=",
                name: "FancyFacebookBadge-Android",
                url: "https://github.com/Shashank02051997/FancyFacebookBadge-Android",
                forks: {
                  totalCount: 22,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 103,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkzMTIzNTU4NTQ=",
                name: "Tailwind-Styled-Component",
                url: "https://github.com/MathiasGilson/Tailwind-Styled-Component",
                forks: {
                  totalCount: 16,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 242,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk5NzAxODU5Mg==",
                name: "arpeggio",
                url: "https://github.com/korywakefield/arpeggio",
                forks: {
                  totalCount: 5,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 45,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk0NjE4ODI4NA==",
                name: "babel-plugin-transform-react-stateless-component-name",
                url: "https://github.com/wyze/babel-plugin-transform-react-stateless-component-name",
                forks: {
                  totalCount: 8,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 33,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk1NTU3MjgxOQ==",
                name: "use-named-routes",
                url: "https://github.com/taion/use-named-routes",
                forks: {
                  totalCount: 8,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 106,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk2MTU3NjIyOQ==",
                name: "sayitlikeme",
                url: "https://github.com/albacoretuna/sayitlikeme",
                forks: {
                  totalCount: 12,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 22,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyNjUxMTU2OA==",
                name: "Morphos",
                url: "https://github.com/wapmorgan/Morphos",
                forks: {
                  totalCount: 82,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 678,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk3Nzc2OTUwNg==",
                name: "merge-jsons-webpack-plugin",
                url: "https://github.com/tettusud/merge-jsons-webpack-plugin",
                forks: {
                  totalCount: 18,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 30,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyNzc5MTE4NA==",
                name: "react-suitcss",
                url: "https://github.com/acdlite/react-suitcss",
                forks: {
                  totalCount: 3,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 26,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk0NjI3NjA1OQ==",
                name: "d3-react-squared-dogs-blog",
                url: "https://github.com/bgrsquared/d3-react-squared-dogs-blog",
                forks: {
                  totalCount: 5,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 29,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk0ODI4MzIyNw==",
                name: "react-attr-converter",
                url: "https://github.com/hatashiro/react-attr-converter",
                forks: {
                  totalCount: 3,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 7,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxNDg0ODE3NzA=",
                name: "react-native-launch-application",
                url: "https://github.com/lvlrSajjad/react-native-launch-application",
                forks: {
                  totalCount: 6,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 7,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk1NDU5NjQzNA==",
                name: "react-redux-custom-store",
                url: "https://github.com/emmenko/react-redux-custom-store",
                forks: {
                  totalCount: 2,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 38,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxNjI5NzQxNjM=",
                name: "react-native-countries",
                url: "https://github.com/talut/react-native-countries",
                forks: {
                  totalCount: 3,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 12,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMDQzNTc1Nzg=",
                name: "babel-plugin-react-component-data-attribute",
                url: "https://github.com/lemonmade/babel-plugin-react-component-data-attribute",
                forks: {
                  totalCount: 6,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 15,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyODE2Mzc1OTE=",
                name: "react-testing-library-course",
                url: "https://github.com/Arthur-Conan-Dog/react-testing-library-course",
                forks: {
                  totalCount: 7,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 6,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk3NDUxNzY1NQ==",
                name: "eslint-plugin-react-filenames",
                url: "https://github.com/mapbox/eslint-plugin-react-filenames",
                forks: {
                  totalCount: 4,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 3,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkzMTMwNjE3NA==",
                name: "smart-css",
                url: "https://github.com/hackhat/smart-css",
                forks: {
                  totalCount: 3,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 71,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkzMTY2NjIxMjQ=",
                name: "codechef-practice-tool",
                url: "https://github.com/anubhavp28/codechef-practice-tool",
                forks: {
                  totalCount: 5,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 4,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk0MDI4MTg0MDM=",
                name: "kampusin",
                url: "https://github.com/ninedotslabs/kampusin",
                forks: {
                  totalCount: 31,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 9,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyNDQ3NDM0Nw==",
                name: "Zooniverse-React-Components",
                url: "https://github.com/zooniverse/Zooniverse-React-Components",
                forks: {
                  totalCount: 5,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 1,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk1MDQxNDA2Mg==",
                name: "GirdShow-React-Native",
                url: "https://github.com/wangchenguang1/GirdShow-React-Native",
                forks: {
                  totalCount: 7,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 18,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk3MjcxODc2MQ==",
                name: "react-body",
                url: "https://github.com/koistya/react-body",
                forks: {
                  totalCount: 3,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 10,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk0NzA3MjI4Mg==",
                name: "react-native-select-contact-android",
                url: "https://github.com/rhaker/react-native-select-contact-android",
                forks: {
                  totalCount: 5,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 14,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk1OTI1MTAwMA==",
                name: "react-intl-modules-loader",
                url: "https://github.com/asztal/react-intl-modules-loader",
                forks: {
                  totalCount: 4,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 5,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMzczOTc5ODU=",
                name: "finding-nora",
                url: "https://github.com/vnglst/finding-nora",
                forks: {
                  totalCount: 3,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 40,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMTkzMDcxMDY=",
                name: "hawaii-react-js",
                url: "https://github.com/NashReact/hawaii-react-js",
                forks: {
                  totalCount: 4,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 4,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyNDQwMzA1Ng==",
                name: "react-lensed-state",
                url: "https://github.com/Laiff/react-lensed-state",
                forks: {
                  totalCount: 2,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 9,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMzAzMjc5NjM=",
                name: "react-router-namesake",
                url: "https://github.com/jhsu/react-router-namesake",
                forks: {
                  totalCount: 2,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 6,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk0NDg1MjY3Ng==",
                name: "shorti",
                url: "https://github.com/tonyspiro/shorti",
                forks: {
                  totalCount: 3,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 22,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxNjQ3NTI4ODQ=",
                name: "shade-generator",
                url: "https://github.com/csandman/shade-generator",
                forks: {
                  totalCount: 4,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 21,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyNjcxNTI4MTQ=",
                name: "react-js-spa-app-starter-template-framework",
                url: "https://github.com/Kaybarax/react-js-spa-app-starter-template-framework",
                forks: {
                  totalCount: 1,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 4,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMTI2NjkwMTQ=",
                name: "react-excelstarter-sample",
                url: "https://github.com/microsoftgraph/react-excelstarter-sample",
                forks: {
                  totalCount: 7,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 16,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxOTg1MTIwNTE=",
                name: "random-names",
                url: "https://github.com/ayonious/random-names",
                forks: {
                  totalCount: 3,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 3,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk2NTU4MDMzMA==",
                name: "react-buggy",
                url: "https://github.com/peterbe/react-buggy",
                forks: {
                  totalCount: 1,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 2,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk0MTkyMjgxOA==",
                name: "react-classnames",
                url: "https://github.com/jide/react-classnames",
                forks: {
                  totalCount: 1,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 9,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyOTc1NTM3Mw==",
                name: "react-flux-gulp-browserify-reactrouter-firebase-starterkit",
                url: "https://github.com/tylermcginnis/react-flux-gulp-browserify-reactrouter-firebase-starterkit",
                forks: {
                  totalCount: 2,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 9,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyNjgzMjg5MDc=",
                name: "foodies",
                url: "https://github.com/heytulsiprasad/foodies",
                forks: {
                  totalCount: 5,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 13,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxODA3ODgxNDY=",
                name: "react-native-country-list",
                url: "https://github.com/subinspathilettu/react-native-country-list",
                forks: {
                  totalCount: 5,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 4,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk4MDI5MTQ2MA==",
                name: "babel-plugin-transform-react-jsx-location",
                url: "https://github.com/adrianton3/babel-plugin-transform-react-jsx-location",
                forks: {
                  totalCount: 2,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 13,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyMTc0OTQwMzA=",
                name: "react-challenge-191026",
                url: "https://github.com/hichemamb/react-challenge-191026",
                forks: {
                  totalCount: 6,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 0,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxNzE0NTQzODc=",
                name: "bem-react-classname",
                url: "https://github.com/alfa-laboratory/bem-react-classname",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 14,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk5MTE5OTkzNw==",
                name: "babel-plugin-styled-name",
                url: "https://github.com/sergeysova/babel-plugin-styled-name",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 16,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk5MzU0OTQzMg==",
                name: "bem-naming",
                url: "https://github.com/bem-sdk-archive/bem-naming",
                forks: {
                  totalCount: 1,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 6,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk4MTg3MDQwMg==",
                name: "babel-plugin-display-name-custom",
                url: "https://github.com/esamattis/babel-plugin-display-name-custom",
                forks: {
                  totalCount: 1,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 15,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyNDc5ODY1ODI=",
                name: "angular-typesafe-reactive-forms-helper",
                url: "https://github.com/rpbeukes/angular-typesafe-reactive-forms-helper",
                forks: {
                  totalCount: 2,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 8,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkzNzA3MDc1ODY=",
                name: "react_test",
                url: "https://github.com/Gyrix-TechnoLabs/react_test",
                forks: {
                  totalCount: 3,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 0,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyMzYyOTc4NTg=",
                name: "babel-plugin-react-anonymous-display-name",
                url: "https://github.com/patrykkopycinski/babel-plugin-react-anonymous-display-name",
                forks: {
                  totalCount: 2,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 18,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMDQ2MzYwODM=",
                name: "react-navigation-current-route",
                url: "https://github.com/ayushinigam/react-navigation-current-route",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 8,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkzMjM0MjM4Njc=",
                name: "MythologyOfReactJs",
                url: "https://github.com/NisanurBulut/MythologyOfReactJs",
                forks: {
                  totalCount: 1,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 13,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk0MzU5NTQ5MQ==",
                name: "nbem",
                url: "https://github.com/ideyuta/nbem",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 28,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMTkyMDgxMDQ=",
                name: "js-popular-variable-frontend",
                url: "https://github.com/billcccheng/js-popular-variable-frontend",
                forks: {
                  totalCount: 1,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 27,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxOTEwNTkxMjg=",
                name: "postman-fetch",
                url: "https://github.com/HamedNN76/postman-fetch",
                forks: {
                  totalCount: 2,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 10,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyMDYxMTg5MzA=",
                name: "react-lazy-named",
                url: "https://github.com/grgur/react-lazy-named",
                forks: {
                  totalCount: 1,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 7,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkzODI3NDUwMjE=",
                name: "react-hook-dragula",
                url: "https://github.com/jpribyl/react-hook-dragula",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 11,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk4MjE4Mzk1OQ==",
                name: "bem-react-helper",
                url: "https://github.com/igoradamenko/bem-react-helper",
                forks: {
                  totalCount: 1,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 11,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxNTg0NzI0NzU=",
                name: "mapped-system",
                url: "https://github.com/samtietjen/mapped-system",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 9,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxNjY0NTE4NjM=",
                name: "cool-name",
                url: "https://github.com/PiyushPawar17/cool-name",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 5,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMjYxNDU3NjI=",
                name: "babel-plugin-transform-react-styled-components-qa",
                url: "https://github.com/hibikiledo/babel-plugin-transform-react-styled-components-qa",
                forks: {
                  totalCount: 3,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 1,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxODgyNzA5NzE=",
                name: "helperStyles",
                url: "https://github.com/WaftTech/helperStyles",
                forks: {
                  totalCount: 2,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 1,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyOTQ5NDIyODk=",
                name: "name-project-front",
                url: "https://github.com/practicalit/name-project-front",
                forks: {
                  totalCount: 2,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 0,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxMDcxNTczNTY=",
                name: "action-utils",
                url: "https://github.com/GrooveLabs/action-utils",
                forks: {
                  totalCount: 2,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 3,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkzODMzNTAzNTQ=",
                name: "variant-classnames",
                url: "https://github.com/mattvalleycodes/variant-classnames",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 8,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk0NjI2OTc5Mg==",
                name: "babel-plugin-css-in-js",
                url: "https://github.com/martinandert/babel-plugin-css-in-js",
                forks: {
                  totalCount: 8,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 302,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk2MTQzNTE0OA==",
                name: "bem-cn-lite",
                url: "https://github.com/mistakster/bem-cn-lite",
                forks: {
                  totalCount: 1,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 20,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyODM2ODk4MjA=",
                name: "React-Chat-Application",
                url: "https://github.com/Siddhant-K-code/React-Chat-Application",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 4,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyMTY4NTc1MDU=",
                name: "react-memo-name-shuffle",
                url: "https://github.com/rossbulat/react-memo-name-shuffle",
                forks: {
                  totalCount: 2,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 4,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk3NTU0Nzk5Nw==",
                name: "react-docs-webapp",
                url: "https://github.com/TangXiaoLv/react-docs-webapp",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 5,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxNDAzNDg3Njg=",
                name: "social-header-react-native",
                url: "https://github.com/Osula/social-header-react-native",
                forks: {
                  totalCount: 2,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 3,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk2MDE1NjI2MQ==",
                name: "reactjs-demo-7plus",
                url: "https://github.com/rainbow57/reactjs-demo-7plus",
                forks: {
                  totalCount: 4,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 0,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk4OTkzNzUyNw==",
                name: "fela-react-prop",
                url: "https://github.com/codepunkt/fela-react-prop",
                forks: {
                  totalCount: 1,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 7,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxNDE3NDEzMDg=",
                name: "react-ui-avatars",
                url: "https://github.com/ozzywalsh/react-ui-avatars",
                forks: {
                  totalCount: 1,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 7,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnk5NDk2MDQ4Mw==",
                name: "lloop",
                url: "https://github.com/donavon/lloop",
                forks: {
                  totalCount: 1,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 6,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyMDYyMzcwNDk=",
                name: "__template__",
                url: "https://github.com/rescript-react-native/__template__",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 6,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkzOTg4ODQzNjg=",
                name: "react-ens-name",
                url: "https://github.com/cjpais/react-ens-name",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 4,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkyOTI0MDM0OTg=",
                name: "Music-webApp",
                url: "https://github.com/JakeZT/Music-webApp",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 12,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
            {
              repo: {
                id: "MDEwOlJlcG9zaXRvcnkxNTIzOTAwNTU=",
                name: "Explore-Reactor-Room",
                url: "https://github.com/shallwe999/Explore-Reactor-Room",
                forks: {
                  totalCount: 0,
                  __typename: "RepositoryConnection",
                },
                stargazers: {
                  totalCount: 3,
                  __typename: "StargazerConnection",
                },
                __typename: "Repository",
              },
              __typename: "SearchResultItemEdge",
            },
          ],
          __typename: "SearchResultItemConnection",
        },
      },
    },
  },
];
export const ErrorMock = [
  {
    request: {
      query: GET_REPOS,
      variables: {
        start: 100,
        end: null,
      },
    },
    result: {
      errors: [new GraphQLError("Error!")],
    },
  },
];
