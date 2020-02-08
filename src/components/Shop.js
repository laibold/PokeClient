import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import BoosterPack from "./BoosterPack";
import CardService from "../services/CardService";
import Error from "./Error";
import { setBoosters } from "../actions/cardActions";

function Shop(props) {
  const boosterPacks = useSelector(state => state.boosterPackReducer);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    (async function asyncApiCall() {
      setIsLoading(true);
      setError(false);
      try {
        const boosterPacks = await new CardService().fetchBoosterPacks();
        props.onSetBoosters({
          boosterPacks: boosterPacks
        });
      } catch (e) {
        setError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      {error ? (
        <Error message="Something went wrong with loading the Store" />
      ) : null}
      {isLoading ? (
        <h1>. . .</h1>
      ) : (
          <div>
            <h1>Newest Packs</h1>
            {boosterPacks.boosters.map((pack, index) => {
              return (
                <BoosterPack
                  packName={pack.name}
                  costs={pack.costs}
                  cards={pack.cards.cards}
                  key={index}
                />
              );
            })}
          </div>
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
      onSetBoosters: cards => {
        dispatch(setBoosters(cards));
      }
    };
  }
)(Shop);

