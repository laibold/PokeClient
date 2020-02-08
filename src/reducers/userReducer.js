import { LOG_USER } from "../constants/userConstants";
import { LOGOUT_USER } from "../constants/userConstants";
import { SET_COINS } from "../constants/userConstants";
import { SET_MINEDCOINS } from "../constants/userConstants";

const user = { name: "", token: "", coins: 0, minedCoins: 0 };

export const userReducer = (state = user, action) => {
  switch (action.type) {
    case LOG_USER:
      return {
        name: action.payload.name,
        token: action.payload.token,
        coins: state.coins,
        minedCoins: state.minedCoins
      };
    case LOGOUT_USER:
      return {
        name: "",
        token: "",
        coins: 0,
        minedCoins: 0
      };
    case SET_COINS:
      return {
        name: state.name,
        token: state.token,
        coins: action.payload.coins,
        minedCoins: state.minedCoins
      };
    case SET_MINEDCOINS:
      return {
        name: state.name,
        token: state.token,
        coins: state.coins,
        minedCoins: state.minedCoins + 1
      };
    default:
      return state;
  }
};
