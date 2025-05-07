import { TextStyle, ViewStyle } from "react-native";

type ResponsiveTextTypes = {
    title?:string | string[];
    fontColor?:string;
    fontWeight?:TextStyle['fontWeight'];
    fontSize?:number;
    fontStyle?:ViewStyle
}

type CustomButtonProps ={
    onPress?:() =>void;
    title?:string;
    titleStyle?:TextStyle;
    buttonStyle?:ViewStyle;
    disabled?:boolean;
    type?:'solid' | 'clear' | 'outline';
    loading?: boolean;
}

export type {ResponsiveTextTypes,CustomButtonProps}