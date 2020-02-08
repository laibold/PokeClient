import { SET_BOOSTERPACKS } from "../constants/cardConstants";

const boosterPacks = { boosters: [{ name: "", costs: "", cards: "" }] };

export const boosterPackReducer = (state = boosterPacks, action) => {
  switch (action.type) {
    case SET_BOOSTERPACKS:
      return {
        boosters: action.payload.packs.boosterPacks
      };
    default:
      return state;
  }
};
