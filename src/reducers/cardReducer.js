import { SET_DETAIL_CARD } from "../constants/cardConstants";
import { SET_CARDS } from "../constants/cardConstants";
import { SET_FILTERED_CARDS } from "../constants/cardConstants";

const cards = { cards: [], filteredCards: [], detailCard: [] };

export const cardReducer = (state = cards, action) => {
  switch (action.type) {
    case SET_DETAIL_CARD:
      return {
        cards: state.cards,
        filteredCards: state.filteredCards,
        detailCard: action.payload.card
      };
    case SET_CARDS:
      return {
        cards: action.payload.cards
      };
    case SET_FILTERED_CARDS:
      return {
        cards: state.cards,
        filteredCards: action.payload.cards,
        detailCard: state.detailCard
      };
    default:
      return state;
  }
};
