import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import Home from "./Home";
import Shop from "./Shop";
import MiningPage from "./MiningPage";
import Collection from "./Collection";
import CardDetail from "./CardDetail";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import AllCards from "./AllCards";
import UserService from "../services/UserService";
import WalletService from "../services/WalletService";
import Error from "./Error";
import { Content } from '../styles/StyledComponents'
import { setCoins, logUser } from "../actions/userActions";

function PokeClient(props) {
  const user = useSelector(state => state.userReducer);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const authorized = user.name !== "";
  const userService = new UserService();
  const walletService = new WalletService();

  useEffect(() => {
    (async function asyncApiCall() {
      setError(false);
      setIsLoading(true);
      if (user.name === "" && userService.getTokenFromCookie() !== "") {
        try {
          const loggedUser = await userService.loginUserWithToken();
          const userCoins = await walletService.getUserCoins();
          props.onUpdateUserCoins(userCoins);
          props.onLogUser({
            name: loggedUser[0],
            token: loggedUser[1]
          })
        } catch (e) {
          setError(true);
        }
      }
      setIsLoading(false)
    })();
  }, []);

  return (
    <div>
      {error ? <Error message="Something went wrong with Logging out" /> : null}
      {isLoading ? <h1>. . .</h1> :
        <Content>
          <Route exact path="/">
            {authorized ? <Home /> : <LoginPage loginMessage="true" />}
          </Route>
          <Route exact path="/Mine">
            {authorized ? <MiningPage /> : <LoginPage loginMessage="true" />}
          </Route>
          <Route exact path="/Shop">
            {authorized ? <Shop /> : <LoginPage loginMessage="true" />}
          </Route>
          <Route exact path="/Collection">
            {authorized ? <Collection /> : <LoginPage loginMessage="true" />}
          </Route>
          <Route exact path="/Login">
            <LoginPage />
          </Route>
          <Route exact path="/Register">
            <RegisterPage />
          </Route>
          <Route path="/cards/:cardId">
            {authorized ? <CardDetail /> : <LoginPage loginMessage="true" />}
          </Route>
          <Route path="/Shop/:AllCards">
            {authorized ? <AllCards /> : <LoginPage loginMessage="true" />}
          </Route>
        </Content>
      }

    </div>
  );
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      onLogUser: user => {
        dispatch(logUser(user));
      },
      onUpdateUserCoins: cards => {
        dispatch(setCoins(cards));
      }
    };
  }
)(PokeClient);
