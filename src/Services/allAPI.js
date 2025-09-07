import {SERVER_URL} from "./server_url";
import {commonAPI} from "./commonAPI";

// upload video called by add component to http://localhost:3000/videos
export const uploadVideoAPI = async (video) =>{
    // send response to add component
    return await commonAPI("POST",`${SERVER_URL}/videos`, video)
}
// get all videos called by view component
export const getAllVideosAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/videos`," ")
}

// store watch history by videocard to http://localhost:3000/history
export const saveHistoryAPI = async(videoDetails) =>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

// get all history 
export const getAllHistoryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/history`," ")
}

// remove history api
export const removeHistoryAPI = async (id) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

// remove video api in vdocard
export const removeVideoAPI = async (id) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${id}`,{})
}
// save category to category component
export const saveCategoryAPI = async (categoryDetails) =>{
    return await commonAPI("POST",`${SERVER_URL}/Categories`, categoryDetails)
}
// get category to category component
export const getCategoryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/Categories`," ")
}
// remove category
export const removeCategoryAPI = async (id) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/Categories/${id}`,{})
}
// get single video
export const getAVideoAPI = async (id) =>{
    return await commonAPI("GET",`${SERVER_URL}/videos/${id}`," ")
}
// update Category
export const updateCategoryAPI = async (id, updateCategoryDetails) =>{
    return await commonAPI("PUT",`${SERVER_URL}/Categories/${id}`, updateCategoryDetails)
}
// get single category
export const getACategoryAPI = async (id) =>{
    return await commonAPI("GET",`${SERVER_URL}/Categories/${id}`," ")
}