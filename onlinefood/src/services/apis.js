// import commonrequest from "./apicall";
// import BACKENDURL from "./helper";




// export const regesterfunction=async(data)=>{
//     return await commonrequest("POST",`${BACKENDURL}/home/user/register`,data)
// };

import commonrequest from "./apicall";
import BACKENDURL from "./helper";

// Corrected spelling of 'registerFunction' and added error handling
export const regesterfunction = async (data) => {
    try {
        // Making a POST request to register the user
        const response = await commonrequest("POST", `${BACKENDURL}/home/user/register`, data);
        return response; // Return the response object for further use
    } catch (error) {
        // Handle and throw a more informative error
        throw new Error(error.response?.data.error || "Registration failed!"); 
    }
};
