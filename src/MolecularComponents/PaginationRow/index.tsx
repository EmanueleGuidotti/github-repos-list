import React from "react";
import {OnClickParent, ReposDataTotalResult} from "../../Interfaces/interfaces";
import {useQuery} from "@apollo/client";
import {GET_REPOS_TOTAL} from "../../Services/GqlQueries/queries";
import GenericButton from "../../AtomicComponents/GenericButton";

const result = 100;

const PaginationRow = ({onClickParent}: OnClickParent) => {
    const {data, loading, error} = useQuery<ReposDataTotalResult>(GET_REPOS_TOTAL);

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>error fetching data</div>;
    }

    const onClickCursor = (): void => {
        onClickParent();
    };

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            {Array.from(Array(data?.search.repositoryCount), (e, i) => {
                if (i % result === 0 || i == 0)
                    return <GenericButton key={i} text={i} onClickCursor={() => onClickCursor()}></GenericButton>;
            })}
        </div>
    );
};

export default PaginationRow;
