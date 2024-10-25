import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const{userid}=useParams()
  return (
    <div className='bg-slate-200  m-10'>User : {userid}</div>
  )
}

export default User