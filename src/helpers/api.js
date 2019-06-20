import axios from "axios";

const API_ENDPOINT = process.env.REACT_APP_GROLIST_API_URL;

const api = {
  fetchLists() {
    return axios.get(`${API_ENDPOINT}/api/lists/all`);
  },
  createList(list) {
    return axios.post(`${API_ENDPOINT}/api/lists/create`, list);
  },
  updateList(id, updatedList) {
    return axios.post(`${API_ENDPOINT}/api/lists/${id}/update`, updatedList);
  },
  deleteList(id) {
    return axios.delete(`${API_ENDPOINT}/api/lists/${id}/delete`);
  },
  createItem(item) {
    return axios.post(
      `${API_ENDPOINT}/api/lists/${item.listId}/items/create`,
      item
    );
  },
  updateItem(item, updatedItem) {
    return axios.post(
      `${API_ENDPOINT}/api/lists/${item.listId}/items/${item.id}/update`,
      updatedItem
    );
  },
  deleteItem(item) {
    return axios.delete(
      `${API_ENDPOINT}/api/lists/${item.listId}/items/${item.id}/delete`
    );
  }
};

export default api;
