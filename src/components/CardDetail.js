import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardService from "../services/CardService";
import styled from "styled-components";
import { CardImage } from "../styles/StyledComponents";
import Error from "./Error";
import { setDetailCard } from "../actions/cardActions";

const CardInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const DetailView = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardDetail = (props) => {
  const { cardId } = useParams();
  const cardReducer = useSelector(state => state.cardReducer);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function asyncApiCall() {
      setIsLoading(true);
      setError(false);
      try {
        const detailCard = await new CardService().fetchDetailCard(cardId);
        props.onSetDetailCard(detailCard);
      } catch (e) {
        setError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      {error ? (
        <Error message="Something went wrong with showing the Card" />
      ) : (
          <div>
            {typeof cardReducer.detailCard == "undefined" ? null : (
              <div>
                {isLoading ? (
                  <h1>. . .</h1>
                ) : (
                    <DetailView>
                      <CardImage
                        src={cardReducer.detailCard.imageUrl}
                        alt={cardReducer.detailCard.name}
                      />
                      <CardInfo>
                        <div>Name</div>
                        <div>{cardReducer.detailCard.name}</div>
                        <div>Type</div>
                        <div>{cardReducer.detailCard.types}</div>
                        <div>Level</div>
                        <div>{cardReducer.detailCard.level}</div>
                        <div>Rarity</div>
                        <div>{cardReducer.detailCard.rarity}</div>
                        <div>Set</div>
                        <div>{cardReducer.detailCard.set}</div>
                        <div>HP</div>
                        <div>{cardReducer.detailCard.hp}</div>
                      </CardInfo>
                    </DetailView>
                  )}
              </div>
            )}
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
      onSetDetailCard: detailCard => {
        dispatch(setDetailCard(detailCard));
      }
    };
  }
)(CardDetail);
