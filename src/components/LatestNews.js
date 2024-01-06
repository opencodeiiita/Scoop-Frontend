import "./index.css";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchLatestNewsAsync } from "../redux/scoopSlice";
import store from "../store";
import { useEffect, useState } from "react";

const LatestNews = () => {
  const dispatch = useDispatch();
  const [latestNews, setLatestNews] = useState(store.getState().scoop.latestNews.data);


  useEffect(() => {
    updateLatestNewsSection();
  }, [dispatch]);

  const updateLatestNewsSection = () => {
    dispatch(fetchLatestNewsAsync())
      .then(() => {
        setLatestNews(store.getState().scoop.latestNews.data)
      });
  }

  const MainLastestNews = () => {
    return (<div>
              <img
                src={latestNews?.at(0)?.Headimage || "/news-1.png"}
                alt="News Image"
                className="w-screen lg:w-[50vw] p-4"
              />
              <div className="px-6">
                <h1 className="font-black text-3xl text-white">{latestNews?.at(0)?.Headline || "Loading..."}</h1>
                <h4 className="flex items-center text-gray-500">
                  <div className="w-10 h-10 rounded-full font-semibold bg-news-gray mr-3"></div>
                  {latestNews?.at(0)?.Location || "Loading..."}
                </h4>
              </div>
            </div>)
  }

  const SideLatestNewsOne = (num) => {
    return (<div className="grid grid-cols-2 m-8 rounded-3xl overflow-hidden bg-news-gray text-white w-5/6 lg:w-[30vw]">
    <div className="p-8">
      <h1 className="font-bold">{latestNews?.at(num)?.Headline || "Loading..."}</h1>
      <h4 className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-black mr-3"></div>
        {latestNews?.at(num)?.Location || "Loading..."}
      </h4>
    </div>
    <img
      src={latestNews?.at(num)?.Headimage || "/news-1.png"}
      alt="News Image"
      className="h-full w-full"
    />
  </div>)
  }

  const SideLatestNews = () => {

    return (<>
      {SideLatestNewsOne(1)}
      {SideLatestNewsOne(2)}
      {SideLatestNewsOne(3)}
    </>)
  }

  return (
    <div className="bg-black p-10">
      <div className="flex flex-col">
        <div className="flex justify-between items-center ">
          <div>
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
         Latest Scoop
        </Typography></div>
          <div>
            <button
              className="text-white px-3 py-1 text-xs rounded-md font-[inter] font-medium uppercase"
              style={{ backgroundColor: "rgba(128, 128, 128, 0.2)" }}
            >
              See more
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between">
            <MainLastestNews />
            <div className="overflow-scroll">
              <SideLatestNews />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
