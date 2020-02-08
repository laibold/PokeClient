import React from "react";
import './App.css';
import PokeClient from "./components/PokeClient";
import NavBar from './components/NavBar';
import { background, backgroundImg } from "./styles/ThemeConstants";
import styled, { ThemeProvider, withTheme } from 'styled-components'

const PokeApp = styled.div`
  min-height: 100vh;
  background-color: ${background};
  background-image: ${backgroundImg};
  background-attachment: fixed;
  background-position: bottom right;
  background-repeat: no-repeat;
`;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.themeChanger = this.themeChanger.bind(this)
    this.state = {
      theme: 'bulbasaur'
    }
  }

  themeChanger(themeName) {
    this.setState({
      theme: themeName
    })
  }

  render() {
    return (
      <ThemeProvider theme={{ pokemon: this.state.theme }}>
        <PokeApp>
          <NavBar
            changeTheme={this.themeChanger}
            theme={this.state.theme} />

          <PokeClient />
        </PokeApp>
      </ThemeProvider>
    )
  }
}

export default withTheme(App);