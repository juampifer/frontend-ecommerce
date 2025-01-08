import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const fetchCategories = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};