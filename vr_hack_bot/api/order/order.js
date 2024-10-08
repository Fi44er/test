const { default: axios } = require("axios");
//const API_URL = "http://localhost:6060/api/v1";
const API_URL = process.env.API_URL;

module.exports = {
  getOrders: async function () {
    try {
      const response = await axios.get(`${API_URL}/order/get-all`);
      return response.data.result;
    } catch (error) {
      console.error("Ошибка при получении заявок:", error);
      return [];
    }
  },
  updateOrder: async function (id, fio, phone_number, email) {
    try {
      const response = await axios.put(`${API_URL}/order/update/${id}`, {
        fio,
        phone_number,
        email,
      });
      return response.data.result;
    } catch (error) {
      console.error("Ошибка при обновлении заявки:", error);
      return null;
    }
  },
  deleteOrder: async function (id) {
    try {
      const response = await axios.delete(`${API_URL}/order/delete/${id}`);
      return response.data.result;
    } catch (error) {
      console.error("Ошибка при удалении заявки:", error);
      return null;
    }
  },
};
