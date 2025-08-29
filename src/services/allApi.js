import BASEURL from "./baseUrl";
import commonApi from "./commonApi";

// addResumeAPI
export const addResumeApi = async(resume)=>{
return await commonApi('POST',`${BASEURL}/all-resume`,resume)
}

// edit resume
export const editResumeApi = async(id,resume)=>{
return await commonApi('PUT',`${BASEURL}/all-resume/${id}`,resume)
}
// add resume to history 

export const addResumeDownloadAPI = async (resume)=>{
    return await commonApi("POST",`${BASEURL}/history`,resume)
}
// getHistoryApi - GET
export const getHistoryApi = async () => {
    return await commonApi("GET",`${BASEURL}/history`,{})
}
// getDeleteApi - Delete

export const deleteHistoryApi = async (id) => {
    return await commonApi("DELETE",`${BASEURL}/history/${id}`,{})
}

// getAResumeApi - GET request by edit component when its open in the browser (useEffect)
export const getAResumeApi = async (id)=>{
    return await commonApi("GET",`${BASEURL}/all-resume/${id}`,{})
}