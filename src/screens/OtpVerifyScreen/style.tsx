import { StyleSheet } from "react-native";
import { colors } from "../../styles/Colors";
import { scale } from "react-native-size-matters";

 export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: scale(20),
  },
  verificationText: {
  },
  phoneText: {
    marginBottom: scale(40),
  },
  otpContainer: {
    width: '60%',
  },
  pinCodeContainer: {
    borderRadius: 10,
    backgroundColor:colors.Button_gray,
    height:50
  },
});