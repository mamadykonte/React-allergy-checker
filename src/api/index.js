import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("userInfo")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userInfo")).token
    }`;
  }

  return req;
});



// user 
export const login = (formData) => API.post("/user/login", formData);
export const register = (formData) => API.post("/user/register", formData);
export const updateUser = (formData) => API.post("/user/profile", formData);

// allergens
export const getAllergens = () => API.get("/allergen");
export const addAllergen = (formData) => API.post("/allergen/create", formData);
export const updateAllergen = (id, formData) =>
  API.put(`/allergen/update/${id}`, formData); 


// logout if token is expired


