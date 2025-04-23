import { TextStyle, ViewStyle } from "react-native";

type ResponsiveTextTypes = {
    title?:string | string[];
    fontColor?:string;
    fontWeight?:TextStyle['fontWeight'];
    fontSize?:number;
    fontStyle?:ViewStyle
}

export type {ResponsiveTextTypes}