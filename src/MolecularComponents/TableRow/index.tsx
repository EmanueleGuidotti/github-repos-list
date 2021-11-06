import React from "react";
import {Row} from "../../Interfaces/interfaces";
import TableItemComponent from "../../AtomicComponents/TableItem";
import LinkComponent from "../../AtomicComponents/Link";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CSS from 'csstype';

const TableRowComponent = ({totalForks, totalStars, text, link}: Row) => {
    return (
        <div style={componentStyle.tableRowComponent as CSS.Properties}>
            <TableItemComponent otherStyle={{justifyContent: "start"}}>
                <LinkComponent link={link} text={text} />
            </TableItemComponent>
            <TableItemComponent children={<p>{totalForks}</p>} />
            <TableItemComponent
                children={
                    <>
                        <p>{totalStars}</p>
                        <FontAwesomeIcon icon={faStar} />
                    </>
                }
            />
        </div>
    );
};

const componentStyle = {
    tableRowComponent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
    } as CSS.Properties,
};

export default TableRowComponent;
