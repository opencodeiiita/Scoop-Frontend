import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleArrow = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { className, style, onClick, direction } = props;
  return (
    <div
      className={`cursor-pointer z-[2] top-[12px]  absolute ${
        direction === "prev" ? "left-[24px] flip-element" : "right-[24px]"
      }`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 21C8.57812 21 8.20312 20.8594 7.92188 20.5781C7.3125 20.0156 7.3125 19.0312 7.92188 18.4688L14.3438 12L7.92188 5.57812C7.3125 5.01562 7.3125 4.03125 7.92188 3.46875C8.48438 2.85938 9.46875 2.85938 10.0312 3.46875L17.5312 10.9688C18.1406 11.5312 18.1406 12.5156 17.5312 13.0781L10.0312 20.5781C9.75 20.8594 9.375 21 9 21Z"
          fill="#3E3232"
        />
      </svg>
    </div>
  );
};

const settings = {
  accessibility: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  nextArrow: <SampleArrow direction="next" />,
  prevArrow: <SampleArrow direction="prev" />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "50px",
      },
    },
  ],
};

const categories = [
  {
    title: "Food",
    srcImg:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Animals",
    srcImg:
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Nature",
    srcImg:
      "https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tech",
    srcImg:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "People",
    srcImg:
      "https://images.unsplash.com/photo-1454923634634-bd1614719a7b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Objects",
    srcImg:
      "https://plus.unsplash.com/premium_photo-1668535612648-77ee97d5ed59?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Professor",
    srcImg:
      "https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJvZmVzc29yfGVufDB8fDB8fHww",
  },
  {
    title: "Sport",
    srcImg:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CategoryCarousel = () => {
  return (
    <div className="bg-[#F5F5F5] mt-[64px] h-[68px] p-[10px] relative">
      <div className="z-[1] absolute h-full top-0 w-[170px] left-[9px] bg-gradient-to-r from-[#F5F5F5] via-[#F5F5F562] to-[#F5F5F500]"></div>
      <Slider {...settings}>
        {categories.map((item) => (
          <div>
            <div
              key={item.title}
              className="m-auto w-[170px] h-[48px] overflow-hidden relative rounded-[12px]"
            >
              <div className="z-[2] absolute w-full h-full flex justify-center items-center">
                <p className="text-white font-[500] ">#{item.title}</p>
              </div>
              <img
                src={`${item.srcImg}`}
                className="blur h-full w-full"
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="z-[1] absolute h-full top-0 w-[170px] right-[8px] bg-gradient-to-l from-[#F5F5F5] via-[#F5F5F562] to-[#F5F5F500]"></div>
    </div>
  );
};

export default CategoryCarousel;
