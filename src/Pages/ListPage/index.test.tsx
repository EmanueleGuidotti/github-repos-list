import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });
import TestRenderer, { act } from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import ListPage from "./index";
import { waitFor } from "@testing-library/react";
import toJson from "enzyme-to-json";
import { SuccessMock, ErrorMock } from "./test.fixture";

describe("ListPageComponent", () => {
  it("Should render loading state", () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={SuccessMock} addTypename={false}>
        <ListPage />
      </MockedProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render error state", async () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={ErrorMock} addTypename={false}>
        <ListPage />
      </MockedProvider>
    );
    await act(async () => {
      await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
    });
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render a list of items", async () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={SuccessMock} addTypename={false}>
        <ListPage />
      </MockedProvider>
    );
    await act(async () => {
      await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
    });
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should filter in the list", async () => {
    const component = mount(
      <MockedProvider mocks={SuccessMock} addTypename={false}>
        <ListPage />
      </MockedProvider>
    );
    await act(async () => {
      await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
    });
    const searchComponent = component.find("input#searchComponent");
    searchComponent.simulate("change", {
      target: { value: "css", id: "searchComponent" },
    });
    expect(component.find("input#searchComponent").props().value).toEqual(
      "css"
    );
    await act(async () => {
      await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
    });
    expect(toJson(component)).toMatchSnapshot();
  });

  it("Should send pagination event", async () => {
    const component = mount(
      <MockedProvider mocks={SuccessMock} addTypename={false}>
        <ListPage />
      </MockedProvider>
    );
    await act(async () => {
      await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
    });
    const paginationItem = component
      .find("li.ant-pagination-item.ant-pagination-item-1")
      .find("a");
    paginationItem.simulate("click");
    await act(async () => {
      await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
    });
    expect(toJson(component)).toMatchSnapshot();
  });
});
