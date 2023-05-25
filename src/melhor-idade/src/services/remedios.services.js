import API from './webapi.services';
import { BASE_URL } from './urls';

export const getRemedios = async () => {
  try {
    return await API.get(`${BASE_URL}/remedios`).then(
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

export const insertRemedio = async (param) => {
  try {
    return await API.post(`${BASE_URL}/remedios`, param).then(
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

export const updateRemedio = async (param) => {
  try {
    return await API.put(`${BASE_URL}/remedios/${param.id}`, param).then(
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

export const deleteRemedio = async (id) => {
  try {
    return await API.delete(`${BASE_URL}/remedios/${id}`).then(
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
