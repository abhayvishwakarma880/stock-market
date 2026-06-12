import React from 'react'

const ColorCheck = () => {
  return (
    <div className='min-h-screen bg-background text-text p-8'>
      <div className='bg-primary-gradient text-white p-6 rounded-xl shadow-lg'>
        <h1 className='text-3xl font-bold'>Welcome to Stock Market</h1>
        <p className='mt-2 text-success-light'>Global colors and gradient are working perfectly!</p>
      </div>
      <div className='mt-6 grid grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='bg-primary p-4 rounded-lg shadow text-white font-semibold'>Primary</div>
        <div className='bg-secondary p-4 rounded-lg shadow text-white font-semibold'>Secondary</div>
        <div className='bg-success p-4 rounded-lg shadow text-white font-semibold'>Success</div>
        <div className='bg-warning p-4 rounded-lg shadow text-white font-semibold'>Warning</div>
        <div className='bg-card p-4 rounded-lg shadow text-text border border-gray-200 font-semibold'>Card</div>
        <div className='bg-muted p-4 rounded-lg shadow text-white font-semibold'>Muted</div>
      </div>
    </div>
  )
}

export default ColorCheck