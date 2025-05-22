import {SCREEN_NAME} from '../constant/ScreenName';
import HomeScreen from '../screens/HomeScreen';
import OtpScreen from '../screens/OtpScreen';
import OtpVerifyScreen from '../screens/OtpVerifyScreen';
import SplashScreen from '../screens/SplashScreen';

export const LoginStack = [
  {name: SCREEN_NAME.SPLASH_SCREEN, component: SplashScreen},
  {name: SCREEN_NAME.OTP_SCREEN, component: OtpScreen},
  {name: SCREEN_NAME.OTP_VERIFY_SCREEN, component: OtpVerifyScreen},
];

export const AuthStack = [
  {name: SCREEN_NAME.HOME_SCREEN, component: HomeScreen},
];
