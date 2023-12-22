import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
};

const headerStyle = {
  backgroundImage:
    "url(https://s3-alpha-sig.figma.com/img/11d5/5fbd/5de3439046ac21aa390b03d1cffcdb97?Expires=1704067200&Signature=GAaen-QYC535jSzMt~2wLJdmr3u8p~sSZ8hHmx2K2V7i-ZP~G9n9SMwK90OjT6YHfrnTWhCFPH36lI0iCy-jrOtkQxgPlZ~4byWuGtMjVqMIb9h1hCCc5dNMr-UaE6JmOvD0zU-XbdYwP8QtGPk228RkY7aSJAaO6YPHzG2fLU6gneITKoGTmrizL5rPYYWHJGIZBh9E~BI10E03w9Xgh9mCm5uCdEY6QyokKodbEGz61u3TU7DLmmmAFE00yb1smj-vWmDwU1KuLsOQc-ezb570OFD6GlJSOmfayIG14vgr3tJEaYFkMfYhtcLt9HlBILmFcENh2BAwLjVxfU6CQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
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
    background: "linear-gradient(to bottom, #DBD9D6  30%,  #E7E6E3 30%,  #E7E6E3 100%)",
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
    img: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/27ad4df5feacc03a238282e526a95172fe5d1db9",
    title: "TFT Vegas Open: Everything You Need to Know",
    body: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
  },
  {
    img: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/3ce43c2e78660dbad4289d6cfae951eda89a87f1",
    title: "TFT Vegas Open: Everything You Need to Know",
    body: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
  },
  {
    img: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/97823aab7573f3adf4e1bcc3dfa1bf4a9f8fe3dc",
    title: "TFT Vegas Open: Everything You Need to Know",
    body: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
  },
  {
    img: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/07dea8cc8dac7adb50612d9fe5b1d0cf44194e49",
    title: "TFT Vegas Open: Everything You Need to Know",
    body: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
  },
  {
    img: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/ff7aa8a53259b9a8046edb6d5768d3d4049f7ccd",
    title: "TFT Vegas Open: Everything You Need to Know",
    body: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
  },
  {
    img: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/841e7e329ddd86fd95df9fd2f8748f697ce24af1",
    title: "TFT Vegas Open: Everything You Need to Know",
    body: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
  },
  {
    img: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/4f112e4c57c08893e8353ce5a90dcca41ff0692e",
    title: "TFT Vegas Open: Everything You Need to Know",
    body: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
  },
  {
    img: "https://www.figma.com/file/I0q9Bcuro7zNKxoSbbLZqu/image/a499f4528374b48353e7f053b6fbe6cc5a8f7266",
    title: "TFT Vegas Open: Everything You Need to Know",
    body: "How to Watch, Format Explainer, Drops, Trophy Reveal and more!",
  },
];

export const Allnews = () => {
  const isMobile = useMediaQuery("(max-width: 658px)");
  const isFull = useMediaQuery("(min-width: 1400px)");
  console.log(isMobile);
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={headerH1Style}>LIST OF SCOOPS</h1>
        <div style={headerDivStyle}></div>
      </header>
      <section style={cardSectionStyle}>
        <div
          style={{
            ...cardContainerStyle,
            padding: isFull ? "6rem 14rem 5rem 16rem" : "2rem",
          }}
        >
          {cardArray.map((card, index) => (
            <div
              style={{
                marginBottom: "50px",
                flex: isMobile ? "1 0 100%" : "1 0 48%",
              }}
            >
              <Card
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  style={{ width: "40rem", height: "22.5rem" }}
                  image={card.img}
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
                    {card.title}
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
                    {card.body}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
