import React from 'react';
import { BaseLayout } from '../../layout/BaseLayout';
import {
  Grid,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import styled from 'styled-components';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
            {/* <Input title="username" placeholder="username" /> */}
            <TextField
              placeholder="username"
              title="username"
              variant="outlined"
              size="small"
            />
            {/* <Input title="password" placeholder="password" type="password" /> */}
            {/* <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel> */}
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="password"
              size="small"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </Grid>
        </Wrapper>
        <Grid item xs={4}></Grid>
      </Grid>
    </BaseLayout>
  );
};
