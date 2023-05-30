import { AppFlex } from './App/AppFlex';
import { LandingFlex } from './Landing/LandingFlex';

export const getLayoutPerPathname = (pathname: string) => {
  if (pathname === '/') return LandingFlex;
  else return AppFlex;
};
