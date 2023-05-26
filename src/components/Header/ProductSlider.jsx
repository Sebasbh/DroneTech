// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import MobileStepper from '@mui/material/MobileStepper';
// import Button from '@mui/material/Button';
// import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';


// export const ProductSlider = ({ products }) => {
//     const [activeStep, setActiveStep] = useState(0);
//     const maxSteps = products.length;
  
//     const handleNext = () => {
//       setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };
  
//     const handleBack = () => {
//       setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };
  
//     return (
//       <div>
//         <Card>
//           <CardMedia
//             component="img"
//             height="200"
//             image={products[activeStep].image}
//             alt={products[activeStep].name}
//           />
//           <MobileStepper
//             steps={maxSteps}
//             position="static"
//             activeStep={activeStep}
//             nextButton={
//               <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
//                 Next
//                 <KeyboardArrowRight />
//               </Button>
//             }
//             backButton={
//               <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//                 <KeyboardArrowLeft />
//                 Back
//               </Button>
//             }
//           />
//         </Card>
//       </div>
//     );
//   };
  