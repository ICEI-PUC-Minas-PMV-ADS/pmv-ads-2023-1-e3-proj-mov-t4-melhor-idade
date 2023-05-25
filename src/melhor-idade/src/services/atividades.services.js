import API from './webapi.services';
import { BASE_URL } from './urls';

export const getAtividades = async () => {
  try {
    return await API.get(`${BASE_URL}/atividades`).then(
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

export const insertAtividade = async (param) => {
  try {
    return await API.post(`${BASE_URL}/atividades`, param).then(
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

export const updateAtividade = async (param) => {
  try {
    return await API.put(`${BASE_URL}/atividades/${param.id}`, param).then(
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

export const deleteAtividade = async (id) => {
  try {
    return await API.delete(`${BASE_URL}/atividades/${id}`).then(
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
