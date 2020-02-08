import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, BorderBox } from "../styles/StyledComponents";
import UserService from "../services/UserService";
import Error from "./Error";

export default withRouter(function (props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  return (
    <div>
      {error ? <Error message="Something went wrong with Logging out" /> : null}
      <BorderBox>
        <h1>Register</h1>
        <Form
          onSubmit={async event => {
            event.preventDefault();
            setError(false);
            try {
              await new UserService().registerUser(username, password);
              props.history.push("/Login");
            } catch (e) {
              setError(true);
            }
          }}
        >
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
          <Button type="submit">register</Button>
        </Form>
      </BorderBox>
    </div>
  );
});
