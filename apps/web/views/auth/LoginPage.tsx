import React from 'react';
import { BaseLayout } from '../../layout/BaseLayout';
import { Grid, InputLabel, Input } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginPage = () => {
  return (
    <BaseLayout>
      <Grid
        container
        spacing={1}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'stretch'}
        style={{ height: '100%' }}
      >
        <Grid item xs={4}></Grid>
        <Wrapper>
          <Grid item xs={4}>
            <InputLabel>Login</InputLabel>
            <Input title="username" placeholder="username" />
            <Input title="password" placeholder="password" type="password" />
          </Grid>
        </Wrapper>
        <Grid item xs={4}></Grid>
      </Grid>
    </BaseLayout>
  );
};
