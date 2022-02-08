import { Item } from "../../Interfaces/interfaces";
import CSS from "csstype";

/**
 * Render a table cell component
 *
 * @prop {JSX.Element} children - The child to render
 * @prop {object} otherStyle - The style of the item
 *
 * @returns {JSX.Element}
 */
const TableItemComponent = ({ children, otherStyle }: Item) => {
  return (
    <div style={{ ...TableItemContainer, ...otherStyle } as CSS.Properties}>
      {children}
    </div>
  );
};

const TableItemContainer: CSS.Properties = {
  paddingLeft: "30px",
  paddingBottom: "20px",
  paddingTop: "20px",
  flex: "1",
  display: "flex",
  alignItems: "center",
};

export default TableItemComponent;
