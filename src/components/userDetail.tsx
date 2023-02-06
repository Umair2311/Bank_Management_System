import React from 'react'
import Button from './button'

function UserDetail() {
  return (
    <div className='p-14 text-center'>
        <h1 className='capitalize text-5xl mb-8'>number of banks</h1>
        <div className='m-2 p-3 text-end text-4xl'>
            User Name: 
            <span className='text-cyan-600 ml-2'>John Smith</span>
        </div>
        <div className='border-2 border-solid border-cyan-700 p-4 sm:min-w-[500px] m-7'>
            <ul className='flex flex-wrap justify-between'>
                <li className='m-2 flex items-center w-5/12'>
                    <img src='./Alfalah_Logo.png' className='w-16 h-16 mr-4' />
                    <span>Bank Alfalah</span>
                </li>
                <li className='m-2 flex items-center w-5/12'>
                    <img src='' className='w-16 h-16 mr-4' />
                    <span>Bank Name</span>
                </li>
                <li className='m-2 flex items-center w-5/12'>
                    <img src='' className='w-16 h-16 mr-4' />
                    <span>Bank Name</span>
                </li>
            </ul>
        </div>
        <Button text="Back" />
        <Button text="Add New Bank" />
    </div>
  )
}

export default UserDetail