import {API_KEY, API, API_IMG, SEARCH_URL} from "./constants";

export const generateUrl = (path) => `${API}/movie/${path}?api_key=${API_KEY}`

export  const  generateImgUrl =(size="w500",path) => `${API_IMG}${size}${path}`

export const generateTitle = title=> (title[0].toUpperCase()+ title.slice(1)).replaceAll('_',' ')

export const getUrlSearch = search => `${SEARCH_URL}?api_key=${API_KEY}&query=${search}`;