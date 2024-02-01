import axios from 'axios';

// Generic function to load JSON data
export const loadData = async <T>(locale: string, fileName: string): Promise<T | null> => {
  try {
    const response = await axios.get(`content/${locale.toLowerCase()}/${fileName}.json`);
    return response.data;
  } catch (error) {
    console.error(`Error loading ${fileName} data:`, error);
    return null;
  }
};
