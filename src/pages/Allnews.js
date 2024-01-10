  import React, { useEffect, useState } from "react";
  import Card from "@mui/material/Card";
  import CardContent from "@mui/material/CardContent";
  import CardMedia from "@mui/material/CardMedia";
  import Button from "@mui/material/Button";
  import Typography from "@mui/material/Typography";
  import useMediaQuery from "@mui/material/useMediaQuery";
  import { useDispatch, useSelector } from "react-redux";
  import { fetchTopNewsAsync, fetchCredibleNewsAsync, fetchLatestNewsAsync } from "../redux/scoopSlice";
import { Link } from "react-router-dom";

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const headerStyle = {
    backgroundImage: `url(${require("../assets/bg.png")})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "25vh",
  };

  const headerH1Style = {
    color: "#F9F9F9",
    fontSize: "280%",
    fontWeight: "800",
    fontFamily: "Inter",
    marginTop: "auto",
  };

  const headerDivStyle = {
    marginTop: "auto",
    alignSelf: "flex-end",
  };

  const cardSectionStyle = {
    background:
      "linear-gradient(to bottom, #DBD9D6  30%,  #E7E6E3 30%,  #E7E6E3 100%)",
    minHeight: "80vh",
  };

  const cardContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "2rem",
  };

  const cardArray = [
    {
      Headimage: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/27ad4df5feacc03a238282e526a95172fe5d1db9",
      Headline: "TFT Vegas Open: Everything You Need to Know",
      Description: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
    },
    {
      Headimage: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/3ce43c2e78660dbad4289d6cfae951eda89a87f1",
      Headline: "TFT Vegas Open: Everything You Need to Know",
      Description: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
    },
    {
      Headimage: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/97823aab7573f3adf4e1bcc3dfa1bf4a9f8fe3dc",
      Headline: "TFT Vegas Open: Everything You Need to Know",
      Description: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
    },
    {
      Headimage: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/07dea8cc8dac7adb50612d9fe5b1d0cf44194e49",
      Headline: "TFT Vegas Open: Everything You Need to Know",
      Description: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
    },
    {
      Headimage: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/ff7aa8a53259b9a8046edb6d5768d3d4049f7ccd",
      Headline: "TFT Vegas Open: Everything You Need to Know",
      Description: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
    },
    {
      Headimage: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/841e7e329ddd86fd95df9fd2f8748f697ce24af1",
      Headline: "TFT Vegas Open: Everything You Need to Know",
      Description: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
    },
    {
      Headimage: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/4f112e4c57c08893e8353ce5a90dcca41ff0692e",
      Headline: "TFT Vegas Open: Everything You Need to Know",
      Description: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
    },
    {
      Headimage: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/a499f4528374b48353e7f053b6fbe6cc5a8f7266",
      Headline: "TFT Vegas Open: Everything You Need to Know",
      Description: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
    },
  ];

  export const Allnews = () => {

    const isMobile = useMediaQuery("(max-width: 658px)");
    const isFull = useMediaQuery("(min-width: 1400px)");

    const [selectedCategory, setSelectedCategory] = useState('date');


    const handleCategoryChange = (e) => {
      const category = e.target.value;
      setSelectedCategory(category);
  
      switch (category) {
        case "credible":
          dispatch(fetchCredibleNewsAsync());
          break;
        case "latest":
          dispatch(fetchLatestNewsAsync());
          break;
        default:
          dispatch(fetchTopNewsAsync());
          break;
      }
    };

    const dispatch = useDispatch();
    dispatch(fetchLatestNewsAsync());
    const topNews = useSelector((state) => {
      console.log(state.scoop.topNews)
      return state.scoop.topNews
    })
    const credibleNews = useSelector((state) => {
      console.log(state.scoop.credibleNews)
      return state.scoop.credibleNews
    })
    const latestNews = useSelector((state) => {
      console.log(state.scoop.latestNews)
      return state.scoop.latestNews
    })

    return (

      <>

        <div style={containerStyle}>
          <header style={headerStyle}>
            <h1 style={headerH1Style}>LIST OF SCOOPS</h1>
            <div style={headerDivStyle}>
              <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "1.5rem",
                padding: "0.5rem",
              }}>
                <label style={{
                  position: "relative",
                  top: "0.1rem",
                  color: "#656462",
                  fontFamily: "Mark Pro",
                  fontSize: "140%",
                  fontStyle: "normal",
                  fontWeight: "700",
                  letterSpacing: "0.0175rem"

                }}>Sort by</label>
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  style={{
                    background: "transparent",
                    color: "#E7E6E3",
                    fontFamily: "Mark Pro",
                    fontSize: "140%",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "2.375rem",
                  }}>
                   <option value="latest">Latest</option>
                  <option value="top">Top</option>
                  <option value="credible">Credible</option>
                 
                </select>
              </div>
            </div>
          </header>
          <section style={cardSectionStyle}>
            <div
              style={{
                ...cardContainerStyle,
                padding: isFull ? "6rem 14rem 5rem 16rem" : "2rem",
              }}
            >  
            
                {(selectedCategory === "credible" 
                    ? credibleNews?.data 
                    : selectedCategory === "latest" 
                    ? latestNews.data
                    :selectedCategory === "top" 
                    ? topNews.data
                    : latestNews.data
                    )?.map((card, index) => (

                <div
                  style={{
                    marginBottom: "50px",
                    flex: isMobile ? "1 0 100%" : "1 0 48%",
                  }}
                ><Link to={"/scoop/"+card._id}>
                  <Card
                    sx={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    }}
                  >
                    <CardMedia
                      component="img"
                      style={{ width: "40rem", height: "22.5rem" }}
                      image={card.Headimage}
                    />
                    <CardContent>
                      <Button
                        style={{
                          background: "#D1363A",
                          transform: "rotate(0.5deg)",
                          color: "#E7E6E3",
                          fontFamily: "Mark Pro",
                          fontWeight: "bold",
                          fontStyle: "normal",
                          lineHeight: "0.93rem",
                          letterSpacing: "0.082rem",
                          textTransform: "uppercase",
                          marginTop: "0.5rem",
                        }}
                      >
                        News
                      </Button>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{
                          fontFamily: "Mark Pro",
                          color: "#2B2A29",
                          fontSize: "1.75rem",
                          fontStyle: "normal",
                          fontWeight: "700",
                          lineHeight: "2.37rem",
                          letterSpacing: "0.0175rem",
                          marginTop: "0.5rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {card.Headline}
                      </Typography>
                      <Typography
                        style={{
                          color: "#656462",
                          fontFamily: "Mark Pro",
                          fontSize: "1.125rem",
                          fontWeight: 400,
                          lineHeight: "1.87rem",
                          letterSpacing: "-0.01125rem",
                          marginTop: "0.5rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        
                      </Typography>
                    </CardContent>
                  </Card></Link>
                </div>
              ))}
            </div>
          </section>

        </div>
      </>
    );

  };
