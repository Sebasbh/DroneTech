// import React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import { Link } from 'react-router-dom';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import {  getDron } from '../../Context/UserProvider';
// import { useContext } from 'react';






// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)', // Agregar sombra
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));



// export const SearchMui = ()=> {
//   const {cart,cartQuantity} = useContext(getDron);
//   /*const quantity=cart.length*/
//    return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{
//         backgroundColor: '#FF4000', color: '#white', '&:hover': {


//         },
//       }}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"

//             //color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon className="classestoolbar" />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{
//               flexGrow: 1,
//               display: { xs: 'none', sm: 'block' },
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             <img src="/assets/Fotos/icon_dron.png" alt="Logo" style={{ width: '40px', height: 'auto', marginRight: '10px', color: '#white' }} />
//             <span style={{ fontFamily: 'Roboto', fontSize: '24px', fontWeight: '300' }}>DroneTech</span>
//           </Typography>
//           <IconButton  >
//             <Badge badgeContent={cartQuantity} color="primary">
//               <Link className="iconocarrito" to="/cart">
//                 <AddShoppingCartIcon />
//               </Link>
//             </Badge>
//           </IconButton>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Buscar"
//               inputProps={{ 'aria-label': 'search' }}
//               sx={{ color: 'black' }}
//             />

//           </Search>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }







import React, { useContext,useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {  getDron } from '../../Context/UserProvider';
import { Badge } from '@mui/material';
import { blue } from '@mui/material/colors';













const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)', // Agregar sombra
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export const SearchMui = ()=> {
 const {cart,cartQuantity} = useContext(getDron);
 /*const quantity=cart.length*/
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#FF4000', color: '#white','&:hover': {
    

        },}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
          
            //color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon className="classestoolbar"  />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block', },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src="/assets/Fotos/icon_dron.png" alt="Logo" style={{ width: '40px', height: 'auto', marginRight: '10px', color: '#white'}} />
            <span style={{ fontFamily: 'Roboto', fontSize: '24px', fontWeight: '300' }}>DroneTech</span>
      
          </Typography>  
          
          <IconButton  >
            <Badge badgeContent={cartQuantity} color="primary">
              <Link className="iconocarrito" to="/cart">
              <AddShoppingCartIcon />
              </Link>
            </Badge>
          </IconButton>
         
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>      
              <StyledInputBase
                placeholder="Buscar"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ color: 'black' }}
              />
            
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  
  );
}