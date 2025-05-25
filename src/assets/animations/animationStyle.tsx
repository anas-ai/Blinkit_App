import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constant/dimensions";

 export const styles = StyleSheet.create({
  animationStyle: {
    flex: 1,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH, 
    alignItems: 'center',
    justifyContent: 'center',
  },
});