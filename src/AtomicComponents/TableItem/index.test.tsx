import React from "react";
import renderer from "react-test-renderer";
import TableItemComponent from "./index";

describe("TableItemComponent", () => {
  it("Should render item component", () => {
    const component = renderer.create(<TableItemComponent />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Should render item component with children", () => {
    const component = renderer.create(
      <TableItemComponent children={<p>I'm a children</p>} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Should render item component with an external style and children", () => {
    const component = renderer.create(
      <TableItemComponent
        otherStyle={{ justifyContent: "start" }}
        children={<p>I'm a children</p>}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
