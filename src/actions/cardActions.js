import { SET_BOOSTERPACKS } from "../constants/cardConstants";
import { SET_DETAIL_CARD } from "../constants/cardConstants";
import { SET_CARDS } from "../constants/cardConstants";
import { SET_FILTERED_CARDS } from "../constants/cardConstants";

export const setBoosters = boosterPacks => {
  return {
    type: SET_BOOSTERPACKS,
    payload: {
      packs: boosterPacks
    }
  };
};

export const setDetailCard = card => {
  return {
    type: SET_DETAIL_CARD,
    payload: {
      card: card
    }
  };
};

export const setCards = cards => {
  return {
    type: SET_CARDS,
    payload: {
      cards: cards
    }
  };
};

export const setFilteredCards = cards => {
  return {
    type: SET_FILTERED_CARDS,
    payload: {
      cards: cards
    }
  };
};
