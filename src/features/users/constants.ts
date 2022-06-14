import {black} from '../../assets/colors';

export const languageColors: {[language: string]: string} = {
  javascript: '#f1e05a',
  python: '#3572A5',
  html: '#e34c26',
  'c++': '#f34b7d',
  c: '#555555',
  sass: '#c6538c',
  scss: '#c6538c',
  java: '#b07219',
  css: '#563d7c',
  typescript: '#3178c6',
  kotlin: '#A97BFF',
  swift: '#F05138',
  shell: '#89e051',
  'objective-c': '#438eff',
  ruby: '#701516',
  dart: '#00B4AB',
  go: '#00ADD8',
  rust: '#dea584',
};

export const shadowStyles = {
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  shadowColor: black,
  elevation: 6,
};

export const rowsPerPageData = [
  {value: 25},
  {value: 50},
  {value: 75},
  {value: 100},
];
