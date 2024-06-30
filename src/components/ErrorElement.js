import React from 'react'

const ErrorElement = () => {
  return (
    <div className='flex justify-center bg-[#010B13] pt-[20%] sm:pt-[8%] gap-2 w-screen'>
        <p className='border-2 border-white p-3 text-white w-1/2 rounded-md text-center'>Oops! The API limit exeeced. Please wait a minute for it to restore.</p>
    </div>
  )
}

export default ErrorElement