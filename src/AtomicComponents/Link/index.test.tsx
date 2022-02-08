import React from "react";
import renderer from "react-test-renderer";
import LinkComponent from "./index";

describe("LinkComponent", () => {
  it("Should render link component", () => {
    const component = renderer.create(
      <LinkComponent link="https://github/test-link/" text="Some github repo" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
