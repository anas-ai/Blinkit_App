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
    paddingVertical: scale(20),
  },
  phoneText: {
    marginBottom: scale(20),
  },
  otpContainer: {
    width: '80%',
  },
  pinCodeContainer: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: colors.shadow,
  },
});