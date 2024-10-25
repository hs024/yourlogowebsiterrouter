import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([])
useEffect(()=>{
fetch("https://api.github.com/users/hs024").then(res=>res.json()).then(data=>{
    // console.log(data)
    setData(data)
})
},[data])
// {data.followers}
  return (
    <div className='text-center m-5 bg-gray-600'>
        
        <img src={data.avatar_url}  className="m-1 p-2 bg-center mx-auto" alt="" height={100} width={100} />
        Name:{data.name} <br />
        Github followers:{data.followers}
        
        </div>
  )
}

export default Github