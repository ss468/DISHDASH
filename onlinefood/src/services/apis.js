import commonrequest from "./apicall";
import BACKENDURL from "./helper";

export const regesterfunction = async (data) => {
  try {
    const response = await commonrequest("POST", `${BACKENDURL}/home/user/register`, data);
    return response; 
  } catch (error) {
    throw new Error(error.error || "Registration failed!");
  }
};

// export const otprequest = async (data) => {
//   try {
//     const response = await commonrequest("POST", `${BACKENDURL}/home/user/sendotp`, data);
//     return response; 
//   } catch (error) {
//     throw new Error(error.error || "Request for OTP failed!");
//   }
// };
export const otprequest=async(data)=>{
    return await commonrequest("POST",`${BACKENDURL}/home/user/sendotp`,data)
};