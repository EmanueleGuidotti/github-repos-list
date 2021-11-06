import React from "react";
import renderer from "react-test-renderer";
import TableRow from "./index";

describe("TableRowComponent", () => {
    it("render single row", () => {
        const component = renderer.create(
            <TableRow totalStars="2000" totalForks="3000" link="https://github.com/test-link/" text="some repo name" />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
