import BASEURL from "./baseUrl";
import commonApi from "./commonApi";

// addResumeAPI
export const addResumeApi = async(resume)=>{
return await commonApi('POST',`${BASEURL}/all-resume`,resume)
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
    return await commonApi("DELETE",'${BASEURL}/history/${id}',{})
}