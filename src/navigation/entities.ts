import {screenNames} from './screenNames';

export type NavigationStack = {
  [screenNames.MAIN]: undefined;
  [screenNames.USER_DETAILS]: {username: string};
};
