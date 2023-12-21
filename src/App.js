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
import Signinform from './pages/SignInForm.js'
import AccountManagementPage from './components/AccountManagementPage.js';
import ComposeScoopPage from './ComposeScoopPage.js'
import Signup from './pages/Signup.jsx';

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
  Paper,
} from "@mui/material";



const HeroCard = () => {
  return (
    <Container style={{padding: "0"}}>
    <Card sx={{ maxWidth: "100%" }} style={{backgroundColor: " #242424" , color: "white"}}>
        <CardMedia
          component="img"
          height="350"
          image="https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
        />
    </Card>
    <Typography gutterBottom variant="h5" component="div" style={{color:"white", fontWeight:"500", marginTop:"1rem", fontFamily:"Gill Sans, sans-serif"}}>
      The Winner of the 2023 Charity Voting Campaign
          </Typography>
    <Box display= "flex">
    <Avatar src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D" />
    <Typography style={{color:"#b2beb5", margin:"14px 0 0 8px", fontSize:"0.8rem",fontWeight:"600"}}>NEWS</Typography>
    </Box>
    </Container>
  );
};


const NewsCard = () => {
  const classes = {};
  return (
    <Card
      className={classes.root}
      variant="soft"
      style={{ height: "95%",backgroundColor: "#3d3635", color:"white", padding:"0" }}
    >
      <Box display="flex">
        <Box style={{width:"70%"}}>
      <CardContent style={{padding:"1rem"}}>
        <Typography  gutterBottom variant="subtitle2" style={{ fontWeight:"600" , fontFamily:"Gill Sans, sans-serif"}}>
          A view to Worlds
        </Typography>
      <Box display= "flex">
        <Avatar style={{ margin: "2px"}}src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D" />
        <Typography style={{color:"#b2beb5", margin:"14px 0 0 4px", fontSize:"0.8rem", fontWeight:"600"}}>NEWS</Typography>
        </Box>
      </CardContent>
      </Box>
      <Box style={{width:"30%"}}>
        <CardMedia
        component="img"
        image="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fHww"
        height="98px"
        />
      </Box>
      </Box>
    </Card>
  );
};

function App() {
 
 return (
   <> 
   <ThemeProvider theme={theme}>
     <CssBaseline>
      <BrowserRouter>
      
      <Routes>
       
       <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
       <Route path="*" element={<NotFound></NotFound>} />
       <Route path="/compose" element={<ComposeScoopPage></ComposeScoopPage>}/>
       <Route path="/signin" element={<Signinform></Signinform>}/>
    

       
        <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<AccountManagementPage/>} />
      </Routes>
      </BrowserRouter>
      </CssBaseline>
      </ThemeProvider>


     <Container>
       <Box display="flex" style={{marginTop:"4rem"}}>
        <Typography variant="h4" component="div" style={{width:"90%", color:"white"}}>LATEST NEWS</Typography>
        <Button variant="outlined" size="small">SHOW MORE</Button>
       </Box>
      
           <Grid
             container
             spacing={3}
             direction="row"
             style={{marginTop: "2rem"}}
             //justify="center"
             //alignItems="stretch"
           >
            
             <Grid item xs={12} sm={12} md={7}>
               <Grid container >
                 <Grid item xs={12} md={12}>
                   <HeroCard />
                 </Grid>
               </Grid>
             </Grid>
             <Grid item sm={12} md={5} >
               <Grid container spacing={1.5}  >
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
   
   </>
 );
}


export default App;
