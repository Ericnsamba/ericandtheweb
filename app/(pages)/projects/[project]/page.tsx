"use client"
import React, { memo } from 'react'

const page = ({params}) => {
  console.log("🚀 ~ page ~ params:", params)
  return (
    <div className='min-h-screen'>
      <h1 className='text-9xl'>{params.project}</h1>
    </div>
  )
}

export default page;

