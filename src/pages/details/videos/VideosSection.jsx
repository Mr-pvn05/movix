import { Container, VideoPopUp, Img } from "../../../components/index";
import { useState } from "react";
import { PlayIcon } from "../PlayIcon";
import "../playIcon.scss";

const VideosSection = ({ videos }) => {
  const [show, setShow] = useState(false);

  const [videoId, setVideoId] = useState(null);

  return (
    <div className="relative mb-12">
      <Container>
        <div className="text-2xl text-white mb-6">Official Videos</div>
        <div className="flex gap-[10px] overflow-x-auto mr-[-20px] ml-[-20px] py-0 px-5 md:gap-5 md:m-0 md:p-0">
          {videos?.map((video) => (
            <div
              onClick={() => {
                setVideoId(video.key);
                setShow(true);
              }}
              className="w-[150px] flex-shrink-0 md:w-[25%] cursor-pointer"
              key={video.id}
            >
              <div className="mb-[15px] relative">
                <Img
                  className="w-full block rounded-xl transition-all duration-700 ease-in-out"
                  src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                />
                <PlayIcon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50px] h-[50px]"/>
              </div>
              <div className="text-white text-sm leading-5 md:text-base md:leading-6">
                {video.name}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <VideoPopUp
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
