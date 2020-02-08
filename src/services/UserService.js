import LoginBody from "../pokeclient/model/LoginBody";
import UsersApi from "../pokeclient/api/UsersApi";
import RegisterBody from "../pokeclient/model/RegisterBody";

const userApi = new UsersApi();

class UserService {

  registerUser = async (username, password) => {
    const registerBody = new RegisterBody(username, password);
    await userApi.authRegisterPost(registerBody);
  };

  loginUser = async (username, password) => {
    const loginBody = new LoginBody(username, password);
    const response = await userApi.authLoginPost(loginBody);
    var tomorrow = new Date(
      new Date().setDate(new Date().getDate() + 1)
    ).toUTCString();

    document.cookie = "userToken=" + response.token + ";expires=" + tomorrow;
    userApi.apiClient.authentications.token.apiKey = response.token;
    return response.token;

  };

  deleteCookie = () => {
    document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  };

  loginUserWithToken = async () => {
    var userToken = this.getTokenFromCookie();
    userApi.apiClient.authentications.token.apiKey = userToken;
    const response = await userApi.authMeGet();
    return [response.username, userToken]
  };

  getTokenFromCookie = () => {
    var name = "userToken=";
    if (document.cookie) {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].indexOf(name) === 0) {
          return cookies[i].substring(name.length, cookies[i].length);
        }
      }
    }
    return "";
  };
}

export default UserService;
