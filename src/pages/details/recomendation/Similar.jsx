import useFetch from "../../../hooks/useFetch"
import { Carousel } from "../../../components"

const Similar = ({mediaType, id}) => {

    const {data} = useFetch(`${mediaType}/${id}/similar`)

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies"

  return (
    <div>
        {data?.data?.results.length > 0 && <Carousel title={title} data={data?.data?.results} endPoint={mediaType}/>}
    </div>
  )
}

export default Similar