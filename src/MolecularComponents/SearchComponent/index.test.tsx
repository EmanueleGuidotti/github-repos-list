import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";
import SearchComponent from "./index";
import TestRenderer from "react-test-renderer";
import { Search } from "../../Interfaces/interfaces";

describe("TableRowComponent", () => {
  it("Should render search component", async () => {
    const component = TestRenderer.create(
      <SearchComponent id={"searchComponent"} search={(data) => {}} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Should send search event", async () => {
    const mockCallBack = jest.fn();
    const component = mount(
      <SearchComponent
        id={"searchComponent"}
        search={(data: Search) => mockCallBack(data)}
      />
    );
    component.find("span").find("input").simulate("keyUp", { keyCode: 9 });
    expect(mockCallBack).toHaveBeenCalledTimes(1);
    component
      .find("span")
      .find("input")
      .simulate("change", { target: { value: "Hello" } });
    expect(toJson(component)).toMatchSnapshot();
  });
});
