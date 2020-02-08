import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import CardService from "../services/CardService";
import Error from "./Error";
import { useSelector } from "react-redux";
import { setCards } from "../actions/cardActions";
import { connect } from "react-redux";

function Collection(props) {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);
  const cardReducer = useSelector(state => state.cardReducer);

  useEffect(() => {
    (async function asyncApiCall() {
      setError(false);
      setIsLoading(true);
      try {
        const userCards = await new CardService().fetchUserCards();
        props.onSetCards(userCards);
      } catch (e) {
        setError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      {error ? (
        <Error message="Something went wrong with showing the Collection" />
      ) : null}
      {isLoading ? (
        <h1>. . .</h1>
      ) : (
          <div>{cardReducer.cards.length === 0 ? null : <SearchBar />}</div>
        )}
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
)(Collection);
