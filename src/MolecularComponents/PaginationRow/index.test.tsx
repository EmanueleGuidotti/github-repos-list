import React from "react";
import renderer, {act} from "react-test-renderer";
import PaginationRow from "./index";
import TestRenderer from "react-test-renderer";
import {MockedProvider} from "@apollo/client/testing";
import {waitFor} from "@testing-library/react";
import {GET_REPOS_TOTAL} from "../../Services/GqlQueries/queries";
import {GraphQLError} from "graphql";

const SuccessMocks = [
    {
        request: {
            query: GET_REPOS_TOTAL,
        },
        result: {
            data: {
                "search":
                        {
                            "repositoryCount": 3378,
                            "__typename": "SearchResultItemConnection"
                        }
                }
            },
        },
];

const ErrorMocks = [
    {
        request: {
            query: GET_REPOS_TOTAL,
        },
        result: {
            errors: [new GraphQLError("Error!")],
        },
    },
];

describe("TableRowComponent", () => {
    it("render pagination loading state", () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={SuccessMocks} addTypename={false}>
                <PaginationRow onClickParent={()=>{}} />
            </MockedProvider>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("render pagination error state", async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={ErrorMocks} addTypename={false}>
                <PaginationRow onClickParent={()=>{}} />
            </MockedProvider>
        );
        await act(async () => {
            await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
        });
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("render pagination row component", async () => {
        const component = TestRenderer.create(
            <MockedProvider mocks={SuccessMocks} addTypename={false}>
                <PaginationRow onClickParent={() => {}} />
            </MockedProvider>
        );
        await act(async () => {
            await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
        });
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
