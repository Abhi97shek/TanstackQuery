import React from 'react'
import Navbar from '../componets/Navbar';
import { NavLink, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPostbyId } from '../api/api';
const SinglePost:React.FC = () => {
  const {id} = useParams();
 
  const {data,isPending,isError,error}= useQuery({
    queryKey:['postById',id],
    queryFn:()=> fetchPostbyId(id),
    staleTime:1000,
  });

  if(isPending)
    { 
        return <div><p>Loading.....</p></div>
    }

    if(isError)
    {
          return <div><p>{error}</p></div>
    }

  return (
    <>
            <Navbar />
            <div className='bg-yellow-700 p-4 m-4'>
                      <h1>{data.id}</h1>
                      <h2>{data.title}</h2>
                      <p>{data.body}</p>
                      <NavLink to="/tanstack">
                          <button className='bg-green-400 p-2 mt-4 rounded-lg'>Go Back</button>
                      </NavLink>
            </div>
    </>
  )
}

export {SinglePost};