import styled from 'styled-components';
import { MetaTags } from '../../components/General/MetaTags/MetaTags';

const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
`;

export const LandingFlex: React.FC<{ children: React.ReactElement }> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <MetaTags />
      <main>
        <LandingContainer>{children}</LandingContainer>
      </main>
    </>
  );
};
