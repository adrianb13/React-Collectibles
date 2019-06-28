import axios from "axios";
import Auth from "./Auth";

const headers = () => {
  const options = {};
  // if authenticated create Authorization header to add to api calls
  if (Auth.isAuthenticated()) {
    options["headers"] = {
      "Authorization": `Bearer ${Auth.getToken()}`
    }
  }
  return options;
}

export default {
  getUsers: () => {
    return axios.get("/api/users", headers());
  },
  getUser: (login) => {
    return axios.post("/api/users/login", login);
  },
  getId: (id) => {
    return axios.get("/api/users/" +id);
  },
  createUser: (userInfo) => {
    return axios.post("/api/users", userInfo);
  },

  getCollectible: (collId) => {
    return axios.get("/api/collectibles/" + collId);
  },
  addCollectible: (coll) => {
    return axios.post("/api/collectibles", coll)
  },
  updateCollectible: (coll) => {
    return axios.put("/api/collectibles/"+coll.id, coll)
  },
  deleteCollectible: (collId) => {
    return axios.delete("/api/collectibles/" + collId);
  }
};