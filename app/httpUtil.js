import axios from "axios";

export function get(url) {
  console.log(url);
  //data tanne
  return axios({
    method: "GET",
    url: url
  });
}

export function post(url, data) {
  // naya data create garne
  return axios({
    method: "POST",
    url: url,
    data: data
  });
}

export function put(url, data, id) {
  return axios({
    method: "PUT",
    url: `${url}/${id}`,
    data: data
  });
  // update
}

export function remove(url, id) {
  return axios({
    method: "DELETE",
    url: `${url}/${id}`
  });
  // delete
}
