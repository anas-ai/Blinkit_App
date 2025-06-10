import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import useAuth from './src/hooks/useAuth';
import AuthNavigator from './src/navigators/AuthNavigator';
import HomeNavigator from './src/navigators/HomeNavigator';
import { useThemeStore } from './src/store/themeStore';
import { colors } from './src/styles/Colors';
import { darkTheme, lightTheme } from './src/themes/themes';

const App = () => {
  const {userToken, loading} = useAuth();

  const {resolvedTheme} = useThemeStore();

  const appTheme = resolvedTheme === 'dark' ? darkTheme : lightTheme;
  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={colors.green} />
      </View>
    );
  }

  return (
    <NavigationContainer theme={appTheme}>
      {userToken ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
