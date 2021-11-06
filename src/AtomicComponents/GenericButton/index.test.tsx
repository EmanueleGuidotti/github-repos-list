import React from "react";
import renderer from "react-test-renderer";
import GenericButton from "./index";

describe("GenericButtonComponent", () => {
    it("render Generic Button component", () => {
        const component = renderer.create(<GenericButton  text="100" onClickCursor={()=>{}} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
