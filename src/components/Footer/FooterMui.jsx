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
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

export const FooterMui = () => {
  return (
    <FooterContainer>
      <Container maxWidth="md"><Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="body2" align="center">
          CONTACTO <br />
          <>Calle/Factoria N5-Madrid</>
          <>mail:info@instadrone.com info@instadrone.com</> <br />
          <>tel:912287734-912287734</> <br /> <br />
          

          AYUDA: <br />
          Especialistas en drones
          Asesoramiento personalizado
          Servicio Técnico/Postventa
          Opiniones

        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="body2" align="center">
          HORARIO <br/> 
          Lunes a Viernes
          10:OO-14:00 Y 17:00-20:30 

        </Typography>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="body2" align="center">
        INFORMACIÓN: <br />

        Blog de Drones
        Proceso de compra
        Tipos de envío
        Devoluciones
        Términos y condiciones
        Política de privacidad

        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="body2" align="center">
          SIGUENOS: <br/> <br/> 
          
          < TwitterIcon />
          < FacebookIcon />
          < InstagramIcon />
          < LinkedInIcon />
          < YouTubeIcon />

          
        </Typography>
      </Grid>
    </Grid>
    
         <Typography variant="body2" align="center">
         ©️ 2023 Instadron, Inc.Informacion legal | Politica de privacidad. 
        </Typography>
      </Container>
    </FooterContainer>
  );
};

