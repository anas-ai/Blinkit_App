import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {getStringFromStorage, removeFromStorage, saveToStorage} from '../../utils/MmkvStorageHelper';

type AuthContextype = {
  userToken: string | null;
  loading: boolean;
  login: (token: string) => Promise<void>;
  logout:()=>Promise<void>
};

export const AuthContext = createContext<AuthContextype | undefined>(undefined);
type AuthProviderProps = {
  children: ReactNode;
};
export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const login = async (token: string) => {
    setLoading(true);
    try {
      saveToStorage('token', token);
      setUserToken(token);
    } catch (error) {
      console.error('Error saving token:', error);
    }
    setLoading(false);
  };

  const logout = async() =>{
    setLoading(true);
    try {
      removeFromStorage('token');
      setUserToken(null)
    } catch (error) {
      console.error('Error removeing token',error)
    }
    setLoading(false)
  }

  const checkLoginState = async () => {
    setLoading(true);
    try {
      const token = await getStringFromStorage('token');
      setUserToken(token ?? null);
    } catch (e) {
      console.error('Error fetching token:', e);
    }
    setLoading(false);
  };




  useEffect(() => {
    checkLoginState();
  }, []);

  return (
    <AuthContext.Provider value={{login,logout, userToken, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
