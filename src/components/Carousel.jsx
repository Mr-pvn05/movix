import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { Container, Img, CircleRating } from "./index";
import { noPoster } from "../assets/index";
import { useRef, useState } from "react";

const Carousel = ({ data, loading, endPoint, title }) => {

  const url = "https://image.tmdb.org/t/p/original";

  const navigate = useNavigate();

  const carouselContainer = useRef()

  const navigation = (dir) => {

    const container = carouselContainer.current;

    const scrollAmount = dir === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20)

    container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
    })

  };



  return (
    <div className="relative my-8 lg:mb-18">
      <Container>
        {title && <div className="text-2xl text-white mb-5 font-normal">{title}</div>}
        <BsFillArrowLeftCircleFill className={`text-2xl md:text-3xl z-10 text-slate-500 hover:opacity-80 cursor-pointer absolute top-[40%] left-[-10px] md:top-[45%] md:left-[-20px]`} onClick={() => navigation("left")} />
        <BsFillArrowRightCircleFill className={`text-2xl md:text-3xl z-10 text-slate-500 hover:opacity-80 cursor-pointer absolute right-[-10px] top-[40%] md:right-[-20px] md:top-[45%]`} onClick={() => navigation("right")} />
        {!loading ? (
          <div className="flex gap-5 snap-x overflow-x-scroll lg:gap-5 overflow-hidden" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url + item.poster_path
                : noPoster;
              return (
                <div className="w-[135px] md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] flex-shrink-0 snap-start" onClick={() => navigate(`/${item.media_type || endPoint}/${item.id}`)} key={item.id}>
                  <div className="relative w-full bg-cover bg-center aspect-[1/1.5] mb-7">
                    <Img className={"rounded-xl"} src={posterUrl} />
                    <CircleRating className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] absolute bottom-[-10px] left-2" rating={item.vote_average.toFixed(1)}/>
                  </div>
                  <div className="flex text-white flex-col">
                    <span className="text-base mb-2 leading-6 md:text-xl overflow-hidden whitespace-nowrap">{item.name || item.title}</span>
                    <span className="text-sm text-slate-400 font-medium">{dayjs(item.release_date).format("MMM D, YYYY")}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-[125px] md:w-[calc(25%-15px)] bg-slate-500 lg:w-[calc(20%-16px)] flex-shrink-0 snap-start">
              <div className="relative w-full bg-cover bg-slate-500 bg-center aspect-[1/1.5] mb-7">
                  <img className="w-full" src="" alt="" />
              </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Carousel;
