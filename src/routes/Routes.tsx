import { SCREEN_NAME } from "../constant/ScreenName";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";

export const Stack_Screens = [
    {name:SCREEN_NAME.HOME_SCREEN,component:HomeScreen},
    {name:SCREEN_NAME.SPLASH_SCREEN,component:SplashScreen},
]