import React from "react";


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

<style> @font-face 
    font-family: 'FF_MARK_FONT';
    src: url('../../public/fonts/FontFont_FF.Mark.Pro.otf') format('truetype');
    /* Add other font-face properties if needed */


</style>





const HeroCard = () => {
  return (
    <Container style={{padding: "0"}}>
    <Card sx={{ maxWidth: "100%" }} style={{ color: "white"}}>
        <CardMedia style={{height: "330px"}}
          component="img"
          
          image="https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
        />
    </Card>
    <Typography gutterBottom variant="h5" component="div" style={{color:"white", fontWeight:"500", marginTop:"1rem"}}>
      The Winner of the 2023 Charity Voting Campaign
          </Typography>
    <Box display= "flex">
    <Avatar style={{ margin: "10px 2px 2px 2px", height:"1.5rem", width:"1.5rem"}} src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D" />
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
      style={{ height: "95%",backgroundColor: " #362D2B", color:"white", padding:"0" }}
    >
      <Box display="flex">
        <Box style={{width:"70%"}}>
      <CardContent style={{padding:"1rem"}}>
        <Typography  gutterBottom variant="subtitle2" style={{ fontWeight:"600"}}>
          A view to Worlds
        </Typography>
      <Box display= "flex">
        <Avatar style={{ margin: "14px 2px 2px 2px", height:"1rem", width:"1rem"}}src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D" />
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

export default function News() {
  const classes = {};
  return (
    
    <Container>
       <Box display="flex" style={{marginTop:"4rem"}}>
        <Typography variant="h5" component="div" style={{width:"90%", color:"white", fontWeight:"800"}}>LATEST NEWS</Typography>
        <Button  style={{color: "white", height: "1.5rem", backgroundColor:"grey", fontSize:"0.7rem", fontWeight: "600"}}>SHOW MORE</Button>
       </Box>
      
           <Grid
             container
             spacing={3}
             direction="row"
             style={{marginTop: "2rem"}}
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
      );
      }
