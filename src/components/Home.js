import React from "react";
import { BorderBox } from "../styles/StyledComponents";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector(state => state.userReducer);

  return (
    <BorderBox>
      <h1>Welcome {user.name}</h1>
      <h3>Gotta catch em all!</h3>
    </BorderBox>
  );
}

export default Home;
