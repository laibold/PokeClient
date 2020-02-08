import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, BorderBox } from "../styles/StyledComponents";
import UserService from "../services/UserService";
import Error from "./Error";
import WalletService from "../services/WalletService";
import { logUser, setCoins } from "../actions/userActions";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const walletService = new WalletService();
  const userService = new UserService();
  let loginMessage = "";

  const onLoginClick = async event => {
    event.preventDefault();
    setError(false);
    try {
      const token = await userService.loginUser(username, password);
      const userCoins = await walletService.getUserCoins();
      props.onlogUser({
        name: username,
        token: token
      })
      props.onUpdateUserCoins(userCoins)
      try {
        props.history.push("/");
      } catch (e) {
        alert(e.message);
      }
    } catch (e) {
      setError(true);
    }
  };

  if (props.loginMessage === "true") {
    loginMessage = "You need to be logged in to view this Page.";
  }

  return (
    <div>
      {error ? <Error message="Something went wrong with Logging in" /> : null}
      <BorderBox>
        <h1>Login</h1>
        <Form onSubmit={event => onLoginClick(event)}>
          {loginMessage}
          <label>Username</label>
          <Input
            type="text"
            name="username"
            onChange={event => setUsername(event.target.value)}
          />
          <label>Password</label>
          <Input
            type="password"
            name="password"
            onChange={event => setPassword(event.target.value)}
          />
          <Button type="submit">login</Button>
        </Form>
      </BorderBox>
    </div>
  );
}

export default withRouter(connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      onUpdateUserCoins: cards => {
        dispatch(setCoins(cards));
      },
      onlogUser: user => {
        dispatch(logUser(user));
      }
    };
  }
)(LoginPage));
