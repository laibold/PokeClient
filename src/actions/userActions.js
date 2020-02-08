import { LOG_USER } from "../constants/userConstants";
import { LOGOUT_USER } from "../constants/userConstants";
import { SET_COINS } from "../constants/userConstants";
import { SET_MINEDCOINS } from "../constants/userConstants";

export const logUser = user => {
  return {
    type: LOG_USER,
    payload: {
      name: user.name,
      token: user.token
    }
  };
};

export const logoutUser = user => {
  return {
    type: LOGOUT_USER,
    payload: {
      name: "",
      token: ""
    }
  };
};

export const setCoins = coins => {
  return {
    type: SET_COINS,
    payload: { coins: coins }
  };
};

export const setMinedCoins = () => {
  return {
    type: SET_MINEDCOINS
  };
};
