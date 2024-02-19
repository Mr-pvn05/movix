import { Container, Img } from "../../../components/index"
import {avatar} from "../../../assets/index"

const Cast = ({cast}) => {

    const url = "https://image.tmdb.org/t/p/original";

  return (
    <div className="relative mb-12">
        <Container>
            <div className="text-2xl text-white mb-6">Top Cast</div>
            <div className="flex gap-5 overflow-y-hidden mr-[-20p] ml-[-20px] py-0 px-5 md:m-0 md:p-0">
                {
                    cast?.map((item) => {
                        const imgUrl = url + item.profile_path
                        return(
                        <div key={item.id} className="text-center text-white">
                            <div className="w-[125px] h-[125px] rounded-full overflow-hidden mb-4 md:w-[175px] md:h-[175px] md:mb-6">
                                <Img src={imgUrl ? imgUrl : avatar}/>
                            </div>
                            <div className="text-sm leading-5 font-semibold md:text-lg md:leading-6">
                                {item.name}
                            </div>
                            <div className="text-sm leading-5 opacity-50 md:text-base md:leading-6">
                                {item.character}
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </Container>
    </div>
  )
}

export default Cast