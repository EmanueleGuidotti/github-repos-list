import { Row as RowInterface } from "../../Interfaces/interfaces";
import TableItemComponent from "../../AtomicComponents/TableItem";
import LinkComponent from "../../AtomicComponents/Link";
import { faStar, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CSS from "csstype";
import "antd/dist/antd.css";
import { Row, Col } from "antd";

/**
 * Render a single row component
 *
 * @prop {number} totalForks - The total forks of the repo
 * @prop {number} totalStars - The total stars of the repo
 * @prop {string} text - The name of the repo
 * @prop {string} link - The link of the repo
 *
 * @returns {JSX.Element}
 */
const TableRowComponent = ({
  totalForks,
  totalStars,
  name,
  link,
}: RowInterface) => {
  return (
    <Row gutter={16} style={componentStyle.tableRowComponent as CSS.Properties}>
      <Col span={8}>
        <TableItemComponent
          otherStyle={{
            justifyContent: "start",
            flex: 2,
            paddingLeft: "20px",
          }}
        >
          <LinkComponent link={link} text={name} />
        </TableItemComponent>
      </Col>
      <Col span={8}>
        <TableItemComponent
          otherStyle={{ justifyContent: "start", alignItems: "center" }}
          children={
            <>
              <FontAwesomeIcon style={{ marginRight: 20 }} icon={faUtensils} />
              <p style={{ margin: 0 }}>{totalForks}</p>
            </>
          }
        />
      </Col>
      <Col span={8}>
        <TableItemComponent
          otherStyle={{ justifyContent: "start", alignItems: "center" }}
          children={
            <>
              <FontAwesomeIcon style={{ marginRight: 20 }} icon={faStar} />
              <p style={{ margin: 0 }}>{totalStars}</p>
            </>
          }
        />
      </Col>
    </Row>
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
