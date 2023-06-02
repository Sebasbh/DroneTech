import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css"

const FooterContainer = styled('footer')(({ theme }) => ({
  padding: theme.spacing(10),
  backgroundColor: '#FF4000', // Color naranja
  color: theme.palette.primary.contrastText,
}));

const FooterSection = styled('div')({
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-around',
});

export const FooterMui = () => {
  return (
    <FooterContainer className='main-footer'>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection>
              <Typography variant="body2" align="center">
                <span style={{ color: 'black', fontSize: '16px', fontWeight: '400' }}>CONTACTO</span> <br />
                <span style={{ color: 'white' }}>Calle/Factoria N5-Madrid</span> <br />
                <span style={{ color: 'white' }}>mail:info@instadrone.com info@instadrone.com</span> <br />
                <span style={{ color: 'white' }}>tel:912287734-912287734</span> <br /> <br />
              </Typography>
            </FooterSection>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection>
              <Typography variant="body2" align="center">
                <span style={{ color: 'black', fontSize: '16px', fontWeight: '400' }}>AYUDA</span> <br />
                <span style={{ color: 'white' }}>Especialistas en drones</span> <br />
                <span style={{ color: 'white' }}>Asesoramiento personalizado</span> <br />
                <span style={{ color: 'white' }}>Servicio Técnico/Postventa</span> <br />
                <span style={{ color: 'white' }}>Opiniones</span>
              </Typography>
            </FooterSection>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection>
              <Typography variant="body2" align="center">
                <span style={{ color: 'black', fontSize: '16px', fontWeight: '400' }}>INFORMACIÓN</span> <br />
                <span style={{ color: 'white' }}>Blog de Drones</span> <br />
                <span style={{ color: 'white' }}>Proceso de compra</span> <br />
                <span style={{ color: 'white' }}>Tipos de envío</span> <br />
                <span style={{ color: 'white' }}>Devoluciones</span> <br />
                <span style={{ color: 'white' }}>Términos y condiciones</span> <br />
                <span style={{ color: 'white' }}>Política de privacidad</span>
              </Typography>
            </FooterSection>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection>
              <Typography variant="body2" align="center">
                <span style={{ color: 'black', fontSize: '16px', fontWeight: '400' }}>SIGUENOS</span> <br /> 
                <TwitterIcon className="social-icon" fontSize='medium' />
                <FacebookIcon className="social-icon" fontSize='medium' />
                <InstagramIcon className="social-icon" fontSize='medium'  />
                <LinkedInIcon className="social-icon" fontSize='medium'  />
                <YouTubeIcon className="social-icon" fontSize='medium'  />
                <br />   <br /> 
                <span style={{ color: 'black', fontSize: '16px', fontWeight: '400' }}>HORARIO</span> <br />
                <span style={{ color: 'white' }}>Lunes a Viernes</span> <br />
                <span style={{ color: 'white' }}>10:00-14:00 Y 17:00-20:30</span>
              </Typography>
            </FooterSection>
          </Grid>
        </Grid>
        <br /> <br />

        <Typography variant="body1" align="center" style={{ color: '#201E1F', fontSize: '14px', fontWeight: '200' }}>
          <span style={{ color: 'black' }}>©️ 2023 Instadron, Inc. </span>
          <span style={{ color: 'black' }}>Informacion legal/Politica de privacidad.</span>
        </Typography>
      </Container>
    </FooterContainer>
  );
};
