import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {theme} from './theme.js';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CategoryCarousel from './components/PopularPost.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import ComposeScoopPage from './ComposeScoopPage.js'import Signup from './pages/Signup.jsx';
;
function App() {
 
 return (
   <> 
   <ThemeProvider theme={theme}>
     <CssBaseline>
      <BrowserRouter>
      <Navbar />
      <Routes>
       
       <Route path="/" element={<Home></Home>} />
       <Route path="*" element={<NotFound></NotFound>} />
       
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </CssBaseline>
      </ThemeProvider>
   
   </>
 );
}

export default App;
