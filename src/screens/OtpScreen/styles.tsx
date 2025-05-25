import { scale } from "react-native-size-matters";
import { colors } from "../../styles/Colors";
import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  linearGradient: {
    width: '100%',
  },
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    resizeMode: 'contain',
    height: scale(70),
    width: scale(70),
    borderRadius: scale(20),
  },
  headingText: {
    marginTop: scale(10),
  },
  phoneInputContainer: {
    width: '85%',
    marginTop: scale(18),
  },
  phoneInput: {
    color: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    fontSize: scale(12),
    right: scale(22),
  },
  flagContainer: {
    backgroundColor: colors.white,
  },
  modal: {
    padding: scale(18),
    paddingHorizontal: scale(10),
  },
  errorText: {
    marginLeft: 10,
  },
  continueButton: {
    width: scale(300),
    backgroundColor: colors.Olive_Green,
    marginTop: scale(20),
    borderRadius: scale(14),
  },
  buttonTitle: {
    fontSize: scale(14),
    fontWeight: 'bold',
  },
});
