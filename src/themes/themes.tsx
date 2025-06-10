import { Theme } from "@react-navigation/native";




export const lightTheme: Theme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#0f62fe',
    card: '#f0f0f0',
    border: '#e0e0e0',
    notification: '#ff3b30',
  },
  fonts: {
    regular: {
      fontFamily: "",
      fontWeight: "bold"
    },
    medium: {
      fontFamily: "",
      fontWeight: "bold"
    },
    bold: {
      fontFamily: "",
      fontWeight: "bold"
    },
    heavy: {
      fontFamily: "",
      fontWeight: "bold"
    }
  }
};
export const darkTheme: Theme = {
  dark: true,
  colors: {
    background: '#000000',
    text: '#FFFFFF',
    primary: '#BB86FC',
    card: '#1f1f1f',
    border: '#333333',
    notification: '#ff453a', // optional
  },
  fonts: {
    regular: {
      fontFamily: "",
      fontWeight: "bold"
    },
    medium: {
      fontFamily: "",
      fontWeight: "bold"
    },
    bold: {
      fontFamily: "",
      fontWeight: "bold"
    },
    heavy: {
      fontFamily: "",
      fontWeight: "bold"
    }
  }
};