import axiosBaseUrl from "./axsios";
import Cookies from 'js-cookie';

export const DeleteData = async (url) => {
  const config = {
    headers: {Authorization: `Bearer ${Cookies.get('token')}`},
  };
  const res = await axiosBaseUrl.delete(url, config);
  return res;
};

export const GetData = async (url) => {
    const res = await axiosBaseUrl.get(url);
    return res.data;
  };




  
  export const useGetDataProtected = async (url) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {Authorization: `Bearer ${token}`},
    };
    const res = await axiosBaseUrl.get(url, config);
    return res.data;
  };








  export const PostData = async (url, data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    };
    const res = await axiosBaseUrl.post(url, data);
    return res;
  };
  export const PostDatalogin = async (url, data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    };
  
    try {
      const res = await axiosBaseUrl.post(url, data, config);
      return res;
    } catch (error) {
      console.error('Error:', error);
      return error; // Rethrow the error to propagate it to the calling code
    }
  };
  



  export const PostDataWithImg = async (url, data,onUploadProgress) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
      onUploadProgress,
    };
    const res = await axiosBaseUrl.post(url, data, config);
    return res;
  };
    






  export const useUpdateData = async (url, data) => {
    const config = {
      headers: {Authorization: `Bearer ${Cookies.get('token')}`},
    };
    const res = await axiosBaseUrl.patch(url, data, config);
    return res;
  };
  
  export const UpdateDataWithImg = async (url, data,onUploadProgress) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
      onUploadProgress
    };
    const res = await axiosBaseUrl.put(url, data, config);
    return res;
  };
  

  export const UpdateEmail = async (url) => {

    const res = await axiosBaseUrl.patch(url);
    return res;
  };
  