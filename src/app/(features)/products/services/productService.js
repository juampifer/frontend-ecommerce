import axios from "axios";

export const fetchProducts = async (slug = '') => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      params: slug ? { slug } : {}, //se agrega el parámetro para filtrar por slug
    });
    return response.data;    
  } catch (error) {
    throw new Error(error.message);
  }
};
