import React from "react";
import renderer from "react-test-renderer";
import GenericButton from "./index";

describe("GenericButtonComponent", () => {
  it("Should render Generic Button component", () => {
    const component = renderer.create(
      <GenericButton text="100" onClickCursor={() => {}} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Should send a click event", () => {
    const mockCallBack = jest.fn();
    const eventMock = { preventDefault: jest.fn() };
    const component = renderer.create(
      <GenericButton text="100" onClickCursor={mockCallBack} />
    ).root;
    const button = component.findByProps({
      type: "button",
    });
    button.props.onClick(eventMock);
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
