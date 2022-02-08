import { Link as LinkInterface } from "../../Interfaces/interfaces";
import CSS from "csstype";
import Link from "antd/lib/typography/Link";
import "antd/dist/antd.css";
import React from "react";

/**
 * Render a link component
 *
 * @prop {string} link - The link to follow
 * @prop {string} text - The text to render
 *
 * @returns {JSX.Element}
 */
const LinkComponent = ({ link, text }: LinkInterface) => {
  return (
    <Link href={link} target="_blank" style={linkStyle as React.CSSProperties}>
      {text}
    </Link>
  );
};

const linkStyle: CSS.Properties = {
  textDecoration: "underline",
};

export default LinkComponent;
