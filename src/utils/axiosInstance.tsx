// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'https://stg01.menumaster.io/api/v1/',
// });

// axiosInstance.interceptors.request.use(
//   async config => {
//     try {
//       const token = await AsyncStorage.getItem('token');
//       if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//       }
//       return config;
//     } catch (error) {
//       return Promise.reject(error);
//     }
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

// export default axiosInstance;
