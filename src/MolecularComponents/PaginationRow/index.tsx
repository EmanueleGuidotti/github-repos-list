import { PaginationInterface } from "../../Interfaces/interfaces";
import { Pagination } from "antd";
import "antd/dist/antd.css";

/**
 * Render a pagination row component
 *
 * @prop {Function} onClickParent - The function event which is sent on click
 * @prop {number} current - The current page element
 * @prop {number} count - The total of pages
 *
 * @returns {JSX.Element}
 */
const PaginationRow = ({
  onClickParent,
  current,
  count,
}: PaginationInterface) => {
  return (
    <Pagination
      data-testid="pagination"
      defaultCurrent={current as number}
      total={count}
      defaultPageSize={100}
      onChange={(page, pageSize) => onClickParent(page, pageSize as number)}
    />
  );
};

export default PaginationRow;
