import React, { useState } from 'react'
import Navbar from '../componets/Navbar';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getTodos } from '../api/api';
import { NavLink } from 'react-router-dom';

interface TodoType {
    userId:number,
    id:number,
    title:string,
    body:string
}

const TanStack:React.FC = () => {

    const [pageNumber,setPageNumber] = useState(0);

    const {isPending,isError,data,error} = useQuery({
        queryKey:['getTodos',pageNumber],
        queryFn:()=> getTodos(pageNumber),
        // staleTime:10 *1000,
        // refetchInterval:1000,
        // refetchIntervalInBackground:true,
        placeholderData:keepPreviousData
    });


if(isPending)
{
    return <span>Laoding....</span>
}
if(isError)
{
    return <span>Error : {error}</span>
}
    
  return (
    <>
    <Navbar />
    <div>
        {data?.map((todo:TodoType)=> {
            const {id,title,body} = todo;
            return (

                <NavLink to={`/tanstack/${id}`}>
                <div key={id} className='bg-yellow-700 p-4 m-10 hover:bg-yellow-500 transition-all'>
                    <span>{id}</span>
                    <h1 className='text-2xl'>{title}</h1>
                    <p>{body}</p>
                </div>
                </NavLink>
            )
        })}
        <div className='flex gap-3'>
                        <button className='bg-gray-400 p-3' disabled={pageNumber ==0 ? true :false} onClick={()=>{setPageNumber((prev)=> prev -3 )}}> Prev</button>
                        <p>{(pageNumber/3) + 1}</p>
                        <button className='bg-gray-400 p-3' onClick={()=>{setPageNumber((prev)=> prev +3 )}}>Next</button>
        </div>
    </div>
    </>
    
  )
}

export { TanStack};