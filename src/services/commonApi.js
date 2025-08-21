import axios from "axios"

const commonApi = async (httpMethod, url, reqBody) => {
    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody
    }

    return await axios(reqConfig)
        .then(res => res)
        .catch(err => err)
}
export default commonApi
