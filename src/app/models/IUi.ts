import { StyleSheet } from "react-native";
import { string } from "yup";


export interface IUiBlock {
    flex?: boolean,
    base?: boolean,
    row?: string,
    column?: string,
    center?: string,
    middle?: string,
    left?: string,
    right?: string,
    top?: string,
    bottom?: string,
    card?: number,
    shadow?: boolean,
    color?: string,
    space?: string,
    padding?: number | number[],
    margin?: number | number[],
    animated?: boolean,
    wrap?: boolean,
    style?: object,
    children?: JSX.Element[],
    [key: string]: any
}

export interface IUiMargin {
    marginTop?: number,
    marginRight?: number,
    marginBottom?: number,
    marginLeft?: number
}

export interface IUiPadding {
    paddingTop?: number,
    paddingRight?: number,
    paddingBottom?: number,
    paddingLeft?: number
}

export interface IBlockStyleProps {
    block: object,
    row: object,
    column: object,
    card: object,
    center: object,
    middle: object,
    left: object,
    right: object,
    top: object,
    bottom: object,
    shadow: object,

    accent: object,
    primary: object,
    secondary: object,
    tertiary: object,
    black: object,
    white: object,
    gray: object,
    gray2: object,

    main: object,
    submain: object,
    orange: object,
    suborange: object,
    pink: object,
    section: object,
}

export interface IUiColor {
    accent?: string,
    primary?: string,
    secondary?: string,
    tertiary?: string,
    black?: string,
    white?: string,
    gray?: string,
    gray2?: string,

    main?: string,
    submain?: string,
    orange?: string,
    suborange?: string,
    pink?: string,
    section?: string,
}