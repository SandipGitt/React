import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/SandipGitt')
    //     .then((response) => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
    <>
    <div className='flex flex-col items-center mx-auto p-5 m-3 bg-slate-300 w-56 rounded-md'>
    <div className='text-lg mb-2'>Github followers :{data.followers}</div>
    <img src={data.avatar_url} alt='Git Profile' />
    </div>
    </>
    )
}

export default Github

export const githunInfoLoader = async ()=> {
    const response = await fetch('https://api.github.com/users/SandipGitt')
    return response.json()
}