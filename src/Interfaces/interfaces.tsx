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

/**
 * Molecular components interfaces
 */
export interface Row {
    totalForks: string;
    totalStars: string;
    link: string;
    text: string;
}
