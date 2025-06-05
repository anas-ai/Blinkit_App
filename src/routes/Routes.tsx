import {SCREEN_NAME} from '../constant/ScreenName';
import HomeIndex from '../screens/HomeScreen';
import OtpScreen from '../screens/OtpScreen';
import OtpVerifyScreen from '../screens/OtpVerifyScreen';
import ProfileIndex from '../screens/ProfileScreen';
import Blinkit_Money_screen from '../screens/ProfileScreen/BlinkitMoney';
import EditProfile from '../screens/ProfileScreen/EditProfil';
import SplashScreen from '../screens/SplashScreen';

export const LoginStack = [
  {name: SCREEN_NAME.SPLASH_SCREEN, component: SplashScreen},
  {name: SCREEN_NAME.OTP_SCREEN, component: OtpScreen},
  {name: SCREEN_NAME.OTP_VERIFY_SCREEN, component: OtpVerifyScreen},
];

export const AuthStack = [
  {name: SCREEN_NAME.HOME_SCREEN, component: HomeIndex},
  {name: SCREEN_NAME.PROFILE_SCREEN, component: ProfileIndex},
  {name: SCREEN_NAME.EDIT_PROFILE_SCREEN, component: EditProfile},
  {name: SCREEN_NAME.BLINKIT_MONEY_SCREEN, component: Blinkit_Money_screen},
];
