import { Platform } from 'react-native';

const LOCAL_HOST = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';

export const BASE_URL = `${LOCAL_HOST}:8000/api/v1`;
// export const BASE_URL = 'https://blinkit-server-node.vercel.app'

export const ApiConfig = {
  SEND_OTP: `${BASE_URL}/users/send-otp`,
  OTP_VERIFY_OTP:`${BASE_URL}/users/verify-otp`
};
