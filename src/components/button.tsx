import React from 'react'

interface ButtonProps{
    text: string
}

function button(props: ButtonProps) {
  const {text} = props
  return (
    <button className='p-2 bg-slate-500 rounded m-1 min-w-[100px]'>{text}</button>
  )
}

export default button 