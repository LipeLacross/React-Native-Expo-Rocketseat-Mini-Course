import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "links_storage";

export type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};

const get = async (): Promise<LinkStorage[]> => {
  const getStorage = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
  const objStorage = getStorage ? JSON.parse(getStorage) : [];

  return objStorage;
};

const clear = async () => {
  await AsyncStorage.clear();
};

const save = async (newLink: LinkStorage) => {
  try {
    const getLocalStorage = await get();
    const updated = JSON.stringify([...getLocalStorage, newLink]);

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, updated);
  } catch (error) {
    throw error;
  }
};

const deleted = async (id: string) => {
  try {
    const locale = await get();
    const updatedFilter = locale.filter((item) => item.id !== id);
    const updatedFilterString = JSON.stringify(updatedFilter);

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, updatedFilterString);
  } catch (error) {
    throw error;
  }
};

export const Storage = { get, save, clear, deleted };
