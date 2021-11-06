import React from "react";
import {Button} from "../../Interfaces/interfaces";

const GenericButton = ({text, onClickCursor}: Button) => {
    return (
        <button
            style={{...componentStyle.button} as React.CSSProperties}
            onClick={() => onClickCursor && onClickCursor()}
        >
            {text}
        </button>
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
