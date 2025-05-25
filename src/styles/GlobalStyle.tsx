import { Platform, StatusBar, StyleSheet } from "react-native";
import { colors } from "./Colors";

export const globalStyles = StyleSheet.create({
    globalContainer:{
        flex:1,
        paddingHorizontal:14,
        paddingVertical:24,
        backgroundColor:colors.white,
    }
})