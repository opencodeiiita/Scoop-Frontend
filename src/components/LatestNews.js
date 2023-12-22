import React from "react";

const LatestNews = () => {
  return (
    <div className="bg-black h-screen p-10">
      <div className="flex flex-col">
        <div className="flex justify-between items-center p-6">
          <h2 className="text-4xl family font-[inter] text-white font-bold uppercase">
            Latest News
          </h2>
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
          <div className="flex flex-col md:flex-row">
            <div>
              <img
                src="/news-1.png"
                alt="News Image"
                className="w-screen md:w-[50vw] p-4"
              />
              <div className="px-6">
                <h1 className="font-black text-3xl text-white">Heading</h1>
                <h4 className="flex items-center text-gray-500">
                  <div className="w-10 h-10 rounded-full font-semibold bg-news-gray mr-3"></div>
                  NEWS
                </h4>
              </div>
            </div>
            <div className="overflow-scroll">
              <div className="grid grid-cols-2 m-8 rounded-3xl overflow-hidden bg-news-gray text-white w-5/6 md:w-[40vw]">
                <div className="p-8">
                  <h1 className="font-bold">Heading</h1>
                  <h4 className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-black mr-3"></div>
                    News
                  </h4>
                </div>
                <img
                  src="/news-1.png"
                  alt="News Image"
                  className="h-full w-full"
                />
              </div>

              <div className="grid grid-cols-2 m-8 rounded-3xl overflow-hidden bg-news-gray text-white w-5/6 md:w-[40vw]">
                <div className="p-8">
                  <h1 className="font-bold">Heading</h1>
                  <h4 className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-black mr-3"></div>
                    News
                  </h4>
                </div>
                <img
                  src="/news-1.png"
                  alt="News Image"
                  className="h-full w-full"
                />
              </div>

              <div className="grid grid-cols-2 m-8 rounded-3xl overflow-hidden bg-news-gray text-white w-5/6 md:w-[40vw]">
                <div className="p-8">
                  <h1 className="font-bold">Heading</h1>
                  <h4 className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-black mr-3"></div>
                    News
                  </h4>
                </div>
                <img
                  src="/news-1.png"
                  alt="News Image"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
