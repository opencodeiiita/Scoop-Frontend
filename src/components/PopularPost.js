import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, dividerClasses, Box } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
import { useDispatch } from "react-redux";
import { fetchTopNewsAsync } from "../redux/scoopSlice";
import store from "../store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// //assume this data is coming from the backend
// const postsdata = [
//   {
//     headline: "Opening Day of Boating Season, Seattle WA",
//     location: "Seattle, WA",
//     image: "https://picsum.photos/301",
//     explaination:
//       "The Grand Opening of Boating Season when traffic gets stalled in the University District (UW)  ",
//     description: "<h1> Some HTML code for news content</h1>", //not to be used for popular news' cards
//     tags: [
//       "Seattle",
//       "Boating",
//       "University District",
//       "UW",
//       "Opening Day",
//       "Boating Season",
//     ],
//     upvotes_count: 100,
//     user: "", //user id
//   },
//   {
//     headline: "How to choose the right laptop for programming",
//     location: "Prayagraj, India",
//     image: "https://picsum.photos/302",
//     explaination:
//       "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
//     description: "<h1> Some HTML code for news content</h1>", //not to be used for popular news' cards
//     tags: ["Laptop", "Programming", "Technology", "Computer Science"],
//     upvotes_count: 55,
//     user: "", //user id
//   },
//   {
//     headline: "How we built the world's first self driving car",
//     location: "San Francisco, CA",
//     image: "https://picsum.photos/303",
//     explaination:
//       "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
//     description: "<h1> Some HTML code for news content</h1>", //not to be used for popular news' cards
//     tags: ["Self Driving", "Technology", "Electric Cars", "Tesla"],
//     upvotes_count: 65,
//     user: "",
//   },
//   {
//     headline: "How to Persuade Your Parents to Buy Fast Food",
//     location: "New York, NY",
//     image: "https://picsum.photos/304",
//     explaination:
//       "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
//     description: "<h1> Some HTML code for news content</h1>", //not to be used for popular news' cards
//     tags: ["Fast Food", "Parents", "Food", "Children"],
//     upvotes_count: 75,
//     user: "",
//   },
// ];

// //userArray[0] has posted the first news
// //userArray [1] has posted the second news and so on....
// const userArray = [
//   {
//     fistName: "John",
//     lastName: "Doe",
//     username: "johndoe",
//     email: "buddhadevom@gmail.com",
//     password: "",
//     profileImage: "https://i.pravatar.cc/200",
//     isAdmin: 0,
//     myUpvotes: [],
//     News: [],
//   },

//   {
//     fistName: "Walt",
//     lastName: "White",
//     username: "johndoe",
//     email: "buddhadevom@gmail.com",
//     password: "",
//     profileImage: "https://i.pravatar.cc/200",
//     isAdmin: 0,
//     myUpvotes: [],
//     News: [],
//   },
//   {
//     fistName: "Skyler",
//     lastName: "White",
//     username: "johndoe",
//     email: "buddhadevom@gmail.com",
//     password: "",
//     profileImage: "https://i.pravatar.cc/200",
//     isAdmin: 0,
//     myUpvotes: [],
//     News: [],
//   },
//   {
//     fistName: "vito",
//     lastName: "corleone",
//     username: "vito",
//     email: "vitoc@gmail.com",
//     password: "",
//     profileImage: "https://i.pravatar.cc/200",
//     isAdmin: 0,
//     myUpvotes: [],
//     News: [],
//   },
// ];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 960, min: 680 },
    items: 2,
  },
  LargeMobile: {
    breakpoint: { max: 680, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const selectScoopState = (state) => state.scoop;

const PopularPost = () => {
  const dispatch = useDispatch();
  const [topNews, setTopNews] = useState(store.getState().scoop.topNews.data);

  useEffect(() => {
    updateTopNewsSection();
    // if (topNews.length > 0) {
    //   console.log("useEffect", topNews[0]);
    // }
  }, [dispatch]);

  const updateTopNewsSection = () => {
    dispatch(fetchTopNewsAsync()).then(() => {
      console.log("updating top news");
      setTopNews(store.getState().scoop.topNews.data);
    });
  };

  const ProfileImage = (index) => {
    return (
      <img
        src={
          useSelector(selectScoopState).topNews.data?.at(index)?.User
            ?.pfpImage ||
          "https://yt3.googleusercontent.com/ytc/AIf8zZS6XDo-M7dlTyolU_yBAp-cmqn0EfZ8AGkKa9yItg=s900-c-k-c0x00ffffff-no-rj"
        }
      />
    );
  };

  const AuthorName = (index) => {
    return (
      <Typography
        sx={{
          fontFamily: "Roboto",
          marginBottom: 0.1,
          fontSize: 12,
          fontWeight: 550,
          color: "white",
        }}
      >
        {useSelector(selectScoopState).topNews.data?.at(index)?.User?.name ||
          "Loading..."}
      </Typography>
    );
  };

  return (
    <Box sx={{ paddingTop: { xs: "50px", md: "20px" } }}>
      <div className="head-div">
        <div className="rect"></div>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 18,
            color: "white",
            marginLeft: 2,
            marginTop: 2,
            display: "inline-block",
          }}
        >
          Popular Posts
        </Typography>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        className="car"
        renderButtonGroupOutside={false}
        autoPlay={false}
        centerMode={false}
        containerClass="container-with-dots"
        dotListClass=""
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        renderArrowsWhenDisabled={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
        {topNews.map((news, index) => (
          <Link to={"scoop/"+news._id}>
          <div>
            <Card
              sx={{
                maxWidth: 330,
                borderRadius: 3,
                marginLeft: 4,
                marginRight: 4,
                bgcolor: "black",
              }}
            >
              <CardMedia
                sx={{
                  height: 140,
                  borderRadius: 2,
                  margin: 2,
                  objectFit: "cover",
                }}
                image={news.Headimage}
                title="news thumbnail"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  marginTop={-2.5}
                  fontWeight={"bold"}
                  fontSize={12}
                  sx={{
                    color: "white",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {news.Headline || "Missing Headline"}
                </Typography>

               
              </CardContent>
              <Card
                sx={{
                  maxWidth: 340,
                  marginTop: 0,
                  marginLeft: 2,
                  marginRight: 2,
                  marginBottom: 2,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#31304D",
                  boxShadow: "none",
                }}
              >
                <div
                  style={{
                    height: 40,
                    width: 40,
                    margin: 10,
                    borderRadius: 20,
                    backgroundColor: "red",
                    overflow: "hidden",
                  }}
                >
                  <ProfileImage index={index} />
                </div>

                <div style={{}}>
                  <AuthorName index={index} />
                  <Typography
                    fontSize={11}
                    color={"white"}
                    sx={{ opacity: 0.75 }}
                  >
                    July 14 , 2022
                  </Typography>
                </div>

                <BookmarkBorderOutlinedIcon
                  sx={{
                    marginLeft: "auto",
                    color: "#808080",
                    paddingRight: 1,
                  }}
                />
              </Card>
            </Card>
          </div>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

export default PopularPost;
