const axios = require("axios");
//const API_URL = "http://localhost:6060/api/v1";
const API_URL = process.env.API_URL;

module.exports = {
  getTeams: async function () {
    try {
      const response = await axios.get(`${API_URL}/team/get-all`);
      return response.data.result;
    } catch (error) {
      console.error("Ошибка при получении команд:", error);
      return [];
    }
  },
  updateTeam: async function (id, team_name, link, track) {
    try {
      const response = await axios.put(`${API_URL}/team/update/${id}`, {
        team_name,
        link,
        track,
      });
      return response.data.result;
    } catch (error) {
      console.error("Ошибка при обновлении команды:", error);
      return null;
    }
  },
  deleteTeam: async function (id) {
    try {
      const response = await axios.delete(`${API_URL}/team/delete/${id}`);
      return response.data.result;
    } catch (error) {
      console.error("Ошибка при удалении команды:", error);
      return null;
    }
  },
};
