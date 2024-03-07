import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/SandipGitt')
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     setData(data);
    // })
    // }, [])
    return (
    <div className='text-center m-5 bg-orange-600 text-white p-3 text-2xl'>
        Github followers:{data.followers}</div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/SandipGitt')
    return response.json()
}