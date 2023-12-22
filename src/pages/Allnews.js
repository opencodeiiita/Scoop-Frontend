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
  height: "100vh",
};

const headerStyle = {
  backgroundImage:
    "url(https://s3-alpha-sig.figma.com/img/11d5/5fbd/5de3439046ac21aa390b03d1cffcdb97?Expires=1704067200&Signature=GAaen-QYC535jSzMt~2wLJdmr3u8p~sSZ8hHmx2K2V7i-ZP~G9n9SMwK90OjT6YHfrnTWhCFPH36lI0iCy-jrOtkQxgPlZ~4byWuGtMjVqMIb9h1hCCc5dNMr-UaE6JmOvD0zU-XbdYwP8QtGPk228RkY7aSJAaO6YPHzG2fLU6gneITKoGTmrizL5rPYYWHJGIZBh9E~BI10E03w9Xgh9mCm5uCdEY6QyokKodbEGz61u3TU7DLmmmAFE00yb1smj-vWmDwU1KuLsOQc-ezb570OFD6GlJSOmfayIG14vgr3tJEaYFkMfYhtcLt9HlBILmFcENh2BAwLjVxfU6CQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "30%",
};

const headerH1Style = {
  color: "#F9F9F9",
  fontFamily: "Inter",
  marginTop: "auto",
};

const headerDivStyle = {
  marginTop: "auto",
  alignSelf: "flex-end",
};

const cardSectionStyle = {
    background: "linear-gradient(to bottom, #ff0000 30%, #00ff00 30%, #00ff00 100%)",
  height: "80%",
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
    img: "https://s3-alpha-sig.figma.com/img/27ad/4df5/feacc03a238282e526a95172fe5d1db9?Expires=1704067200&Signature=ir5Zx5nti~4ovDYEtS~KpPBLIUo7~EAo6ROJg6AKJy22QymKME4firk2K2Pr2zV1b~H0lzkDs6mIj9ArLNrpBjRnuA9sOsDRjogw75sHCiFv7MGI-O731HQ591uI7N7dMcQNUEp2HaUgQjzZlO-BFUWhXY4s-AVoY9Fz4i6xJxqJcg-36e-juL0A-FbhLBZGa6lL0F5XDFynzKOj~WVVQjra52lqyUbL0tm52Hkf7Q8~y9TZo6mAdhA79IGJAeqKUmG1oC3e5U2katOpmlcHtWad83XM6czn-KfWkjoQYbfTw0BvAot6bULYuTS~aAMu6M9s1DN8mA8Ct4ZeLTRdMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "A view to Worlds",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 ",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/27ad/4df5/feacc03a238282e526a95172fe5d1db9?Expires=1704067200&Signature=ir5Zx5nti~4ovDYEtS~KpPBLIUo7~EAo6ROJg6AKJy22QymKME4firk2K2Pr2zV1b~H0lzkDs6mIj9ArLNrpBjRnuA9sOsDRjogw75sHCiFv7MGI-O731HQ591uI7N7dMcQNUEp2HaUgQjzZlO-BFUWhXY4s-AVoY9Fz4i6xJxqJcg-36e-juL0A-FbhLBZGa6lL0F5XDFynzKOj~WVVQjra52lqyUbL0tm52Hkf7Q8~y9TZo6mAdhA79IGJAeqKUmG1oC3e5U2katOpmlcHtWad83XM6czn-KfWkjoQYbfTw0BvAot6bULYuTS~aAMu6M9s1DN8mA8Ct4ZeLTRdMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "A view to Worlds",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 ",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/27ad/4df5/feacc03a238282e526a95172fe5d1db9?Expires=1704067200&Signature=ir5Zx5nti~4ovDYEtS~KpPBLIUo7~EAo6ROJg6AKJy22QymKME4firk2K2Pr2zV1b~H0lzkDs6mIj9ArLNrpBjRnuA9sOsDRjogw75sHCiFv7MGI-O731HQ591uI7N7dMcQNUEp2HaUgQjzZlO-BFUWhXY4s-AVoY9Fz4i6xJxqJcg-36e-juL0A-FbhLBZGa6lL0F5XDFynzKOj~WVVQjra52lqyUbL0tm52Hkf7Q8~y9TZo6mAdhA79IGJAeqKUmG1oC3e5U2katOpmlcHtWad83XM6czn-KfWkjoQYbfTw0BvAot6bULYuTS~aAMu6M9s1DN8mA8Ct4ZeLTRdMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "A view to Worlds",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 ",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/27ad/4df5/feacc03a238282e526a95172fe5d1db9?Expires=1704067200&Signature=ir5Zx5nti~4ovDYEtS~KpPBLIUo7~EAo6ROJg6AKJy22QymKME4firk2K2Pr2zV1b~H0lzkDs6mIj9ArLNrpBjRnuA9sOsDRjogw75sHCiFv7MGI-O731HQ591uI7N7dMcQNUEp2HaUgQjzZlO-BFUWhXY4s-AVoY9Fz4i6xJxqJcg-36e-juL0A-FbhLBZGa6lL0F5XDFynzKOj~WVVQjra52lqyUbL0tm52Hkf7Q8~y9TZo6mAdhA79IGJAeqKUmG1oC3e5U2katOpmlcHtWad83XM6czn-KfWkjoQYbfTw0BvAot6bULYuTS~aAMu6M9s1DN8mA8Ct4ZeLTRdMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "A view to Worlds",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 ",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/27ad/4df5/feacc03a238282e526a95172fe5d1db9?Expires=1704067200&Signature=ir5Zx5nti~4ovDYEtS~KpPBLIUo7~EAo6ROJg6AKJy22QymKME4firk2K2Pr2zV1b~H0lzkDs6mIj9ArLNrpBjRnuA9sOsDRjogw75sHCiFv7MGI-O731HQ591uI7N7dMcQNUEp2HaUgQjzZlO-BFUWhXY4s-AVoY9Fz4i6xJxqJcg-36e-juL0A-FbhLBZGa6lL0F5XDFynzKOj~WVVQjra52lqyUbL0tm52Hkf7Q8~y9TZo6mAdhA79IGJAeqKUmG1oC3e5U2katOpmlcHtWad83XM6czn-KfWkjoQYbfTw0BvAot6bULYuTS~aAMu6M9s1DN8mA8Ct4ZeLTRdMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "A view to Worlds",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 ",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/27ad/4df5/feacc03a238282e526a95172fe5d1db9?Expires=1704067200&Signature=ir5Zx5nti~4ovDYEtS~KpPBLIUo7~EAo6ROJg6AKJy22QymKME4firk2K2Pr2zV1b~H0lzkDs6mIj9ArLNrpBjRnuA9sOsDRjogw75sHCiFv7MGI-O731HQ591uI7N7dMcQNUEp2HaUgQjzZlO-BFUWhXY4s-AVoY9Fz4i6xJxqJcg-36e-juL0A-FbhLBZGa6lL0F5XDFynzKOj~WVVQjra52lqyUbL0tm52Hkf7Q8~y9TZo6mAdhA79IGJAeqKUmG1oC3e5U2katOpmlcHtWad83XM6czn-KfWkjoQYbfTw0BvAot6bULYuTS~aAMu6M9s1DN8mA8Ct4ZeLTRdMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "A view to Worlds",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 ",
  },
];

export const Allnews = () => {
  const isMobile = useMediaQuery("(max-width: 658px)");
  const isFull = useMediaQuery("(min-width: 1400px)");
  console.log(isMobile);
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={headerH1Style}>List of Scoops</h1>
        <div style={headerDivStyle}></div>
      </header>
      <section style={cardSectionStyle}>
        <div
          style={{
            ...cardContainerStyle,
            padding: isFull ? "5rem 14rem" : "2rem",
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
                      textTransform: "uppercase",
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
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: "#656462",
                      fontFamily: "Mark Pro",
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
