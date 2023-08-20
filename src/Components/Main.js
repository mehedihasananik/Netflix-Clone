import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from '../Requests';

export const Main = () => {
  const [movies, setMovies] = useState([])
  const movie = movies[Math.floor(Math.random() * movies.length)]

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + " . . . "
    }
    else {
      return str
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(requests.requestPopular);
      const data = response.data.results;
      setMovies(data)
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    fetchData()
  }, []);


  return (
    <div className=' w-full h-[500px] md:h-[700px] text-white'>
      <div className='w-full h-full'>
        <div className='w-full h-[500px] md:h-[700px] bg-gradient-to-r from-black absolute'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt="" />
      </div>
      <div className='w-full md:max-w-[80%] lg:max-w-[50%]  absolute top-[20%] md:left-[9%] md:top-[20%] p-10 space-y-3'>
        <h3>{movie?.original_title}</h3>
        <div>
          <button className='bg-gray-300 px-5 py-2 text-black border-gray-400 mr-3'>Play</button>
          <button className='bg-black px-5 py-2 text-white border border-gray-400'>Watch Later</button>
        </div>
        <h3>Released :{movie?.release_date}</h3>
        <p>{truncateString(movie?.overview, 200)}</p>
      </div>
    </div>
  )
}
