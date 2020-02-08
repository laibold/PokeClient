import styled, { css } from "styled-components";
import { text,
  highlight,
  highlight_alt,
  interaction,
  primary, 
  primary_alt, 
  secondary, 
  secondary_alt, 
  nav, 
  nav_light, 
  nav_dark, 
  interaction_dark,
  interaction_light,
  backgroundImg } from './ThemeConstants';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 0.5em;
  }
`;

export const PokemonCardImg = styled.img`
  margin: 1em;
  height: 326px;
  width: 234px;
  border: 8px solid black;
  object-fit: none;
`;

export const CenteredDiv = styled.div`
  text-align: center;
`;

export const FlexContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Input = styled.input`
  border: none;  
  background-color: white;
  box-shadow:
    2px 2px 0 2px ${primary_alt},
    -2px -2px 0 2px ${primary},

    4px 0 0 4px black,
    -4px 0 0 4px black,
    0 4px 0 4px black,
    0 -4px 0 4px black;
    
    padding: 4px;
`;

export const PixelBorder = styled.div`
  box-shadow:
    4px 4px 0 4px ${primary_alt},
    -4px -4px 0 4px ${primary},

    8px 0 0 8px black,
    -8px 0 0 8px black,
    0 8px 0 8px black,
    0 -8px 0 8px black;

    margin: 16px;

    ${props => props.small && css`
      box-shadow:
        2px 2px 0 2px ${primary_alt},
        -2px -2px 0 2px ${primary},

        4px 0 0 4px black,
        -4px 0 0 4px black,
        0 4px 0 4px black,
        0 -4px 0 4px black;

      margin: 8px;
    `};

    ${props => props.large && css`
      box-shadow:
        8px 8px 0 8px ${primary_alt},
        -8px -8px 0 8px ${primary},

        16px 0 0 16px black,
        -16px 0 0 16px black,
        0 16px 0 16px black,
        0 -16px 0 16px black;

        margin: 32px;
    `};
`;

export const Button = styled.button`
font-family: 'Press Start 2P', monospace;
font-size: 16px;
color: black;
text-align: center;
border: none;
padding: 0 1em;
margin: 16px;
transition: all 0.15s;

background-color: ${interaction};
box-shadow: 
  4px 0 0 0 ${interaction},
  -4px 0 0 0 ${interaction},
  0 4px 0 0 ${interaction},
  0 -4px 0 0 ${interaction},

  4px 4px 0 0 ${interaction_dark},
  0 0 0 4px ${interaction_light},

  4px 0 0 4px ${interaction_dark},
  -4px 0 0 4px ${interaction_light},
  0 4px 0 4px ${interaction_dark},
  0 -4px 0 4px ${interaction_light},

  0 0 0 8px black,
  8px 0 0 4px black,
  -8px 0 0 4px black,
  0 8px 0 4px black,
  0 -8px 0 4px black;

  ${props => props.primary && css`
  background-color: ${primary};
  box-shadow: 
    4px 0 0 0 ${primary},
    -4px 0 0 0 ${primary},
    0 4px 0 0 ${primary},
    0 -4px 0 0 ${primary},

    4px 4px 0 0 ${primary},
    0 0 0 4px ${primary_alt},

    4px 0 0 4px ${primary},
    -4px 0 0 4px ${primary_alt},
    0 4px 0 4px ${primary},
    0 -4px 0 4px ${primary_alt},

    0 0 0 8px black,
    8px 0 0 4px black,
    -8px 0 0 4px black,
    0 8px 0 4px black,
    0 -8px 0 4px black;
  `};

  ${props => props.secondary && css`
    background-color: ${secondary};
    box-shadow: 
      4px 0 0 0 ${secondary},
      -4px 0 0 0 ${secondary},
      0 4px 0 0 ${secondary},
      0 -4px 0 0 ${secondary},

      4px 4px 0 0 ${secondary_alt},
      0 0 0 4px ${secondary},

      4px 0 0 4px ${secondary_alt},
      -4px 0 0 4px ${secondary},
      0 4px 0 4px ${secondary_alt},
      0 -4px 0 4px ${secondary},

      0 0 0 8px black,
      8px 0 0 4px black,
      -8px 0 0 4px black,
      0 8px 0 4px black,
      0 -8px 0 4px black;
  `};

  ${props => props.nav && css`
    background-color: ${nav};
    box-shadow: 
      4px 0 0 0 ${nav},
      -4px 0 0 0 ${nav},
      0 4px 0 0 ${nav},
      0 -4px 0 0 ${nav},

      4px 4px 0 0 ${nav_dark},
      0 0 0 4px ${nav_light},

      4px 0 0 4px ${nav_dark},
      -4px 0 0 4px ${nav_light},
      0 4px 0 4px ${nav_dark},
      0 -4px 0 4px ${nav_light},

      0 0 0 8px black,
      8px 0 0 4px black,
      -8px 0 0 4px black,
      0 8px 0 4px black,
      0 -8px 0 4px black;
  `};

  ${props => props.interaction && css`
    background-color: ${interaction};
    box-shadow: 
      4px 0 0 0 ${interaction},
      -4px 0 0 0 ${interaction},
      0 4px 0 0 ${interaction},
      0 -4px 0 0 ${interaction},

      4px 4px 0 0 ${interaction_dark},
      0 0 0 4px ${interaction_light},

      4px 0 0 4px ${interaction_dark},
      -4px 0 0 4px ${interaction_light},
      0 4px 0 4px ${interaction_dark},
      0 -4px 0 4px ${interaction_light},

      0 0 0 8px black,
      8px 0 0 4px black,
      -8px 0 0 4px black,
      0 8px 0 4px black,
      0 -8px 0 4px black;
  `};

  &:hover {
    color: ${highlight};
    transition: all 0.15s;

    background-color: ${interaction_dark};
    box-shadow: 
      4px 0 0 0 ${interaction_dark},
      -4px 0 0 0 ${interaction_dark},
      0 4px 0 0 ${interaction_dark},
      0 -4px 0 0 ${interaction_dark},

      4px 4px 0 0 ${interaction_light},
      0 0 0 4px ${interaction},

      4px 0 0 4px ${interaction_light},
      -4px 0 0 4px ${interaction},
      0 4px 0 4px ${interaction_light},
      0 -4px 0 4px ${interaction},

      0 0 0 8px black,
      8px 0 0 4px black,
      -8px 0 0 4px black,
      0 8px 0 4px black,
      0 -8px 0 4px black;

    ${props => props.primary && css`
    box-shadow: 
      4px 0 0 0 white,
      -4px 0 0 0 white,
      0 4px 0 0 white,
      0 -4px 0 0 white,

      4px 4px 0 0 ${primary},
      0 0 0 4px ${primary_alt},

      4px 0 0 4px ${primary},
      -4px 0 0 4px ${primary_alt},
      0 4px 0 4px ${primary},
      0 -4px 0 4px ${primary_alt},

      0 0 0 8px black,
      8px 0 0 4px black,
      -8px 0 0 4px black,
      0 8px 0 4px black,
      0 -8px 0 4px black;
    `};

    ${props => props.secondary && css`
      background-color: ${secondary_alt};
      box-shadow: 
        4px 0 0 0 ${secondary_alt},
        -4px 0 0 0 ${secondary_alt},
        0 4px 0 0 ${secondary_alt},
        0 -4px 0 0 ${secondary_alt},

        -4px -4px 0 0 ${secondary},
        0 0 0 4px ${secondary_alt},

        4px 0 0 4px ${secondary_alt},
        -4px 0 0 4px ${secondary},
        0 4px 0 4px ${secondary_alt},
        0 -4px 0 4px ${secondary},

        0 0 0 8px black,
        8px 0 0 4px black,
        -8px 0 0 4px black,
        0 8px 0 4px black,
        0 -8px 0 4px black;
    `};

    ${props => props.nav && css`
      background-color: ${nav_dark};
      box-shadow: 
        4px 0 0 0 ${nav_dark},
        -4px 0 0 0 ${nav_dark},
        0 4px 0 0 ${nav_dark},
        0 -4px 0 0 ${nav_dark},

        4px 4px 0 0 ${nav_light},
        0 0 0 4px ${nav},

        4px 0 0 4px ${nav_light},
        -4px 0 0 4px ${nav},
        0 4px 0 4px ${nav_light},
        0 -4px 0 4px ${nav},

        0 0 0 8px black,
        8px 0 0 4px black,
        -8px 0 0 4px black,
        0 8px 0 4px black,
        0 -8px 0 4px black;
    `};

    ${props => props.interaction && css`
      background-color: ${interaction_dark};
      box-shadow: 
        4px 0 0 0 ${interaction_dark},
        -4px 0 0 0 ${interaction_dark},
        0 4px 0 0 ${interaction_dark},
        0 -4px 0 0 ${interaction_dark},

        4px 4px 0 0 ${interaction_light},
        0 0 0 4px ${interaction},

        4px 0 0 4px ${interaction_light},
        -4px 0 0 4px ${interaction},
        0 4px 0 4px ${interaction_light},
        0 -4px 0 4px ${interaction},

        0 0 0 8px black,
        8px 0 0 4px black,
        -8px 0 0 4px black,
        0 8px 0 4px black,
        0 -8px 0 4px black;
    `};
  }
`;

export const CardImage = styled.img`
  margin: 0.75em;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const PokeCoin = styled.div`
  display: inline-box;
  font-family: 'Press Start 2P', monospace;
  font-size: 16px;
  width: 16px;
  height: 16px;
  content: 'P';
  padding-left: 1px;
  margin: 16px;

  background-color: yellow;
  box-shadow: 
    4px 0 0 0 yellow,
    -4px 0 0 0 yellow,
    0 4px 0 0 yellow,
    0 -4px 0 0 yellow,

    4px 4px 0 0 orange,
    0 0 0 4px orange,

    4px 0 0 4px orange,
    -4px 0 0 4px orange,
    0 4px 0 4px orange,
    0 -4px 0 4px orange,

    0 0 0 8px black,
    8px 0 0 4px black,
    -8px 0 0 4px black,
    0 8px 0 4px black,
    0 -8px 0 4px black;
`;

export const BorderBox = styled.div`
background-color: ${primary};
box-shadow: 
  8px 0 0 0 ${primary},
  -8px 0 0 0 ${primary},
  0 8px 0 0 ${primary},
  0 -8px 0 0 ${primary},

  8px 8px 0 0 ${primary_alt},

  8px 0 0 8px ${primary_alt},
  -8px 0 0 8px ${primary_alt},
  0 8px 0 8px ${primary_alt},
  0 -8px 0 8px ${primary_alt},

  0 0 0 16px black,
  16px 0 0 8px black,
  -16px 0 0 8px black,
  0 16px 0 8px black,
  0 -16px 0 8px black;

  padding: 1em 2em;
  margin: 32px;
  
  ${props => props.primary && css`
    background-color: ${primary};
    box-shadow: 
      8px 0 0 0 ${primary},
      -8px 0 0 0 ${primary},
      0 8px 0 0 ${primary},
      0 -8px 0 0 ${primary},
    
      8px 8px 0 0 ${primary_alt},
    
      8px 0 0 8px ${primary_alt},
      -8px 0 0 8px ${primary_alt},
      0 8px 0 8px ${primary_alt},
      0 -8px 0 8px ${primary_alt},
    
      0 0 0 16px black,
      16px 0 0 8px black,
      -16px 0 0 8px black,
      0 16px 0 8px black,
      0 -16px 0 8px black;
  `};

  ${props => props.secondary && css`
    background-color: ${secondary};
    box-shadow: 
      8px 0 0 0 ${secondary},
      -8px 0 0 0 ${secondary},
      0 8px 0 0 ${secondary},
      0 -8px 0 0 ${secondary},
    
      8px 8px 0 0 ${secondary_alt},
    
      8px 0 0 8px ${secondary_alt},
      -8px 0 0 8px ${secondary_alt},
      0 8px 0 8px ${secondary_alt},
      0 -8px 0 8px ${secondary_alt},
    
      0 0 0 16px black,
      16data:image/png;expx 0 0 8px black,
      -16px 0 0 8px black,
      0 16px 0 8px black,
      0 -16px 0 8px black;
  `};
`;

export const PokeImg = styled.img`
    height: 64px;
    width: 64px;

    ${props => props.gray && css`
        :not(:hover) {
            filter: grayscale(100%);
        }
    `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${nav};
  border-bottom: 6px solid ${nav_dark};
`;
export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  ${props =>
    props.right &&
    css`
      justify-content: flex-end;
    `}
`;