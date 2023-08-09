import axios from "axios";
const UserService = {};

UserService.register = function (data) {
  return axios.post("http://217.182.207.129:8000/api/v1/user", data);
};

UserService.login = function (data) {
  return axios.post("http://217.182.207.129:8000/api/v1/user/login", data);
};

UserService.AddPartenaire = function (data) {
  return axios.post("http://217.182.207.129:8000/api/v1/partenaire", data);
};

UserService.AddMonument = function (data) {
  return axios.post("http://217.182.207.129:8000/api/v1/monument", data);
};
export default UserService;
