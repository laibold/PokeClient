import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import styled from "styled-components";
import { Form, Input } from "../styles/StyledComponents";
import { useSelector } from "react-redux";
import CardService from "../services/CardService";
import {
  setFilteredCards
} from "../actions/cardActions";

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: space-between;
`;

function SearchBar(props) {
  const [search, setSearch] = useState("");
  const cardReducer = useSelector(state => state.cardReducer);

  useEffect(() => {
    const filteredCards = new CardService().getfilteredCards(cardReducer.cards, search);
    props.onSetFilteredCards(filteredCards);
  }, [search]);

  return (
    <div>
      {typeof cardReducer.filteredCards == "undefined" ? null : (
        <div>
          <Form>
            <Input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </Form>
          <CardList>
            {cardReducer.filteredCards.map((card, index) => {
              return (
                <Card
                  title={card.name}
                  level={card.level}
                  img={card.imageUrl}
                  key={index}
                  id={card.id}
                />
              );
            })}
          </CardList>
        </div>
      )}
    </div>
  );
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      onSetFilteredCards: filteredCards => {
        dispatch(setFilteredCards(filteredCards));
      }
    };
  }
)(SearchBar);