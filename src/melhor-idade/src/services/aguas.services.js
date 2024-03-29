import API from './webapi.services';
import { BASE_URL } from './urls';

export const getAguas = async () => {
  try {
    return await API.get(`${BASE_URL}/aguas`).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const insertAgua = async (param) => {
  try {
    return await API.post(`${BASE_URL}/aguas`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateAgua = async (param) => {
  try {
    return await API.put(`${BASE_URL}/aguas/${param.id}`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteAgua = async (id) => {
  try {
    return await API.delete(`${BASE_URL}/aguas/${id}`).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
