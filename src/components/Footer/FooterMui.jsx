import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const FooterContainer = styled('footer')(({ theme }) => ({
  padding: theme.spacing(5),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

export const FooterMui = () => {
  return (
    <FooterContainer>
      <Container maxWidth="md">
        <Typography variant="body2" align="center">
          Este es el Footer de mi aplicación.
        </Typography>
      </Container>
    </FooterContainer>
  );
};



