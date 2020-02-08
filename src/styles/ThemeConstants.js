import theme from 'styled-theming';
import bulbasaurImg from '../assets/image/bulbasaur.png';
import charmanderImg from '../assets/image/charmander.png';
import squirtleImg from '../assets/image/squirtle.png';
import pikachuImg from '../assets/image/pikachu.png';
import eeveeImg from '../assets/image/eevee.png';

export const backgroundColor = theme('mode', {
    light: '#fafafa',
    dark: '#222'
  });

export const textColor = theme('mode', {
    light: '#000',
    dark: '#fff'
  });

export const text = theme('pokemon', {
  bulbasaur: '#fff',
  charmander: '#fff',
  squirtle: '#fff',
  pikachu: '#fff',
  eevee: '#fff'
});
export const navtext = theme('pokemon', {
  bulbasaur: '#fff',
  charmander: '#fff',
  squirtle: '#fff',
  pikachu: '#fff',
  eevee: '#fff'
});
export const link = theme('pokemon', {
  bulbasaur: '#fff',
  charmander: '#fff',
  squirtle: '#fff',
  pikachu: '#fff',
  eevee: '#fff'
});

export const background = theme('pokemon', {
  bulbasaur: '#399494',
  charmander: '#ff9441',
  squirtle: '#5a9ca4',
  pikachu: '#f6e662',
  eevee: '#a4624a'
});
export const primary = theme('pokemon', {
  bulbasaur: '#83eec5',
  charmander: '#de5239',
  squirtle: '#8bc5cd',
  pikachu: '#f6bd20',
  eevee: '#d59c4a'
});
export const primary_alt = theme('pokemon', {
  bulbasaur: '#62d5b4',
  charmander: '#8b2900',
  squirtle: '#297383',
  pikachu: '#de9400',
  eevee: '#e6c594'
});
export const secondary = theme('pokemon', {
  bulbasaur: '#317373',
  charmander: '#ffd57b',
  squirtle: '#e6ac5a',
  pikachu: '#9c5200',
  eevee: '#734a4a'
});
export const secondary_alt = theme('pokemon', {
  bulbasaur: '#184a4a',
  charmander: '#e6ac5a',
  squirtle: '#cd7b29',
  pikachu: '#623108',
  eevee: '#523120'
});
export const nav = theme('pokemon', {
  bulbasaur: '#a4d541',
  charmander: '#e63900',
  squirtle: '#ffd56a',
  pikachu: '#41414a',
  eevee: '#e6c594'
});
export const nav_light = theme('pokemon', {
  bulbasaur: '#bdff73',
  charmander: '#f6a400',
  squirtle: '#ffe69c',
  pikachu: '#737383',
  eevee: '#ffe6ac'
});
export const nav_dark = theme('pokemon', {
  bulbasaur: '#73ac31',
  charmander: '#ffc562',
  squirtle: '#d59452',
  pikachu: '#292929',
  eevee: '#d59c4a'
});
export const interaction = theme('pokemon', {
  bulbasaur: '#ee2039',
  charmander: '#188bb4',
  squirtle: '#832900',
  pikachu: '#c52018',
  eevee: '#523120'
});
export const interaction_light = theme('pokemon', {
  bulbasaur: '#ff6a62',
  charmander: '#31acee',
  squirtle: '#832900',
  pikachu: '#e65a41',
  eevee: '#523120'
});
export const interaction_dark = theme('pokemon', {
  bulbasaur: '#ac0031',
  charmander: '#08398b',
  squirtle: '#832900',
  pikachu: '#c52018',
  eevee: '#523120'
});
export const highlight = theme('pokemon', {
  bulbasaur: '#ffffff',
  charmander: '#ffffff',
  squirtle: '#ffffff',
  pikachu: '#ffffff',
  eevee: '#ffffff'
});
export const highlight_alt = theme('pokemon', {
  bulbasaur: '#cdcdcd',
  charmander: '#ffc562',
  squirtle: '#ffffff',
  pikachu: '#fff6a4',
  eevee: '#ffffff'
});

export const pokemonImg = theme('pokemon', {
  bulbasaur: bulbasaurImg,
  charmander: charmanderImg,
  squirtle: squirtleImg,
  pikachu: pikachuImg,
  eevee: eeveeImg,
});

export const backgroundImg = theme('pokemon', {
  bulbasaur: `url("${bulbasaurImg}")`,
  charmander: `url("${charmanderImg}")`,
  squirtle: `url("${squirtleImg}")`,
  pikachu: `url("${pikachuImg}")`,
  eevee: `url("${eeveeImg}")`,
});

export const images = ({
  bulbasaur: bulbasaurImg,
  charmander: charmanderImg,
  squirtle: squirtleImg,
  pikachu: pikachuImg,
  eevee: eeveeImg,
});