import React, { Component } from "react";
import MiningService from "../services/MiningService.js";
import { connect } from "react-redux";
import mining from "../../src/assets/image/mining.gif"
import { Input, Button, BorderBox, PokeCoin, CenteredDiv, FlexContent, PixelBorder } from "../styles/StyledComponents.js";

class MiningPage extends Component {
  constructor() {
    super();
    this.state = {
      isMining: false,
      mineText: "Data..."
    };
    this.miningService = new MiningService();
  }

  componentDidMount() {
    window.addEventListener("focus", this.onBlur);
  }

  componentWillUnmount() {
    this.stopMining();
  }

  startMining() {
    this.miningService.startMining(this.state.mineText);
    this.setState({ isMining: true });
  }

  stopMining() {
    if (this.state.isMining) {
      this.miningService.stopMining();
      this.setState({ isMining: false });
    }
  }

  onBlur = () => {
    // this.stopMining();
  };

  onMineTextChange = event => {
    this.setState({ mineText: event.target.value });
  };

  render() {
    var uxEle;
    var mineButton;
    var inputBox;

    if (this.state.isMining) {
      uxEle = (
        <PixelBorder>
          <img src={mining} alt="Mining" />
        </PixelBorder>
      );
      mineButton = (
        <Button type="button" onClick={() => this.stopMining()}>
          Stop Mining
        </Button>
      );
    } else {
      mineButton = (
        <Button type="button" onClick={() => this.startMining()}>
          Start Mining
        </Button>
      );
      inputBox = (
        <Input
          type="text"
          value={this.state.mineText}
          onChange={this.onMineTextChange}
        ></Input>
      );
    }

    return (
      <FlexContent>
        <BorderBox>
          <CenteredDiv>
            <h3>Mined coins: {this.props.userReducer.minedCoins} <PokeCoin>P</PokeCoin></h3>

            {inputBox}

            {mineButton}
          </CenteredDiv>
        </BorderBox>
        {uxEle}
      </FlexContent>
    );
  }
}

const mapStateToProps = state => {
  return {
    userReducer: state.userReducer
  };
};

export default connect(mapStateToProps)(MiningPage);
