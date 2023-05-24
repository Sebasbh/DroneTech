  
//  export const Banner = () => {
//   return ( <div className="banner">
//           <img className ="imagen"src="/assets/Fotos/imagenbaner.jpeg"  alt="foto"/>
//           </div>
    
//   )
// }

export const Banner = () => {
        return (
          <div className="banner">
            <div className="image-wrapper">
              <img className="rounded-image" src="/assets/Fotos drones/WING-4S.png" alt="foto" />
            </div>
            <div className="text-wrapper">
              <h1>DroneTech</h1>
              <p>Tu solución en drones</p>
              <button className="contact-button">Contactar</button>
            </div>
          </div>
        );
      };
      
