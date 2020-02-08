import React from "react";
import styled from 'styled-components'

const ErrorMessage = styled.div`
  background-color: darkred;
  color: white;
  text-align: center;
`;

function Error(props) {
  return (
    <ErrorMessage>
      <h3>{props.message}</h3>
    </ErrorMessage>
  );
}

export default Error;
