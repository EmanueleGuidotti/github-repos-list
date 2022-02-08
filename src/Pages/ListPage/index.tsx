import { useState } from "react";
import { useQuery } from "@apollo/client";
import { ReposData } from "../../Interfaces/interfaces";
import { GET_REPOS } from "../../Services/GqlQueries/queries";
import TableRowComponent from "../../MolecularComponents/TableRow";
import PaginationRow from "../../MolecularComponents/PaginationRow";
import { Layout } from "antd";
import SearchComponent from "../../MolecularComponents/SearchComponent";

/**
 * Render a list page component with pagination and search bar
 *
 * @returns {JSX.Element}
 */
const ListPage = (): JSX.Element => {
  const start = 100;
  const [search, setSearch] = useState<string>("name: react ");
  const [end, setEnd] = useState<{
    endCursor: string | null;
    startCursor: string | null;
    page: number;
  }>({ endCursor: null, startCursor: null, page: 1 });
  const [before, setBefore] = useState<string | null>(null);
  const [after, setAfter] = useState<string | null>(null);
  const { error, loading, data } = useQuery<ReposData>(GET_REPOS, {
    variables: { start, search, before, after },
  });

  const onClickPagination = (
    page: number,
    pageSize: number,
    endCursor: string,
    startCursor: string
  ): any => {
    setEnd({ endCursor, startCursor, page });
    if (end.page <= page) {
      setAfter(endCursor);
      setBefore(end.startCursor);
    }
    if (end.page >= page) {
      setAfter(null);
      setBefore(end.startCursor);
    }
  };

  const searchRepo = (value: string) => {
    setSearch("name: react " + value);
  };

  return (
    <Layout>
      <div>
        <SearchComponent search={searchRepo} id={"searchComponent"} />
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error fetching data....</div>}
      <div>
        <div style={{ padding: 24, minHeight: 380, background: "#dedede" }}>
          {data &&
            data?.search.repos.map(
              ({ repo: { url, forks, stargazers, name } }, index: number) => (
                <div key={index} style={{ background: "white" }}>
                  <TableRowComponent
                    totalForks={forks.totalCount}
                    totalStars={stargazers.totalCount}
                    link={url}
                    name={name}
                  />
                </div>
              )
            )}
          <PaginationRow
            count={data?.search.repositoryCount as number}
            current={end.page}
            onClickParent={(page, pageSize) =>
              onClickPagination(
                page as number,
                pageSize as number,
                data?.search.pageInfo.endCursor as string,
                data?.search.pageInfo.startCursor as string
              )
            }
          />
        </div>
      </div>
    </Layout>
  );
};

export default ListPage;
