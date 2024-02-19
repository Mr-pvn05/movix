import { Carousel } from '../../../components'
import useFetch from '../../../hooks/useFetch'

const Recomend = ({mediaType, id}) => {

    const {data} = useFetch(`/${mediaType}/${id}/recommendations`)

  return (
    <div>
        {data?.data?.results.length > 0 && <Carousel title="Recommendations" data={data?.data?.results} endPoint={mediaType}/>}
    </div>
  )
  
}

export default Recomend