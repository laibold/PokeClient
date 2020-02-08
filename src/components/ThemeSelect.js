import React from "react";
import styled, { css } from "styled-components";
import { images } from "../styles/ThemeConstants";

const SelectMenu = styled.div`
  display: flex;
  justify-content: end;
`;

const PokeImg = styled.img`
  height: 64px;
  width: 64px;

  ${props =>
    props.gray &&
    css`
      :not(:hover) {
        filter: grayscale(100%);
      }
    `}
`;

const pokemonThemes = [
    {
        img: images.bulbasaur,
        name: 'bulbasaur'
    },
    {
        img: images.charmander,
        name: 'charmander'
    },
    {
        img: images.squirtle,
        name: 'squirtle'
    },
    {
        img: images.pikachu,
        name: 'pikachu'
    },
    {
        img: images.eevee,
        name: 'eevee'
    },
]

function ThemeSelect(props) {
    const changeTheme = props.changeTheme
    const theme = props.theme

    return(
        <SelectMenu>
            {pokemonThemes.map((value, index) => {
                if(theme === value.name) {
                    return <PokeImg
                        key={index}
                        src={value.img} 
                        onClick={(e) => changeTheme(value.name)}
                    />
                } else {
                    return <PokeImg
                        gray
                        key={index}
                        src={value.img} 
                        onClick={(e) => changeTheme(value.name)}
                    />
                }
            })}
        </SelectMenu>
    )
}

export default ThemeSelect;
