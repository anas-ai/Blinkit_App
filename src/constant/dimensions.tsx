import { Dimensions } from "react-native"

const {width,height} = Dimensions.get('screen')

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width

export const wp = (percentage:number)=> (width * percentage)/100;
export const hp = (percentage:number)=> (width * percentage)/100;