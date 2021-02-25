import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAsyncStorageData = async (key: string) => {
  let value = null;
  try {
    value = await AsyncStorage.getItem(key);
    if (value) {
      value = JSON.parse(value);
    }
  } catch (e) {
    // error reading value
  }
  return value;
};

export const setAsyncStorageData = async (key: string, value: any) => {
  try {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

export const getAllKeys = async () => {
  let keys: string[] = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    // read key error
  }
  return keys;
};

export const clearAsyncStorageData = async () => {
  try {
    const keys = await getAllKeys();
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    // remove error
  }
};
