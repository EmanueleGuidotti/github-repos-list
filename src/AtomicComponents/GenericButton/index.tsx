import { Button as ButtonInterface } from "../../Interfaces/interfaces";
import { Button } from "antd";

/**
 * Render a input text component
 *
 * @prop {string} text - The text to show inside the button
 * @prop {Function} onClickCursor - The function to trigger on click event
 *
 * @returns {JSX.Element}
 */
const GenericButton = ({ text, onClickCursor }: ButtonInterface) => {
  return (
    <Button
      style={{ ...componentStyle.button } as React.CSSProperties}
      onClick={onClickCursor}
    >
      {text}
    </Button>
  );
};

const componentStyle = {
  button: {
    padding: "5",
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default GenericButton;
