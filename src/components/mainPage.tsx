import React from 'react'
import Button from './button'

function MainPage() {
  return (
    <div className='text-center p-48'>
        <div className='text-5xl uppercase p-6'>apna bank system</div>
        <Button text="Sign In" />
        <Button text="Sign Up" />
    </div>
  )
}

export default MainPage