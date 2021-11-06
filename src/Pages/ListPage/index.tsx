import React, {useState} from "react";
import {useQuery} from "@apollo/client";
import {NumberOfRepos, RepoDetail, ReposData} from "../../Interfaces/interfaces";
import {GET_REPOS} from "../../Services/GqlQueries/queries";
import TableRowComponent from "../../MolecularComponents/TableRow";

const ListPage = (): JSX.Element => {
    const [start, setStart] = React.useState(100);
    const {data, loading, error} = useQuery<ReposData>(GET_REPOS, {variables: {start}});

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>error fetching data</div>;
    }

    return (
        <>
            {data?.search.repos.map(({repo: {url, forks, stargazers, name}}, index: number) => (
                <div key={index}>
                    <TableRowComponent totalForks={forks.totalCount} totalStars={stargazers.totalCount} link={url} text={name} />
                </div>
            ))}
        </>
    );
};

export default ListPage;
