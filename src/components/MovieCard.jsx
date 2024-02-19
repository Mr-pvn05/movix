import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import "./movieCard.scss";
import {Img} from "./index";
import {noPoster} from "../assets/index";

const MovieCard = ({data, media_type}) => {
    const  url  = "https://image.tmdb.org/t/p/original"
    const navigate = useNavigate();
    const posterUrl = data.poster_path ? url + data.poster_path : noPoster

    return (
        <div
            className="movieCard max-md:w-[48%] max-md:flex-wrap"
            onClick={() =>
                navigate(`/${data.media_type || media_type}/${data.id}`)
            }
        >
            <div className="posterBlock">
                <Img className="posterImg" src={posterUrl} />
            </div>
            <div className="textBlock">
                <span className="title ">{data.title || data.name}</span>
                <span className="date">
                    {dayjs(data.release_date).format("MMM D, YYYY")}
                </span>
            </div>
        </div>
    );
};

export default MovieCard;