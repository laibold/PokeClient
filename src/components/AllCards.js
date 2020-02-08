import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import CardService from "../services/CardService";
import Error from "./Error";
import { setCards } from "../actions/cardActions";

function AllCards(props) {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function asyncApiCall() {
      setError(false);
      setIsLoading(true);
      try {
        const allCards = await new CardService().fetchAllCards();
        props.onSetCards(allCards)
      } catch (e) {
        setError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      {error ? (
        <Error message="Something went wrong with showing all Cards" />
      ) : null}
      {isLoading ? <h1>. . .</h1> : <SearchBar />}
    </div>
  );
};

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      onSetCards: cards => {
        dispatch(setCards(cards));
      }
    };
  }
)(AllCards);
