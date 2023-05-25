import API from './webapi.services';
import { BASE_URL } from './urls';

export const getPerfils = async () => {
  try {
    return await API.get(`${BASE_URL}/users`).then(
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

export const insertPerfil = async (param) => {
  try {
    return await API.post(`${BASE_URL}/users/${param.id}`, param).then(
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

export const updatePerfil = async (param) => {
  console.log(param);
  try {
    return await API.put(`${BASE_URL}/users/${param.id}`, param).then(
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

export const deletePerfil = async (id) => {
  try {
    return await API.delete(`${BASE_URL}/660/perfils/${id}`).then(
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
