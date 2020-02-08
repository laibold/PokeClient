import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserService from "../services/UserService";
import { Nav, NavGroup, Button, PokeCoin, CenteredDiv } from "../styles/StyledComponents";
import ThemeSelect from './ThemeSelect'
import Error from "./Error";
import { connect } from "react-redux";
import { logoutUser } from "../actions/userActions";

function NavBar(props) {
  const changeTheme = props.changeTheme
  const theme = props.theme
  const user = useSelector(state => state.userReducer);
  const [error, setError] = useState(false);
  const userService = new UserService();
  let userMenu = "";
  let loginLogoutMenu = "";

  const onLogOutClicked = async () => {
    setError(false);
    try {
      userService.deleteCookie();
      props.onLogoutUser(user);
    } catch (e) {
      setError(true);
    }
  };

  if (user.name !== "") {
    userMenu = (
      <NavGroup>
        <Link to="/">
          <Button nav>Home</Button>
        </Link>
        <Link to="/Mine">
          <Button nav>Mine</Button>
        </Link>
        <Link to="/Shop">
          <Button nav>Shop</Button>
        </Link>
        <Link to="/Collection">
          <Button nav>Collection</Button>
        </Link>
        <Link to="/Shop/AllCards">
          <Button nav>All Cards</Button>
        </Link>
      </NavGroup>
    );

    loginLogoutMenu = (
      <NavGroup right>
        <CenteredDiv>Logged in as<br />{user.name}</CenteredDiv>
        <PokeCoin>P</PokeCoin>
        <div>{user.coins}</div>
        <Link to="/Login" onClick={onLogOutClicked}>
          <Button nav>Logout</Button>
        </Link>
      </NavGroup>
    );
  } else {
    loginLogoutMenu = (
      <NavGroup right>
        <Link to="/Login">
          <Button nav>Login</Button>
        </Link>
        <Link to="/Register">
          <Button nav>Register</Button>
        </Link>
      </NavGroup>
    );
  }

  return (
    <Nav>
      {error ? <Error message="Something went wrong with Logging out" /> : null}
      {userMenu}
      <ThemeSelect
        changeTheme={changeTheme}
        theme={theme}
      />
      {loginLogoutMenu}
    </Nav>
  );
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      onLogoutUser: user => {
        dispatch(logoutUser(user));
      }
    };
  }
)(NavBar);
