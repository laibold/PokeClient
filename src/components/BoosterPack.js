import React, { useState } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import CardService from "../services/CardService";
import WalletService from "../services/WalletService";
import { Button, BorderBox } from "../styles/StyledComponents";
import { setCoins } from "../actions/userActions";
import { setCards } from "../actions/cardActions";
import Error from "./Error";

const BoosterPack = props => {
  const cardService = new CardService();
  const walletService = new WalletService();
  const [showPacks, setshowPacks] = useState(false);
  const [buyError, setBuyError] = useState(false);

  const buyPack = async () => {
    setBuyError(false);
    try {
      await cardService.buyPack(props.packName);
      const userCoins = await walletService.getUserCoins();
      props.onUpdateUserCoins(userCoins);
    } catch (e) {
      setBuyError(true);
    }
  };

  const showPack = () => {
    props.onSetCards(props.cards)
    setshowPacks(true);
  };

  return (
    <div>
      {buyError ? (
        <Error message="Something went wrong with buying the BoosterPack. You might not have enough coins :(" />
      ) : null}
      <BorderBox primary>
        <h3>Name</h3>
        <h2>{props.packName}</h2>
        <h3>Price</h3>
        <h2>{props.costs} PokéCoins</h2>

        <Button secondary onClick={showPack}>
          Show Pack
        </Button>
        <Button
          interaction
          onClick={buyPack}
        >
          Buy this Pack
        </Button>
      </BorderBox>
      {showPacks ? <SearchBar /> : null}
    </div>
  );
};

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      onUpdateUserCoins: cards => {
        dispatch(setCoins(cards));
      },
      onSetCards: cards => {
        dispatch(setCards(cards));
      }
    };
  }
)(BoosterPack);
