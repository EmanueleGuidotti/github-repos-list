import React from "react";
import {Link} from "../../Interfaces/interfaces";
import CSS from 'csstype';

const LinkComponent = ({link, text}: Link) => {
    return (
        <a style={linkStyle} href={link}>
            {text}
        </a>
    );
};

const linkStyle: CSS.Properties = {
    textDecoration: "underline",
};

export default LinkComponent;
