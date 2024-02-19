import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Img, Container } from '../../components/index';


const HeroBanner = () => {

    const url = "https://image.tmdb.org/t/p/original"

    const navigate = useNavigate();

    const {data, loading} = useFetch("movie/upcoming");

    const [background, setBackground] = useState("");

    const [searchQuery, setSearchQuery] = useState("");

    const searchQueryHandlerByKey = (e) => {
        if(e.key === "Enter" && searchQuery.length > 0){
            e.preventDefault()
            navigate(`/search/${searchQuery}`)
        }
    }
    const searchQueryHandler = (e) => {
        if(searchQuery.length > 0){
            e.preventDefault()
            navigate(`/search/${searchQuery}`)
        }
    }

    useEffect(() => {
        const rand = Math.floor(Math.random() * 20)
        const bgImage = url + data?.data?.results[rand].backdrop_path
        setBackground(bgImage)
    }, [data])

  return (
    <div className='relative w-full h-full flex flex-col'>
        {
            !loading && 
            <div className='relative w-full h-full'>
                <Img src={background} className="w-full h-full object-cover object-center"/>
                <div className='absolute w-full h-full bg-gradient-to-t from-[#04152d] from-10% top-0'></div>
            </div>
        }
        <Container>
            <div className='absolute gap-1 md:gap-4 lg:gap-8 w-full text-center flex flex-col justify-center items-center top-[50%] lg:top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] my-0 mx-auto'>
                <span className='text-[50px] md:text-[90px] md:font-semibold'>Welcome.</span>
                <span className='text-[1rem] md:text-[1.5rem] md:font-medium lg:text-[2rem]'>Millions of movies, TV shows and people to discover. Explore now.
                </span>
                <div className='flex justify-center max-md:w-[60%] md:w-[50%]'>
                    <input className='text-black rounded-s-full px-4 py-2 md:p-[30px] w-full text-[14px] md:text-[16px] on focus:outline-none md:px-4 md:py-2 lg:py-4 lg:text-[20px] lg:px-8' onKeyUp={searchQueryHandlerByKey} onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder='Search for a movie or tv show'/>
                    <button className='bg-gradient-to-r from-pink to-yellow-500 rounded-e-full px-2 py-2 cursor-pointer text-[14px] md:text-[16px] lg:px-8 lg:text-[20px]' onClick={searchQueryHandler}>Search</button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HeroBanner