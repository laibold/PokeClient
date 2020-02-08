import React from "react";
import { withRouter } from "react-router-dom";
import { PokemonCardImg } from "../styles/StyledComponents";

function Card(props) {
  return (
    <PokemonCardImg
      src={props.img}
      alt={props.title}
      onClick={() => {
        try {
          props.history.push(`/cards/${props.id}`);
        } catch (e) {
          alert(e.message);
        }
      }}
    />
  );
}

export default withRouter(Card);
