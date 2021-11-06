import React, {useEffect, useState} from "react";
import {useLazyQuery, useQuery} from "@apollo/client";
import {NumberOfRepos, RepoDetail, ReposData} from "../../Interfaces/interfaces";
import {GET_REPOS} from "../../Services/GqlQueries/queries";
import TableRowComponent from "../../MolecularComponents/TableRow";
import PaginationRow from "../../MolecularComponents/PaginationRow";

const ListPage = (): JSX.Element => {
    const [start, setStart] = React.useState(100);
    const [end, setEnd] = React.useState<string | null>(null);
    const { error, loading, data } = useQuery<ReposData>(GET_REPOS, {variables: {start, end}});

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>error fetching data</div>;
    }

    const onClick = (endCursor: string): void => {
        setEnd(endCursor);
    };

    return (
        <>
            {data?.search.repos.map(({repo: {url, forks, stargazers, name}}, index: number) => (
                <div key={index}>
                    <TableRowComponent totalForks={forks.totalCount} totalStars={stargazers.totalCount} link={url} text={name} />
                </div>
            ))}
            <PaginationRow onClickParent={() => onClick(data?.search.pageInfo.endCursor as string)}></PaginationRow>
        </>
    );
};

export default ListPage;
