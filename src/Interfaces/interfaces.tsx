import React from "react";
import CSS from 'csstype';

/**
 * Atomic components interfaces
 */
export interface Link {
    link: string;
    text: string;
}

export interface Item {
    children?: JSX.Element;
    otherStyle?: CSS.Properties;
}

export interface Button {
    text?: string | number;
    onClickCursor?: () => {} | void;
}

/**
 * Molecular components interfaces
 */
export interface Row {
    totalForks: string;
    totalStars: string;
    link: string;
    text: string;
}

export interface OnClickParent {
    onClickParent: () => void;
}

/**
 * Pages interfaces
 */

export interface NumberOfRepos {
    number_of_repos: number;
}

export interface RepoDetail {
    url: string;
    forks: {
        totalCount: string;
    };
    stargazers: {
        totalCount: string;
    };
    name: string;
}

/**
 * Repository interfaces
 */
export interface Repo {
    repo: {
        url: string;
        name: string;
        forks: {
            totalCount: string;
        };
        stargazers: {
            totalCount: string;
        };
    };
}

export interface ReposData {
    search: {
        pageInfo: {
            endCursor: string;
            hasNextPage: boolean;
            startCursor: string;
        };
        repos: Repo[];
    };
}

export interface ReposDataTotal {
    repositoryCount: number;
}

export interface ReposDataTotalResult {
    search: ReposDataTotal;
}
