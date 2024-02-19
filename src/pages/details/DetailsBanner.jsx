import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Container, Img, CircleRating, VideoPopUp } from "../../components/index";
import { noPoster } from "../../assets/index";
import dayjs from "dayjs";
import {PlayIcon} from "./PlayIcon"
import "./playIcon.scss";
import { useState, useEffect } from "react";

const DetailsBanner = ({video, crew}) => {

  const url = "https://image.tmdb.org/t/p/original";

  const [show, setShow] = useState(false);

  const [videoId, setVideoId]  = useState(null)

  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const backDropUrl = url + data?.data?.backdrop_path;

  const posterUrl = url + data?.data?.poster_path;

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  }

  const director = crew?.filter((i) => i.job === "Director")

  const writer = crew?.filter((i) => i.job === "Screenplay" || i.job === "Writer" || i.job === "Story")


  return (
    <div className="w-full bg-black1 pt-24 mb-12 md:mb-0 md:pt-[120px] min-h-[700px]">
        
        <div className="w-full h-full absolute top-0 left-0 opacity-10 overflow-hidden">
            <Img src={backDropUrl} className="w-full h-full object-cover object-center"/>
        </div>    
        <div className='absolute w-full h-full bg-gradient-to-t from-[#04152d] from-10% top-0'></div>
        <Container>
            <div className="flex relative flex-col gap-6 md:gap-12 md:flex-row">
                <div className="flex-shrink-0 ">
                    {
                        posterUrl ? (
                            <Img className="w-full block rounded-xl md:max-w-[350px]" src={posterUrl}/>
                        ) : (
                            <Img className="w-full block rounded-xl md:max-w-[350px]" src={noPoster}/>
                        )
                    }
                </div>
                <div className="text-white">
                    <div className="text-3xl leading-10 md:text-4xl md:leading-[44px]">
                        {
                            `${data?.data?.name || data?.data?.title} (${dayjs(data?.data?.release_date).format("YYYY")})`
                        }
                    </div>
                    <div className="text-base leading-6 mb-4 italic opacity-50 md:text-xl md:leading-7">
                        {
                            data?.data?.tagline
                        }
                    </div>
                    <div className="flex gap-[5px]">
                        {data?.data?.genres.map((genre) => (
                            <p className="bg-pink py-1 px-1 rounded text-xs text-white whitespace-nowrap" key={genre.id}>{genre.name}</p>
                        ))}
                    </div>
                    <div className="flex items-center gap-5 my-6">
                        <CircleRating className="circleRating" rating={data?.data?.vote_average.toFixed(1)}/>
                        <div className="playbtn" onClick={() => {
                            setShow(true)
                            setVideoId(video?.key)
                        }}>
                            <PlayIcon className="w-[60px] md:w-[80px]"/>
                            <span className="transition text-xl ease-in-out duration-700">Watch Trailer</span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="text-2xl mb-2">
                            Overview
                        </div>
                        <div className="leading-6 md:pr-24">
                            {data?.data?.overview}
                        </div>
                    </div>
                    <div className="border-b border-solid border-white p-4 flex">
                        <div className="mr-2 flex flex-wrap flex-row">
                            <span className="font-semibold opacity-100 mr-2 leading-6">
                                Status:{" "}
                            </span>
                            <span className="mr-2 opacity-50 leading-6">{data?.data?.status}</span>
                        </div>
                        <div className="mr-2 flex flex-wrap flex-row">
                            <span className="font-semibold opacity-100 mr-2 leading-6">
                                Release Date:{" "}
                            </span>
                            <span className="mr-2 opacity-50 leading-6">{dayjs(data?.data?.release_date).format("MMM D, YYYY")}</span>
                        </div>
                        <div className="mr-2 flex flex-wrap flex-row">
                            <span className="font-semibold opacity-100 mr-2 leading-6">
                                Runtime:{" "}
                            </span>
                            <span className="mr-2 opacity-50 leading-6">{toHoursAndMinutes(data?.data?.runtime)}</span>
                        </div>
                    </div>
                    {director?.length > 0 && (
                        <div className="border-b border-solid border-white p-4 flex">
                            <span className="font-semibold opacity-100 mr-2 leading-6">
                                Director: {" "}
                            </span>
                            <span>
                                {director?.map((director, index) => (
                                    <span className="mr-2 opacity-50 leading-6" key={index}>
                                        {director.name}
                                        {
                                            director.length - 1 !== index && ", "
                                        }
                                    </span>
                                ))}
                            </span>
                        </div>
                    )}
                    {writer?.length > 0 && (
                        <div className="border-b border-solid border-white p-4 flex">
                            <span className="font-semibold opacity-100 mr-2 leading-6">
                                Writer: {" "}
                            </span>
                            <span>
                                {writer?.map((writer, index) => (
                                    <span className="mr-2 opacity-50 leading-6" key={index}>
                                        {writer.name}
                                        {
                                            writer.length - 1 !== index && ", "
                                        }
                                    </span>
                                ))}
                            </span>
                        </div>
                    )}
                    {data?.data?.created_by?.length > 0 && (
                        <div className="border-b border-solid border-white p-4 flex">
                            <span className="font-semibold opacity-100 mr-2 leading-6">
                                Created By: {" "}
                            </span>
                            <span>
                                {data?.data?.created_by?.map((creater, index) => (
                                    <span className="mr-2 opacity-50 leading-6" key={index}>
                                        {creater.name}
                                        {
                                            creater.length - 1 !== index && ", "
                                        }
                                    </span>
                                ))}
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <VideoPopUp show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId}/>
        </Container>
        
    </div>
  );
};

export default DetailsBanner;
