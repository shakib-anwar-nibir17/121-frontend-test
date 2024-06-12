import Cookies from "js-cookie";

export function getUserInfo() {
  let user = {};
  if (typeof window !== "undefined") {
    user =
      localStorage.getItem("user_info") &&
      JSON.parse(localStorage.getItem("user_info"));
  }
  return user || {};
}

export function isAuthUser() {
  const token = Cookies.get("authToken");
  if (token) {
    return true;
  } else {
    return false;
  }
}
