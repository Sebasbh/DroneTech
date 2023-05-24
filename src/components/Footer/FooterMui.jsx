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
    <FooterContainer>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection>
              <Typography variant="body2" align="center">
                <span style={{ color: '#201E1F', fontSize: '18px', fontWeight: '500' }}>CONTACTO</span> <br />
                Calle/Factoria N5-Madrid <br />
                mail:info@instadrone.com info@instadrone.com <br />
                tel:912287734-912287734 <br /> <br />

              </Typography>
            </FooterSection>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection>
              <Typography variant="body2" align="center">
         
              <span style={{ color: '#201E1F', fontSize: '18px', fontWeight: '500' }}>AYUDA</span> <br />
                Especialistas en drones <br />
                Asesoramiento personalizado <br />
                Servicio Técnico/Postventa <br />
                Opiniones
              </Typography>
            </FooterSection>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection>
              <Typography variant="body2" align="center">
                <span style={{ color: '#201E1F', fontSize: '18px', fontWeight: '500' }}>INFORMACIÓN</span> <br />
                Blog de Drones <br />
                Proceso de compra <br />
                Tipos de envío <br />
                Devoluciones <br />
                Términos y condiciones <br />
                Política de privacidad
              </Typography>
            </FooterSection>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterSection>
              <Typography variant="body2" align="center">
                <span style={{ color: '#201E1F', fontSize: '18px', fontWeight: '500' }}>SIGUENOS</span> <br /> 
                <TwitterIcon className="social-icon" />
                <FacebookIcon className="social-icon" />
                <InstagramIcon className="social-icon" />
                <LinkedInIcon className="social-icon" />
                <YouTubeIcon className="social-icon" />
                <br />   <br /> 

               
                <span style={{ color: '#201E1F', fontSize: '18px', fontWeight: '500' }}>HORARIO</span> <br />
                Lunes a Viernes <br />
                10:00-14:00 Y 17:00-20:30
              </Typography>
            </FooterSection>
          </Grid>
        </Grid>
        <br /> <br />

        <Typography variant="body2" align="center" style={{color:'#201E1F',fontSize: '20px', fontWeight: '500' }}>
          ©️ 2023 Instadron, Inc. Informacion legal/Politica de privacidad.
        </Typography>
      </Container>
    </FooterContainer>
  );
};