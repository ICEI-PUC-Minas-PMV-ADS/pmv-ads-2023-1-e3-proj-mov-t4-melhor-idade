import API from './webapi.services';
import { BASE_URL } from './urls';

export const getCheckups = async (token) => {
  try {
    return await API.get(`${BASE_URL}/checkups`).then(
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

export const insertCheckup = async (param) => {
  try {
    return await API.post(`${BASE_URL}/checkups`, param).then(
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

export const updateCheckup = async (param) => {
  try {
    return await API.put(`${BASE_URL}/checkups/${param.id}`, param).then(
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

export const deleteCheckup = async (id) => {
  try {
    return await API.delete(`${BASE_URL}/checkups/${id}`).then(
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
