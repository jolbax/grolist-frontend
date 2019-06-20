import axios from "axios";

const API_ENDPOINT = process.env.REACT_APP_GROLIST_API_URL;

function getOptions() {
  let options = {};
  if (localStorage.getItem("token")) {
    options.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
  }
  return options;
}

const api = {
  fetchLists() {
    return axios.get(`${API_ENDPOINT}/api/lists/all`, getOptions());
  },
  createList(list) {
    return axios.post(`${API_ENDPOINT}/api/lists/create`, list, getOptions());
  },
  updateList(id, updatedList) {
    return axios.post(
      `${API_ENDPOINT}/api/lists/${id}/update`,
      updatedList,
      getOptions()
    );
  },
  deleteList(id) {
    return axios.delete(`${API_ENDPOINT}/api/lists/${id}/delete`, getOptions());
  },
  createItem(item) {
    return axios.post(
      `${API_ENDPOINT}/api/lists/${item.listId}/items/create`,
      item,
      getOptions()
    );
  },
  updateItem(item, updatedItem) {
    return axios.post(
      `${API_ENDPOINT}/api/lists/${item.listId}/items/${item.id}/update`,
      updatedItem,
      getOptions()
    );
  },
  deleteItem(item) {
    return axios.delete(
      `${API_ENDPOINT}/api/lists/${item.listId}/items/${item.id}/delete`,
      getOptions()
    );
  },
  userLogin(payload) {
    return axios.post(`${API_ENDPOINT}/api/users/log_in`, payload);
  },
  createUser(payload) {
    return axios.post(`${API_ENDPOINT}/api/users/create`, payload);
  }
};

export default api;
