import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {HomePage} from './Pages/HomePage/HomePage';
import {Cards} from './components/Main/Cards'
import {PageCart} from './Pages/PagesCart/PageCart'
import { SearchPages } from './Pages/SearchPages/SearchPages';
import { UserProvider } from './Context/UserProvider';
export function App() {

  return ( 
  <UserProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/imagen" element={<Cards/>} />
            <Route path="/cart" element={<PageCart/>} />
            <Route path="/search" element={<SearchPages/>} />
        </Routes>
    </BrowserRouter>
</UserProvider>
  );
}




