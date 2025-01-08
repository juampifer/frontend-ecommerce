import axios from "axios";

export const fetchProducts = async (categoryId = '') => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      params: categoryId ? { categoryId } : {}, //se agrega el parámetro para filtrar por categoria
    });
    return response.data;    
  } catch (error) {
    throw new Error(error.message);
  }
};
