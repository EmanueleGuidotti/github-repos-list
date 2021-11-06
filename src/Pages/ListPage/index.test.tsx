import React from "react";
import TestRenderer, {act} from "react-test-renderer";
import {GraphQLError} from "graphql";
import {MockedProvider} from "@apollo/client/testing";
import {GET_REPOS} from "../../Services/GqlQueries/queries";
import ListPage from "./index";
import {waitFor} from "@testing-library/react";

const SuccessMocks = [
    {
        request: {
            query: GET_REPOS,
            variables: {
                start: 100,
            },
        },
        result: {
            data: {
                search: {
                    pageInfo: {
                        startCursor: "Y3Vyc29yOjIwMQ==",
                        hasNextPage: true,
                        endCursor: "Y3Vyc29yOjMwMA==",
                        __typename: "PageInfo",
                    },
                    repos: [
                        {
                            repo: {
                                id: "MDEwOlJlcG9zaXRvcnk4NjI0MzIwMw==",
                                name: "Search_by_react",
                                url: "https://github.com/kei0000/Search_by_react",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxNDgyMzc1MzI=",
                                name: "greek-name-mapper-demo",
                                url: "https://github.com/chrispanag/greek-name-mapper-demo",
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
                                id: "MDEwOlJlcG9zaXRvcnkyNjc2OTA4Njg=",
                                name: "baby-names-react",
                                url: "https://github.com/babakjahangiri/baby-names-react",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzNTY0NTQzMDA=",
                                name: "React-name-picker",
                                url: "https://github.com/gizemkk/React-name-picker",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnk5OTM0Nzc4NQ==",
                                name: "good_dog_name--react",
                                url: "https://github.com/rbnhmll/good_dog_name--react",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnk2MTU2NTExNA==",
                                name: "simple-react-wp-theme",
                                url: "https://github.com/jacob-larsen-netbooster/simple-react-wp-theme",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxNjk4OTk2NzU=",
                                name: "hackerrank-react-q1",
                                url: "https://github.com/spark1031/hackerrank-react-q1",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzMzg5MTY0OTQ=",
                                name: "symfony-react-sass-template",
                                url: "https://github.com/Thomas-Radulesco/symfony-react-sass-template",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnk3NzEwNjUyMw==",
                                name: "React-pic-download",
                                url: "https://github.com/Joudee/React-pic-download",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzOTA0MzI4ODA=",
                                name: "react-todo-app",
                                url: "https://github.com/zach-pike/react-todo-app",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyNjg4NzI5ODE=",
                                name: "first-react-app",
                                url: "https://github.com/joshkaposh/first-react-app",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzODQ2MjY1NDM=",
                                name: "React-NameIt",
                                url: "https://github.com/AAB007209/React-NameIt",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzNzU1ODgzNTM=",
                                name: "react-name-tag-generator",
                                url: "https://github.com/ianmcdavid/react-name-tag-generator",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnk2ODIzMjU2MQ==",
                                name: "react_w_node_scaffolding",
                                url: "https://github.com/falexTorres/react_w_node_scaffolding",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxODE2NDU3MjE=",
                                name: "react-component-api-POC",
                                url: "https://github.com/qtcoder999/react-component-api-POC",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzNDc3MzAwODg=",
                                name: "baby-names-react",
                                url: "https://github.com/mikinet/baby-names-react",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnk3OTI5NDQ1Ng==",
                                name: "common-react-components",
                                url: "https://github.com/albertzzy/common-react-components",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxNzUwNzgzMjU=",
                                name: "reactjs-the-base-syntax",
                                url: "https://github.com/yros1/reactjs-the-base-syntax",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxNTQxODY2NDM=",
                                name: "My-First-React-Project",
                                url: "https://github.com/quonn-s-bernard/My-First-React-Project",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyMTkxNzQ5Mjc=",
                                name: "7react7",
                                url: "https://github.com/Desalwe/7react7",
                                forks: {
                                    totalCount: 1,
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
                                id: "MDEwOlJlcG9zaXRvcnkyNjc2ODg5Nzg=",
                                name: "baby-names-react",
                                url: "https://github.com/AKaramifar/baby-names-react",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzODE3MDQ4Mzg=",
                                name: "first-react-native-app",
                                url: "https://github.com/anshullaikar/first-react-native-app",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzNzM2NDI3ODM=",
                                name: "baby-names-react",
                                url: "https://github.com/Jontas77/baby-names-react",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzOTgyMTcyOTM=",
                                name: "facebook-clone-reactjs",
                                url: "https://github.com/lethaianhle/facebook-clone-reactjs",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxMjU5NTc4NTY=",
                                name: "react-pizza-starcraft",
                                url: "https://github.com/khaleohansana/react-pizza-starcraft",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyOTc0MTk4MDY=",
                                name: "react-native-tutorial",
                                url: "https://github.com/someSOAP/react-native-tutorial",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnk3NDQzODcxNw==",
                                name: "reactjs-redux-imgur-express",
                                url: "https://github.com/Gastonius/reactjs-redux-imgur-express",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzNzMzMTc4NTQ=",
                                name: "learn-react-hooks",
                                url: "https://github.com/Sebastion-Vigil/learn-react-hooks",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxOTg3MjEzMDk=",
                                name: "React-Context-API-Example",
                                url: "https://github.com/JupiterLikeThePlanet/React-Context-API-Example",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzMzQxMDQ2OTM=",
                                name: "Visual-Workflow-Reactjs",
                                url: "https://github.com/Rishabhraghwendra18/Visual-Workflow-Reactjs",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyOTUxNzIzMzM=",
                                name: "Movie-Finder",
                                url: "https://github.com/Saicharan67/Movie-Finder",
                                forks: {
                                    totalCount: 1,
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
                                id: "MDEwOlJlcG9zaXRvcnkzOTE5NTk5MzY=",
                                name: "server-client-react",
                                url: "https://github.com/RacheliBlass512/server-client-react",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxODc1NDA5OTM=",
                                name: "react-vuttr-manager",
                                url: "https://github.com/cleandersonlobo/react-vuttr-manager",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzMzUwMjczMTY=",
                                name: "slotted-react-component",
                                url: "https://github.com/starkraving/slotted-react-component",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyNTU1OTk0ODc=",
                                name: "covid-19-tracker-react",
                                url: "https://github.com/vkpdeveloper/covid-19-tracker-react",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnk0NjMxNTcwMA==",
                                name: "react-easy-test",
                                url: "https://github.com/zackify/react-easy-test",
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
                                id: "MDEwOlJlcG9zaXRvcnkyMzg2MzQyOTk=",
                                name: "reactexpressDB_StarterKit",
                                url: "https://github.com/MkDs17/reactexpressDB_StarterKit",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyODY0MjI1ODM=",
                                name: "94YB-ReactNative",
                                url: "https://github.com/jeongminkyo/94YB-ReactNative",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxNjg0NDAxNTQ=",
                                name: "react2project",
                                url: "https://github.com/Tduncan14/react2project",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnk5ODI2NjI4MA==",
                                name: "ReactCompanyComponent",
                                url: "https://github.com/nikunj792/ReactCompanyComponent",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzNjc2NTY3ODg=",
                                name: "ReactComponentMaker",
                                url: "https://github.com/DCastaban/ReactComponentMaker",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxNjk5MTI1MTA=",
                                name: "ReactJS-with-Redux-Certification-Training",
                                url: "https://github.com/antillgrp/ReactJS-with-Redux-Certification-Training",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyMDQ5NTcxNDE=",
                                name: "phonebook_react",
                                url: "https://github.com/faisallarai/phonebook_react",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyNjQ1ODg2Njg=",
                                name: "React-NBA",
                                url: "https://github.com/SaoriKaku/React-NBA",
                                forks: {
                                    totalCount: 1,
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
                                id: "MDEwOlJlcG9zaXRvcnkzNTk3Mzk5Ng==",
                                name: "react_slideshow",
                                url: "https://github.com/avifoxi/react_slideshow",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxMTM1MTYyNjk=",
                                name: "React-hua",
                                url: "https://github.com/1562600869/React-hua",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnk5MTg1MjM5MA==",
                                name: "react-pencil",
                                url: "https://github.com/juliankrispel/react-pencil",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyMDQwMzc1MzE=",
                                name: "react-list",
                                url: "https://github.com/sujitsah/react-list",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyMDcxOTExNzU=",
                                name: "docker-react",
                                url: "https://github.com/mikey-mo/docker-react",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxNjIzNjI2OTc=",
                                name: "Chain-Reaction",
                                url: "https://github.com/MeowCat-Studio/Chain-Reaction",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxMjk2NDI2NTc=",
                                name: "React-Router-Redux-Thunk-Starter",
                                url: "https://github.com/njho/React-Router-Redux-Thunk-Starter",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzMzg0ODExODM=",
                                name: "react-basics",
                                url: "https://github.com/karuifeather/react-basics",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzMjI4MjQ4ODk=",
                                name: "camera-roll-picker",
                                url: "https://github.com/bacarybruno/camera-roll-picker",
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
                                id: "MDEwOlJlcG9zaXRvcnkxMjgxMDkzMjg=",
                                name: "react-electron-typescript-firebase-boilerplate",
                                url: "https://github.com/AKPWebDesign/react-electron-typescript-firebase-boilerplate",
                                forks: {
                                    totalCount: 1,
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
                                id: "MDEwOlJlcG9zaXRvcnk0NTc1ODc2Mg==",
                                name: "name_game_reactjs",
                                url: "https://github.com/LaunchAcademy/name_game_reactjs",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzMTkwMTM1NzQ=",
                                name: "boardGames",
                                url: "https://github.com/sergio582/boardGames",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyODk4NDM2NzM=",
                                name: "robofriends",
                                url: "https://github.com/Manasav1510/robofriends",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxMjc5NjA3MzY=",
                                name: "wakanda",
                                url: "https://github.com/speakingcode/wakanda",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzODk5NjM3MzI=",
                                name: "Nameit",
                                url: "https://github.com/csureshkumargit/Nameit",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyNzI1MjgzNDg=",
                                name: "create-react-app-renata-james-trelloyes",
                                url: "https://github.com/thinkful-ei-panda/create-react-app-renata-james-trelloyes",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzOTkwMTYzMjA=",
                                name: "dnd-name",
                                url: "https://github.com/thelibstyles/dnd-name",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyMTY5Njc4MTY=",
                                name: "React_Native_Seacrh_ByName",
                                url: "https://github.com/setiawan19/React_Native_Seacrh_ByName",
                                forks: {
                                    totalCount: 0,
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
                                id: "R_kgDOGRAqxA",
                                name: "nameit",
                                url: "https://github.com/Ridhi-priya/nameit",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzMDQ0MTgxNA==",
                                name: "justsomename",
                                url: "https://github.com/frequencydesign/justsomename",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzMzI5NDk3MjI=",
                                name: "monkeyspan",
                                url: "https://github.com/tonytino/monkeyspan",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxMjM0ODc1Mzk=",
                                name: "React-PickMyTeam",
                                url: "https://github.com/daniel-cottone/React-PickMyTeam",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnk0MDU3MzU3NzI=",
                                name: "nametags-app-react",
                                url: "https://github.com/AlejandraValdivia/nametags-app-react",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnk3ODc1Mzg3Nw==",
                                name: "treematch",
                                url: "https://github.com/anyong/treematch",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyMjczMzYwOTA=",
                                name: "colorsapp-firebase-react-native",
                                url: "https://github.com/hfshan247/colorsapp-firebase-react-native",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzMjc2NDc0NzQ=",
                                name: "name-application",
                                url: "https://github.com/Tambourin/name-application",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyMDM1NzU3NzI=",
                                name: "project",
                                url: "https://github.com/jucoAllison/project",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzMTk0OTM2MTE=",
                                name: "pair-gen",
                                url: "https://github.com/Christian0411/pair-gen",
                                forks: {
                                    totalCount: 1,
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
                                id: "MDEwOlJlcG9zaXRvcnkzNjU2OTkzMzM=",
                                name: "Name-your-app",
                                url: "https://github.com/daman86999/Name-your-app",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzOTA5NjIyMzQ=",
                                name: "Class_Function_Component_React_Native",
                                url: "https://github.com/MeAdarshMishra/Class_Function_Component_React_Native",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyNzkwOTIyMDQ=",
                                name: "react-native-boilerplate-2020",
                                url: "https://github.com/rahulworld/react-native-boilerplate-2020",
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
                        {
                            repo: {
                                id: "R_kgDOGNt-FQ",
                                name: "React",
                                url: "https://github.com/Sunidhimathur/React",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyNzk5OTUxMDM=",
                                name: "react_github_pages_test",
                                url: "https://github.com/aaevan/react_github_pages_test",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnk4MzM3NzExOA==",
                                name: "react-trello-board",
                                url: "https://github.com/0peron/react-trello-board",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxNjk3MzcxNTM=",
                                name: "react-native-test",
                                url: "https://github.com/andresdegano/react-native-test",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyMDc4NTkwMDU=",
                                name: "graphql-react-playground",
                                url: "https://github.com/dgtlmonk/graphql-react-playground",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyNTY0OTg3MDY=",
                                name: "react-baby-names",
                                url: "https://github.com/mort-gh/react-baby-names",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyODM3NDI3MDU=",
                                name: "use-breakpoints-width",
                                url: "https://github.com/Halo-Lab/use-breakpoints-width",
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
                        {
                            repo: {
                                id: "MDEwOlJlcG9zaXRvcnkzODQ1MjQwNzY=",
                                name: "name-generator",
                                url: "https://github.com/neethunsr/name-generator",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxNzA1NTkxNjA=",
                                name: "Laravel_react_todo_list",
                                url: "https://github.com/Badalmishra/Laravel_react_todo_list",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyNTMwNjMxNjU=",
                                name: "react-hacker-news-clone",
                                url: "https://github.com/MohammedGhawanni/react-hacker-news-clone",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyOTQxNzk1NzY=",
                                name: "Basic-React-Boilerplate-Creator",
                                url: "https://github.com/JustinD-A/Basic-React-Boilerplate-Creator",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxMzUzMzUzMTY=",
                                name: "Weather-app-React",
                                url: "https://github.com/ihab-alazzawi/Weather-app-React",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxNTE2NDYzNzM=",
                                name: "React-Whois-Domain-Checker",
                                url: "https://github.com/huseyn0w/React-Whois-Domain-Checker",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzODI3MDgyOTY=",
                                name: "ytpl-react-native",
                                url: "https://github.com/shy-tan/ytpl-react-native",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzODA3Nzg0MTQ=",
                                name: "baby-names-react",
                                url: "https://github.com/Andile-coder/baby-names-react",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkxNTg5ODQ3MjY=",
                                name: "react-tetris-app",
                                url: "https://github.com/hwbell/react-tetris-app",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzOTU3MjU0MTk=",
                                name: "Github-Profile-Search-with-ReactJS",
                                url: "https://github.com/gokseloz/Github-Profile-Search-with-ReactJS",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkzNDI5NTMwOTU=",
                                name: "Reactsapp",
                                url: "https://github.com/surendrak800/Reactsapp",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyODI0Mzg5NzE=",
                                name: "react-native-with-typescript-app-starter-template",
                                url: "https://github.com/Kaybarax/react-native-with-typescript-app-starter-template",
                                forks: {
                                    totalCount: 1,
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
                                id: "MDEwOlJlcG9zaXRvcnkxMTQ2ODc5ODQ=",
                                name: "hyperbole",
                                url: "https://github.com/arthurCormack/hyperbole",
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
                        {
                            repo: {
                                id: "MDEwOlJlcG9zaXRvcnkxOTUzNTY1ODU=",
                                name: "react-native-academic-research-of-rookie-s",
                                url: "https://github.com/lykqnbz/react-native-academic-research-of-rookie-s",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnkyNjQ1MjE1MDU=",
                                name: "ReactSpringProject",
                                url: "https://github.com/raghukhanal/ReactSpringProject",
                                forks: {
                                    totalCount: 0,
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
                                id: "MDEwOlJlcG9zaXRvcnk4NzcyNTc4Ng==",
                                name: "Legionizer",
                                url: "https://github.com/sfirrin/Legionizer",
                                forks: {
                                    totalCount: 1,
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
                                id: "MDEwOlJlcG9zaXRvcnkyNzg2NzIzODY=",
                                name: "Custom-Name-Picker",
                                url: "https://github.com/safi-alt/Custom-Name-Picker",
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
                        {
                            repo: {
                                id: "MDEwOlJlcG9zaXRvcnkxMjQyODI0OTY=",
                                name: "redux-data-layer",
                                url: "https://github.com/dmsnell/redux-data-layer",
                                forks: {
                                    totalCount: 1,
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

const ErrorMocks = [
    {
        request: {
            query: GET_REPOS,
        },
        result: {
            errors: [new GraphQLError("Error!")],
        },
    },
];

describe("ListPageComponent", () => {
    it("render loading state", () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={SuccessMocks} addTypename={false}>
                <ListPage />
            </MockedProvider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("render error state", async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={ErrorMocks} addTypename={false}>
                <ListPage />
            </MockedProvider>
        );
        await act(async () => {
            await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
        });
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("render a list of items", async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={SuccessMocks} addTypename={false}>
                <ListPage />
            </MockedProvider>
        );
        await act(async () => {
            await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
        });
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
