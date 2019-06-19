import axios from "axios";

const api = {
  fetchLists() {
    return axios.get("/api/lists/all");
  },
  createList(list) {
    return axios.post(`/api/lists/create`, list);
  },
  updateList(id, updatedList) {
    return axios.post(
      `/api/lists/${id}/update`,
      updatedList
    );
  },
  deleteList(id) {
    return axios.delete(`/api/lists/${id}/delete`);
  },
  createItem(item) {
    return axios.post(`/api/lists/${item.listId}/items/create`, item);
  },
  updateItem(item, updatedItem) {
    return axios.post(
      `/api/lists/${item.listId}/items/${item.id}/update`,
      updatedItem
    );
  },
  deleteItem(item) {
    return axios.delete(`/api/lists/${item.listId}/items/${item.id}/delete`);
  }
};

export default api;
