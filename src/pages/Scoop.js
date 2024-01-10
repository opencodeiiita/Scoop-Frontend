import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import store from "../store";
import { fetchLatestNewsAsync } from "../redux/scoopSlice";
import { useDispatch } from "react-redux";
import { parseJwt } from "../redux/authSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const CommentCard = ({ pfp, username, time, comment }) => {
  return (
    <li className="bg-white pt-4 pb-6 pl-20 pr-6 rounded-lg space-y-4 max-lg:px-3">
      <section className="flex justify-start items-center space-x-4">
        <img src={pfp} className="w-12 h-12 ml-2 rounded-full" />
        <h3 className="text-base font-semibold text-Dark_Blue font-FF">
          {username}
        </h3>
        <p className="text-base text-Grayish_Blue">{time}</p>
      </section>
      <p className="text-Grayish_Blue max-w-[618px]">{comment}</p>
    </li>
  );
};

const NewComment = ({ pfp }) => {
  return (
    <li className="bg-white p-6 flex justify-between rounded-lg space-x-4 mt-9 max-sm:p-2">
      <img src={pfp} className="w-10 h-10 rounded-full" />
      <textarea
        className="grow px-6 border rounded-lg resize-none h-24"
        placeholder="Add a comment..."
      />
      <button className="bg-[#5357B6] self-start border rounded-lg py-3 px-7 max-sm:px-2 max-sm:py-2 font-medium">
        SEND
      </button>
    </li>
  );
};

const ScoopCard = ({ label, img, date, text }) => {
  const _date = new Date(date);

  return (
    <li>
      <img src={img} className="" />
      <aside className=" space-x-6 mt-3 mb-4">
        <span className="bg-red-600 uppercase text-white font-medium tracking-widest text-xs px-3 py-1 pt-2">
          {label}
        </span>
        <small className="text-gray-600 tracking-widest">
          {_date.toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </small>
      </aside>
      <h1 className="text-2xl font-bold text-text">{text}</h1>
    </li>
  );
};

const loadScoop = async (
  scoopId,
  setNews,
  setUser,
  setComments,
  navigate,
  currentUser,
  setHasUpvoted
) => {
  const handleScoopData = (scoopData) => {
    const date = new Date(scoopData?.createdAt);

    scoopData?.Upvotes?.forEach((upvote) => {
      if (upvote?.User === currentUser?.UserId) {
        setHasUpvoted(true);
      }
    });

    let newScoop = {
      headline: scoopData?.Headline,
      date: date.toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      location: scoopData?.Location,
      content:
        `<p><img class="mb-5" src="${scoopData?.Headimage}" alt="headimage" ></p>` +
        scoopData?.Description,
      tags: scoopData?.Tags,
    };

    setNews(newScoop);

    loadUser(scoopData?.User, setUser);
    loadComments(scoopId, setComments);
  };

  await axios
    .get(`http://localhost:5000/api/scoop/${scoopId}`)
    .then((newsData) => handleScoopData(newsData.data.data))
    .catch((error) => {
      console.log(error);
      navigate("/404");
    });
};

const loadLatestNews = async (dispatch, setLatestNews) => {
  await dispatch(fetchLatestNewsAsync());

  const _latestNews = store.getState().scoop.latestNews.data;

  setLatestNews(_latestNews);
};

const loadComments = async (scoopId, setComments) => {
  const response = await axios.get(
    `http://localhost:5000/api/scoop/${scoopId}/comments`
  );

  const _comments = response.data?.data?.comments;

  let newComments = [];
  for (let i = 0; i < _comments?.length; i++) {
    const comment = _comments[i];
    const _date = new Date(comment?.Date);

    const user = await axios
      .get(`http://localhost:5000/api/user/${comment?.User}`)
      .then((data) => data.data.data);

    newComments.push({
      pfp:
        user?.ProfileImage ||
        "https://i.pinimg.com/736x/c0/c2/16/c0c216b3743c6cb9fd67ab7df6b2c330.jpg",
      username: user?.UserName || "Loading...",
      time: _date.toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      comment: comment?.Comment,
    });
  }

  await setComments(newComments);
};

const loadUser = async (userId, setUser) => {
  const handleUserData = (userData) => {
    let newUser = {
      name: userData?.UserName,
      pfp: userData?.ProfileImage,
    };
    setUser(newUser);
  };

  const response = await fetch(`http://localhost:5000/api/user/${userId}`)
    .then((data) => data.json())
    .catch((error) => console.log(error));

  handleUserData(response.data);
};

const loadCurrentUser = async (
  setCurrentUser,
  setDisableUpvote,
  scoopId,
  setNews,
  setUser,
  setComments,
  navigate,
  currentUser,
  setHasUpvoted
) => {
  const _token = JSON.parse(localStorage.getItem("user"))?.token;

  if (_token) {
    const tokenJSON = parseJwt(_token);

    if (tokenJSON) {
      console.log(tokenJSON);

      const response = await axios
        .get(`http://localhost:5000/api/user/${tokenJSON?.userId}`)
        .then((data) => data.data.data);

      await setCurrentUser(response);
      setDisableUpvote(false);
    }
  }

  loadScoop(
    scoopId,
    setNews,
    setUser,
    setComments,
    navigate,
    currentUser,
    setHasUpvoted
  );
};

const Scoop = () => {
  const { scoopId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [news, setNews] = useState({
    headline: "Loading...",
    date: "Loading...",
    location: "Loading...",
    content: "Loading...",
    tags: ["Loading..."],
  });

  const [latestNews, setLatestNews] = useState([]);
  const [comments, setComments] = useState([]);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [disableUpvote, setDisableUpvote] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const [user, setUser] = useState({});

  useEffect(() => {
    loadCurrentUser(
      setCurrentUser,
      setDisableUpvote,
      scoopId,
      setNews,
      setUser,
      setComments,
      navigate,
      currentUser,
      setHasUpvoted
    );
    loadLatestNews(dispatch, setLatestNews);
  }, []);

  const handleUpvote = async () => {
    const _token = JSON.parse(localStorage.getItem("user"))?.token;
    const response = await axios
      .post(`http://localhost:5000/api/scoop/${scoopId}/upvote`, null, {
        headers: {
          Authorization: "Bearer " + _token,
        },
      })
      .then((data) => data.data.status)
      .catch((error) => {
        console.log(error?.response?.data?.error);
        toast.error(error?.response?.data?.error || "Error", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });

    if (response === "Inserted") {
      setHasUpvoted(true);
      toast.success("Upvoted", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="font-FF flex justify-center items-center bg-[#DBD9D6] pt-16 pl-80 pr-64 max-lg:px-6">
        <div className=" flex space-x-32 max-md:flex-col max-md:space-x-0 max-md:space-y-10">
          <section className="mt-9 w-3/5 max-md:w-full">
            <span className="bg-red-500 text-white font-semibold tracking-widest text-xs pl-1 py-0.5 pr-10">
              SCOOP
            </span>
            <h1 className="text-[43px] leading-[48px] max-sm:text-3xl text-text max-w-4xl font-extrabold mb-4 relative">
              {news?.headline}
              <button
                className={`font-FF text-xs p-0 py-0.5 tracking-widest ${
                  disableUpvote && "hidden"
                } font-bold px-5 ${
                  hasUpvoted ? "bg-gray-500" : "bg-green-600"
                } absolute bottom-2 ml-5`}
                onClick={handleUpvote}
              >
                {hasUpvoted ? "UPVOTED" : "UPVOTE"}
              </button>
            </h1>

            <header className="space-y-2 mb-3">
              <section className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <g clipPath="url(#clip0_382_1648)">
                    <path
                      d="M3 18.42C1.3 18.42 0 17.02 0 15.42V14.42C0 14.32 0.1 14.12 0.1 14.02C0.2 13.92 0.3 13.92 0.5 13.92H2V3.42004C2 1.72004 3.4 0.420044 5 0.420044H17C18.7 0.420044 20 1.82004 20 3.42004V4.92004C20 5.12004 19.8 5.42004 19.5 5.42004H15V15.42C15 17.02 13.7 18.42 12 18.42H3ZM5 1.42004C3.9 1.42004 3 2.32004 3 3.42004V13.92H9.4C9.7 13.92 9.9 14.12 9.9 14.42V15.42C9.9 16.52 10.8 17.42 11.9 17.42C13 17.42 13.9 16.52 13.9 15.42V3.42004C13.9 2.72004 14.1 2.12004 14.6 1.52004L14.7 1.42004H5ZM1 15.42C1 16.52 1.9 17.42 3 17.42H9.7L9.6 17.32C9.2 16.72 9 16.12 9 15.42V14.92H1V15.42ZM17 1.42004C15.9 1.42004 15 2.32004 15 3.42004V4.42004H19V3.42004C19 2.32004 18.1 1.42004 17 1.42004Z"
                      fill="#D1363A"
                    />
                    <path
                      d="M5.7002 9.42004H11.7002V10.42H5.7002V9.42004ZM5.7002 7.42004H11.7002V8.42004H5.7002V7.42004ZM5.7002 5.42004H11.7002V6.42004H5.7002V5.42004Z"
                      fill="#D1363A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_382_1648">
                      <rect
                        width="20"
                        height="18"
                        fill="white"
                        transform="translate(0 0.420044)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h1 className="max-sm:text-xs font-extrabold text-base mb-0 mr-5 ml-2">
                  {news?.date} / {news?.location}
                </h1>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M4.5 0V2H14.1L0 16.1L1.4 17.5L15.5 3.4V13H17.5V0H4.5Z"
                    fill="#D1363A"
                  />
                </svg>
                <h1 className="max-sm:text-xs font-extrabold text-base mb-0 ml-2">
                  {news?.tags.join(", ")}
                </h1>
              </section>
              <section className="flex justify-start space-x-1 items-center">
                <img
                  src={
                    user?.pfp ||
                    "https://i.pinimg.com/736x/c0/c2/16/c0c216b3743c6cb9fd67ab7df6b2c330.jpg"
                  }
                  className="m-2 w-14 h-14 rounded-full"
                />
                <h3 className="text-lg font-extrabold">
                  {user?.name || "Loading..."}
                </h3>
              </section>
            </header>
            <main
              className="space-y-7 mb-6"
              dangerouslySetInnerHTML={{ __html: news.content }}
            ></main>
            <span className="bg-red-600 text-white font-medium tracking-widest text-xs px-3 pt-1 pb-0.5">
              COMMENTS
            </span>
            <ul className="mt-2 space-y-5">
              {comments?.map((comment, index) => (
                <CommentCard
                  key={index}
                  pfp={comment.pfp}
                  username={comment.username}
                  time={comment.time}
                  comment={comment.comment}
                />
              ))}
            </ul>
            <NewComment
              pfp={
                currentUser?.ProfileImage ||
                "https://i.pinimg.com/236x/d9/21/4a/d9214ad661353dffe8846da342e1a004.jpg"
              }
            />
          </section>

          <section className="w-2/5 max-md:w-full">
            <h1 className="text-text w-full text-[40px] font-FF font-extrabold max-sm:text-center">
              Latest Scoop
            </h1>
            <ul className="space-y-9">
              {latestNews?.map((scoop, index) => (
                <ScoopCard
                  key={index}
                  label={scoop.Location}
                  img={scoop.Headimage}
                  date={scoop.createdAt}
                  text={scoop.Headline}
                />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Scoop;
