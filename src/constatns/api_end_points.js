const hostname = window && window.location && window.location.hostname;
const prod = "https://jsonplaceholder.typicode.com";
const staging = "https://jsonplaceholder.typicode.com";
const dev = "https://jsonplaceholder.typicode.com";
let base = prod;

switch (hostname) {
  case "localhost":
    /*
      run any logic you need link setting Env Checkers
      */
    base = dev;
    break;
  case "vois-contacts-app":
    base = staging;
    break;
  default:
    base = prod;
}

const API_ENDPOINTS = {
  BASE: base,
  USERS: `${base}/users`,
};

export default API_ENDPOINTS;
