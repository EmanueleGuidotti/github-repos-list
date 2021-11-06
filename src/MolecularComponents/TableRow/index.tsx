import React from "react";
import {Row} from "../../Interfaces/interfaces";
import TableItemComponent from "../../AtomicComponents/TableItem";
import LinkComponent from "../../AtomicComponents/Link";
import {faStar, faUtensils} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CSS from 'csstype';

const TableRowComponent = ({totalForks, totalStars, text, link}: Row) => {
    return (
        <div style={componentStyle.tableRowComponent as CSS.Properties}>
            <TableItemComponent otherStyle={{justifyContent: "start", flex: 2, paddingLeft:"20px"}}>
                <LinkComponent link={link} text={text} />
            </TableItemComponent>
            <TableItemComponent otherStyle={{justifyContent: "start"}} children={
                <>
                    <FontAwesomeIcon style={{marginRight: 20}} icon={faUtensils} />
                    <p>{totalForks}</p>
                </>
            } />
            <TableItemComponent otherStyle={{justifyContent: "start"}} children={
                    <>
                        <FontAwesomeIcon style={{marginRight: 20}} icon={faStar} />
                        <p>{totalStars}</p>
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
