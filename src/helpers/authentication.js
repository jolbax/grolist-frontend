import jwtDecode from "jwt-decode";
import api from "./api";

function checkTokenExpiration(token) {
  const tokenInfo = jwtDecode(token);
  if (tokenInfo.exp < Date.now() / 1000) {
    console.log(`Token expired on: ${Date(tokenInfo.exp)}`);
    api.refreshLogin({
      refreshToken: localStorage.getItem("refreshToken"),
      username: localStorage.getItem("username"),
      email: localStorage.getItem("email")
    }).then(resp => {
      localStorage.setItem('token', resp.data.token)
      window.location.href = "/";
    })
    // localStorage.clear();
    alert("Your session expired, please log in again.");
  }
}

export default checkTokenExpiration;
