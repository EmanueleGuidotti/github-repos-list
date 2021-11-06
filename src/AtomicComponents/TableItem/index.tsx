import React from "react";
import {Item} from "../../Interfaces/interfaces";
import CSS from "csstype";

const TableItemComponent = ({children, otherStyle}: Item) => {
    return <div style={{...TableItemContainer, ...otherStyle} as CSS.Properties}>{children}</div>;
};

const TableItemContainer: CSS.Properties = {
        paddingLeft: "30",
        flex: "1",
        display: "flex",
        alignItems: "center"
};

export default TableItemComponent;
