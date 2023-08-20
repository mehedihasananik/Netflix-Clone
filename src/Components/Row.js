import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios(fetchUrl);
      const data = response.data.results;
      setMovies(data)

    } catch (error) {
      console.log(error.response)
    }
  }


  useEffect(() => {
    fetchData()
  }, [fetchUrl]);

  console.log(movies)

  return (
    <div className='text-white p-3'>
      <h3 className='flex items-center justify-start'>{title}</h3>
      <div className='flex items-center justify-center space-x-6'>
        {movies.slice(0, 4).map(movie => {
          return <div key={movie.id}>
            <img className='w-[400px] h-[200px] md:h-[100%] cursor-pointer' src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="" />
          </div>
        })}
      </div>
    </div>
  )
}
