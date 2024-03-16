import axios from "axios";
// import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const allProperty = async () => {
  const response = await axios.get(`${base_url}property/all`);
  return response?.data;
};
const getAproperty = async (ids) => {
  const response = await axios.get(`${base_url}property/prop/${ids.slug}`);
  return response.data;
};
// const filterPrperty = async (ids) => {
//   const response = await axios.get(
//     `${base_url}property/search?price=>${ids?.minPrice}&price<=${ids?.maxPrice}&location=${ids?.location}&number_of_room=${ids?.number_of_room}&category=${ids?.category}`
//     // `${base_url}property/search?price[lte]=${ids?.maxPrice}&price[gte]=${ids?.minPrice}&location=${ids?.location}&number_of_room=${ids?.number_of_room}&category=${ids?.category}`
//   );
//   return response.data;
// };

const filterPrperty = async (ids) => {
  let queryString = `${base_url}property/search?`;

  if (ids.minPrice && ids.maxPrice) {
    queryString += `price=>${ids.minPrice}&price<=${ids.maxPrice}&`;
  }

  if (ids.location) {
    queryString += `location=${ids.location}&`;
  }

  if (ids.number_of_room) {
    queryString += `number_of_room=${ids.number_of_room}&`;
  }

  if (ids.category) {
    queryString += `category=${ids.category}&`;
  }

  // Remove trailing '&' if present
  queryString = queryString.replace(/&$/, "");

  const response = await axios.get(queryString);
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
  const response = await axios.get(`${base_url}project/proj/${ids.slug}`);
  // console.log(response);
  return response.data;
};

const postProj = async (data) => {
  // const config = generateAxiosConfig2(data.token);
  const response = await axios.post(`${base_url}project`, data.formData);

  return response.data;
};

// getintouch
const getIntouch = async (data) => {
  const response = await axios.post(`${base_url}property/getintouch`, {
    ...data,
  });
  return response.data;
};

// Requests
const postPropertyRequest = async (data) => {
  const response = await axios.post(`${base_url}property/request`, { ...data });
  return response.data;
};

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
  postPropertyRequest,
  //
  allBlog,
  getABlog,
  postBlog,

  //
  getIntouch,
};

export default propertyService;
