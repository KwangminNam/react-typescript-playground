import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPostsPage = async (paramid = 1, options = {}) => {
  const res = await api.get(`/posts?_page=${paramid}`, options)
  return res.data;
}