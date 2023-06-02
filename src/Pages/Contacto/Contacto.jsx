import React, { useState } from 'react';
import {Header} from '../../components/Header/Header'
import "./Contacto.css" // Archivo CSS para el estilo
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Footer} from '../../components/Footer/Footer'


export function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario a través de una API o cualquier otro método de tu elección
    // Por simplicidad, aquí solo marcamos el formulario como enviado
    setIsSubmitted(true);
  };

  return (

    <>
   <Header/>

    <div className="container">
      <div className="infoSection">
        <h2>CONTÁCTANOS</h2> <br/ >
        <Grid className='address' item xs={12} sm={6} md={3}>
              <Typography variant="body2" align="center">
                {/* <p className='infoAddress'>Calle/Factoria N5-Madrid <br />
                mail:info@instadrone.com <br />
                tel:912287734-912287734 
                    </p> <br /> 
                <div className="socialMedia">  
                    <TwitterIcon className="social-icon" fontSize='large' />
                    <FacebookIcon className="social-icon" fontSize='large'/>
                    <InstagramIcon className="social-icon" fontSize='large' />
                    <LinkedInIcon className="social-icon" fontSize='large'/>
                    <YouTubeIcon className="social-icon" fontSize='large'/>
                </div> */}
                <img src="/assets/Fotos drones/AERO-1X.png" alt="Foto" className="contact-image" />

              </Typography>
            
          </Grid>

      </div>

      <div className="formSection">
        {isSubmitted ? (
          <div>
            <h2>¡Formulario enviado!</h2>
            <p>Gracias por contactarnos.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="name">Nombre y Apellido:</label>
              <input className='inputText'
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="phone">Teléfono de Contacto:</label>
              <input className='inputText'
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email:</label>
              <input className='inputText'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="message">Mensaje:</label>
              <textarea className='inputText'
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className='btnSubmit' type="submit">Enviar</button>
          </form>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
}





