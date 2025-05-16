import { Platform } from 'react-native';

const LOCAL_HOST = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';

export const BASE_URL = `${LOCAL_HOST}:8081/api/v1`;

export const ApiConfig = {
  SEND_OTP: `${BASE_URL}/users/send-otp`,
};
