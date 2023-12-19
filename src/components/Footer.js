import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import InstagramIcon from "@mui/icons-material/Instagram";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

const categories = [
  "Food",
  "Animals",
  "Nature",
  "Tech",
  "People",
  "Objects",
  "Professor",
  "IIITA",
];
const comments = [
  {
    username: "Om",
    comment: "I agree with you! The library of IIITA should be openned 24/7",
  },
  {
    username: "Jon",
    comment: "What a great piece of news this is!",
  },
  {
    username: "Walt",
    comment: "I agree with what Gymkhana shared: the fest should be postponed",
  },
];

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
];

const Pointer = () => {
  return (
    <div
      style={{
        background: "#F81539",
        width: "0.25rem",
        height: "0.75rem",
        borderRadius: "0.75rem",
      }}
    ></div>
  );
};

const headline = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.375rem",
};

const heading = {
  color: "#F9E8D9",
  fontFamily: "Roboto",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textTransform: "capitalize",
};

const para = {
  color: "#F9EFD9",
  textAlign: "justify",
  fontFamily: "Roboto",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.25",
}
const about = {
  padding: "1rem 3rem 2rem 2rem",
  margin: "1rem 2rem 0rem 2rem",
};

const newsletter = {
  padding: "0rem 2rem 2rem 2rem",
  margin: "0rem 2rem 2rem 2rem",
};

const copyright = {
  margin: "1rem 1rem 1rem 1rem",
  padding: "0.5rem 0.75rem 0.5rem 2.8rem",
  display: "flex",
  gap: "1rem",
  width: "98%",
  borderRadius: "0rem 0.75rem 0.75rem 0rem",
  background: "rgba(62, 50, 50, 0.05)",
};

const category = {
  padding: "1rem 3rem 2rem 2rem",
  margin: "1rem 2rem 0rem 2rem",
};

const socialNetwork = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  paddingTop: "1rem",
  marginTop: "1rem",
};

const comm = {
  position: "relative",
  top: "-1.8rem",
};

const Imagelist = () => {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const InstaButton = () => {
  return (
    <button
      style={{
        display: "inline-flex",
        padding: "0.625rem 1.5rem 0.625rem 1rem",
        marginTop: "1rem",
        alignItems: "center",
        gap: "0.8rem",
        borderRadius: "0.75rem",
        background: "linear-gradient(263deg, #F45C9F 5.57%, #FF7563 73.65%)",
      }}
    >
      <div
        style={{
          width: "1rem",
          display: "flex",
          height: "1rem",
          justifyContent: "center",
          alignItems: "center",
          color:"White"
        }}
      >
        <InstagramIcon />
      </div>

      <div
        style={{
          color: "white",
          textAlign: "center",
          fontFamily: "Roboto",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: 800,
          lineHeight: "1.25",
          textTransform: "capitalize",
        }}
      >
        Instagram
      </div>
    </button>
  );
};

const part1 = {

  padding: "1.5rem 2rem 0rem 0",
  marginRight: "2rem",
  flex: 2,
  background: "black",
  borderRadius: "0rem 3.125rem 3.125rem 0rem",
};

const part2 = {
  paddingTop: "1.8rem",
  marginTop: "3rem",
  flex: 1,
};

const part3 = {
  paddingTop: "3rem",
  marginTop: "rem",
  flex: 1,
};
const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const isTablet = useMediaQuery("(min-width: 701px) and (max-width: 1450px)");
  console.log(isTablet);
  if (!isMobile) {
    return (
      <div
        style={{
          background: "black",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingRight: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div style={isTablet ? { ...part1 } : part1}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  flex: 1,
                }}
              >
                {/* About */}
                <div style={about}>
                  <div style={headline}>
                    <Pointer />
                    <div style={heading}>Mega News</div>
                  </div>
                  <p style={para}>
                    Lorem ipsum dolor sit amet, 
                  </p>
                </div>

                
              </div>
              {/* categorys */}
              <div style={category}>
                <div>
                  <div style={headline}>
                    <Pointer />
                    <div style={heading}>Categories</div>
                  </div>
                  <List
                    component="nav"
                    aria-label="mailbox folders"
                    style={{
                      marginTop: "8px",
                    }}
                  >
                    {categories.slice(0,5).map((category, index) => (
                      <ListItem
                        key={index}
                        style={{
                          paddingBottom: "0.04px",
                        }}
                      >
                      <Typography style={
                        {
                          fontFamily: "Roboto",
                          fontSize: "0.75rem",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "normal",
                          textTransform: "capitalize",
                          color: "#F9E8D9"

                        }
                      }>{category}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </div>
                {/* Social Network */}
                <div style={socialNetwork}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Pointer />
                    <div style={{ marginLeft: "8px", color: "#F9E8D9" }}>Social Network</div>
                  </div>
                  <InstaButton />
                </div>
              </div>
            </div>

           
          </div>
        </div>
        {!isTablet && (
          <div style={part2}>
            <div style={comm}>
              <div style={headline}>
                <Pointer />
                <div style={heading}>New Comments</div>{" "}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1.2rem",
                  padding: "1.5rem",
                  paddingLeft: "0rem",
                }}
              >
                {comments.map((comment, index) => (
                  <Card
                    key={index}
                    style={{
                      marginBottom: "1rem",
                      borderRadius: "0.75rem",
                      background: "#F5F5F5",
                      width: "22.5rem",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "1rem",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "normal",
                          textTransform: "capitalize",
                          alignSelf: "stretch",
                        }}
                      >
                        {comment.username}
                      </Typography>
                      <Typography variant="body2" style={{
                        fontFamily: "Roboto",
                        fontSize: "0.75rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        textTransform: "capitalize",
                      }}>{comment.comment}</Typography>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {!isTablet && (
          <div style={part3}>
            <div
              style={{
                
                marginTop: "2rem",
                paddingTop: "3rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 20,
                display: "flex",
              }}
            >
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 6,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 10,
                    background: "#F81539",
                    borderRadius: 12,

                  }}
                />
                <div
                  style={{
                    color: "#F9E8D9",
                    fontSize: 20,
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    textTransform: "capitalize",
                    wordWrap: "break-word",
                  }}
                >
                  Follow on Instagram
                </div>
              </div>
              <Imagelist />
            </div>
          </div>
        )}
        
      </div>
    );
  } else {
    return (
      <div
        style={{
          background: "black",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div style={about}>
          <div style={headline}>
            <Pointer />
            <div style={heading}>Mega News</div>
          </div>
          <p style={para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, diam id aliquam ultrices, nisl nunc porta neque, in
            pellentesque massa sem at tellus. Sed auctor, nisl quis tempor
            ornare, nisl nunc porta neque, in pellentesque massa sem at tellus.
            Sed auctor, nisl quis tempor ornare.
          </p>
        </div>

        <div style={newsletter}>
          <div style={headline}>
            <Pointer />
            <div style={heading}>Newsletter</div>
          </div>

          <div
            style={{
              width: "100%",
              display: "inline-flex",
              borderRadius: "0.75rem",
              background: "#FFFFFF",
              height: "3rem",
              alignItems: "center",
              gap: "1rem",
              padding: "0.5rem 0.75rem 0.5rem 0.5rem",
            }}
          >
            <Input
              placeholder="Enter your Email"
              inputProps={ariaLabel}
              style={{
                width: "100%",
                color: "rgba(62, 50, 50, 0.75)",
                flex: "1 0 0",
              }}
            />
            <div
              style={{
                display: "flex",
                height: "1.25rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MailIcon />
            </div>
          </div>
          <br />
          <br />
          <div style={socialNetwork}>
            <div style={{ display: "flex", alignItems: "center",}}>
              <Pointer />
              <div style={{ marginLeft: "8px", color:"#F9E8D9"}}>Social Network</div>
            </div>
            <InstaButton />
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
