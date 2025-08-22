import BASEURL from "./baseUrl";
import commonApi from "./commonApi";

// addResumeAPI
export const addResumeApi =(resume)=>{
return commonApi('POST',`${BASEURL}/all-resume`,resume)
}