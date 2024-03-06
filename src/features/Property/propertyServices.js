import axios from "axios";
// import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const allProperty = async () => {
  const response = await axios.get(`${base_url}property/all`);
  return response?.data;
};
const getAproperty = async (ids) => {
  const response = await axios.get(`${base_url}property/${ids.id}`);
  return response.data;
};
const filterPrperty = async (ids) => {
  const response = await axios.get(
    `${base_url}property/search?price[lte]=${ids?.minPrice}&price[gte]=${ids?.maxPrice}&location=${ids?.location}&number_of_room=${ids?.number_of_room}&category=${ids?.category}`
  );
  return response.data;
};

const postProperty = async (data) => {
  // const config = generateAxiosConfig2(data.token);
  const response = await axios.post(`${base_url}property`, data.formData);

  return response.data;
};

// Projects
const allProject = async () => {
  // const config = generateAxiosConfig(token);
  const response = await axios.get(`${base_url}project/all`);
  //   console.log(response);
  return response?.data;
};

const getAproject = async (ids) => {
  // const config = generateAxiosConfig(ids.token);
  const response = await axios.get(`${base_url}project/${ids.id}`);
  // console.log(response);
  return response.data;
};

const postProj = async (data) => {
  // const config = generateAxiosConfig2(data.token);
  const response = await axios.post(`${base_url}project`, data.formData);

  return response.data;
};

// Requests
const allRequest = async () => {
  // const config = generateAxiosConfig(token);
  // const response = await axios.get(`${base_url}loan/admin?deleted=false`, config);
  const response = await axios.get(`${base_url}property/request/all`);
  return response?.data;
};
const getaRequest = async (ids) => {
  // const config = generateAxiosConfig(ids.token);
  const response = await axios.get(`${base_url}property/request/${ids.id}`);
  // console.log(response);
  return response.data;
};

// Blogs
const allBlog = async (token) => {
  // const config = generateAxiosConfig(token);
  const response = await axios.get(`${base_url}blog`);
  return response?.data;
};
const getABlog = async (ids) => {
  // const config = generateAxiosConfig(ids.token);
  const response = await axios.get(`${base_url}blog/${ids.id}`);
  // console.log(response);
  return response.data;
};

const postBlog = async (data) => {
  // const config = generateAxiosConfig2(data.token);
  const response = await axios.post(`${base_url}blog`, data.formData);

  return response.data;
};

const propertyService = {
  allProperty,
  getAproperty,
  postProperty,
  filterPrperty,
  //
  allProject,
  getAproject,
  postProj,
  //
  allRequest,
  getaRequest,
  //
  allBlog,
  getABlog,
  postBlog,
};

export default propertyService;
