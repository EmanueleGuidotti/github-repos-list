import CSS from "csstype";
import React from "react";

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

export interface GenericInput {
  id: string;
  placeholder: string;
  onKeyUpFunction: (event: React.FormEvent<HTMLInputElement>) => {} | void;
  prefix: JSX.Element;
}

export interface Input {
    search: (value: string) => {} | void;
    id: string;
}

/**
 * Molecular components interfaces
 */
export interface Row {
  totalForks: string;
  totalStars: string;
  link: string;
  name: string;
}

export interface PaginationInterface {
  onClickParent: (page: number | string, pageSize: number | string) => void;
  current: number;
  count: number;
}

/**
 * Pages interfaces
 */
export interface Search {
  search: (value: string) => {} | void;
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
    repositoryCount: number;
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
