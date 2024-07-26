import axiosInstance from "../axiosInstance";


export const getAllItems = async () => {
  try {
    const response = await axiosInstance.get('/menu');
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the items!", error);
    throw error;
  }
};

export const getItemById = async (id) => {
  try {
    const response = await axiosInstance.get(`/menu/${id}`);
    return response.data;
  } catch (error) {
    console.error(`There was an error fetching the item with id ${id}!`, error);
    throw error;
  }
};