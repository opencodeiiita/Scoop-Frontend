import React, { useEffect } from "react";
import "./Profile.css";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [totalNews, setTotalNews] = React.useState([]);
  const [showNews, setShowNews] = React.useState([]);
  const [profile, setProfile] = React.useState({});
  const [search, setSearch] = React.useState("");

  // News Component
  const News = (headline, description, index) => {
    return (
      <>
        <div key={index} className="con2">
          <div className="con2-1">{headline}</div>
          <p className="con2-2">
            <u>
              <font size="2">{description}</font>
            </u>
          </p>
        </div>
        <br />
      </>
    );
  };

  // Add news
  const addNews = (news, index) => {
    console.log("addNews", index, news.Headline, news.Description);
    setTotalNews((prev) => [...prev, {
      Headline: news.Headline,
      Description: news.Description
    }]);

    // setTotalNews((prev) => [...prev, news]);
  };

  const { profileId } = useParams();

  // Set profile data
  const handleData = async (data) => {
    setProfile(data.data);

    // log the no. of news this person has
    if (data.data?.News?.length == 0) {
      setTotalNews([{
        Headline: "No news yet",
        Description: "..."
      }]);
    }

    await data.data?.News?.forEach(async (news, index) => {
      console.log("News to be added", index, news);
      await axios.get(`https://scoop-api-v1.onrender.com/api/scoop/${news}`)
      // .then((newsData) => () => {
      //   console.log(newsData)
      //   console.log("Hmmmm")
      //   console.log(index, newsData);
      //   addNews(newsData.data, index);
      // })
      .then((newsData) => addNews(newsData.data.data, index))
      .catch((error) => console.log("handleData error", error));
    });
  };

  // // Debug profile data
  // useEffect(() => {
  //   console.log("profile", profile);
  // }, [profile]);

  useEffect(() => {
    setShowNews(totalNews);
  }, [totalNews]);

  // Get data
  useEffect(() => {
    fetch(`https://scoop-api-v1.onrender.com/api/user/${profileId}`)
      .then((data) => {
        if (data.status == 204) {
          console.log("no user found");
          navigate("/404");
        } else {
          return data.json();
        }
      })
      .then((data) => handleData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#080404", height: "100vh" }}>
        <Navbar />
        <div style={{ paddingTop: "50px", height: "100%" }}>
          <div className="container">
            <div className="container1">
              <img src={profile?.ProfileImage || "https://i.pinimg.com/736x/73/17/a5/7317a548844e0d0cccd211002e0abc45.jpg"} className="profile-img" />
              <br />
              <div className="con1">
                <div className="profile-text">
                  <b>{profile?.UserName || "Loading..."}</b>
                </div>
                profile
                <div className="circle2">
                  <div id="profile-text-1">
                    <font size="1" color="#794bd0">
                      {""}
                      &nbsp;&nbsp;TRUSTWORTHY
                    </font>
                  </div>
                </div>
              </div>
              <div className="profile-id">
                {profile?.FirstName + " " + profile?.LastName || "Loading..."}
              </div>
              <div>
                <hr id="profile-hr" />
              </div>
              <br />
              <div className="profile-rep">
                <font color="white" size="1">
                  Report User
                </font>
              </div>
            </div>
            <div className="container2">
              <div>
                <input
                  id="con2-in"
                  type="text"
                  placeholder="Find the scoop"
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowNews(totalNews.filter((news) => news.Headline.toLowerCase().includes(e.target.value.toLowerCase())));
                  }}
                ></input>
              </div>
              <br />
              <div className="container2-hr">
                <hr />
              </div>
              <br />
              {showNews.map((news, index) => {return News(news.Headline, news.Description, index);})}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
