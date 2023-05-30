import { MetaTags } from '../../components/General/MetaTags/MetaTags';
import styled from 'styled-components';

export const AppFlex: React.FC<{ children: React.ReactElement }> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <MetaTags />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};
