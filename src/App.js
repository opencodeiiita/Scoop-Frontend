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
import ComposeScoopPage from './ComposeScoopPage.js';

import{
  Grid,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Button,
  CardMedia,
  CardActionArea,
  Avatar,
} from "@mui/material";


const HeroCard = () => {
  return (
    <Card sx={{ maxWidth: "100%" }} style={{padding:"1rem",backgroundColor: " #242424" , color: "white"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            abcdefghijklmnopqrestuvwyzabcdefghijklmnopqrestuvwyz
          </Typography>
          <Box display= "flex">
          <Avatar src="https://source.unsplash.com/random" />
          <Button style={{color:"white"}}>abcdefghij</Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};


const NewsCard = () => {
  const classes = {};
  return (
    <Card
      className={classes.root}
      variant="soft"
      style={{ height: "80%",backgroundColor: "rgb(54 45 45)", color:"white" }}
    >
      <Box display="flex">
        <Box style={{width:"70%"}}>
      <CardContent>
        <Typography variant="h6">
          Sarah Doria
        </Typography>
      <Box display= "flex">
        <Avatar src="https://source.unsplash.com/random" />
        <Button size="small" style={{color:"white"}}>abcdefghij</Button>
        </Box>
      </CardContent>
      </Box>
      <Box style={{width:"30%"}}>
        <CardMedia
        component="img"
        image="https://source.unsplash.com/random"
        height="100px"
        />
      </Box>
      </Box>
    </Card>
  );
};




function App() {
 const classes = {};
 return (
   <>

      <Container>
           <Grid
             container
             spacing={1}
             direction="row"
             justify="center"
             alignItems="stretch"
           >
             <Grid item xs={12} sm={12} md={8}>
               <Grid container >
                 <Grid item xs={12} style={{ marginTop:"3rem" }}>
                   <HeroCard />
                 </Grid>
               </Grid>
             </Grid>
             <Grid item sm={12} md={4} style={{marginTop:"2.2rem" }}>
               <Grid container spacing={1} padding={2} >
                 <Grid item xs={12}>
                   <NewsCard />
                 </Grid>
                 <Grid item xs={12}>
                   <NewsCard />
                 </Grid>
                 <Grid item xs={12}>
                   <NewsCard />
                 </Grid>
                 <Grid item xs={12}>
                   <NewsCard />
                 </Grid>
                 <Grid item xs={12}>
                   <NewsCard />
                 </Grid>
                 <Grid item xs={12}>
                   <NewsCard />
                 </Grid>
                 <Grid item xs={12}>
                   <NewsCard />
                 </Grid>
                 <Grid item xs={12}>
                   <NewsCard />
                 </Grid>
               </Grid>
             </Grid>
           </Grid>
         </Container>

 
   <ThemeProvider theme={theme}>
     <CssBaseline>
      <BrowserRouter>
      <Navbar />
      <Routes>
       
       <Route path="/" element={<Home></Home>} />
       <Route path="*" element={<NotFound></NotFound>} />
       
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </CssBaseline>
      </ThemeProvider>
   
   </>
 );
}

export default App;
