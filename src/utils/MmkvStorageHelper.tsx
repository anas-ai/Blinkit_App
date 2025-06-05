import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const saveToStorage = (
  Key: string,
  value: string | number | boolean,
) => {
  storage.set(Key, value);
};

export const getStringFromStorage = (Key: string): string | undefined => {
  return storage.getString(Key);
};

export const getNumberFromStorage = (key: string): number | undefined => {
  return storage.getNumber(key);
};

export const getBoolenFromStorage = (key: string): boolean | undefined => {
  return storage.getBoolean(key);
};

export const removeFromStorage = (key: string) => {
  storage.delete(key);
};

export const clearStorage = () => {
  storage.clearAll();
};

export const saveObjectToStorage = (key: string, obj: object) => {
  storage.set(key, JSON.stringify(obj));
};

// example
// const user = { name: 'Ali', email: 'ali@example.com' };
// saveObjectToStorage('user', user);

// Get an object
export function getObjectFromStorage<T>(key: string): T | null {
  const value = storage.getString(key);
  return value ? (JSON.parse(value) as T) : null;
}
// example
// const user = getObjectFromStorage<User>('user');
// console.log(user?.email); // 'ali@example.com'
