import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {theme} from './theme.js';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CategoryCarousel from './components/PopularPost.js';
;
function App() {
 
  return (
    <> 
    <ThemeProvider theme={theme}>
      <CssBaseline>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}  />
        <Route path="*" element={<NotFound></NotFound>} />
       </Routes>
       </BrowserRouter>
       </CssBaseline>
       </ThemeProvider>
    
    </>
  );
}

export default App;
