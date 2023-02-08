
interface ButtonProps{
    text: string
    onClick?: () => void
}

function button(props: ButtonProps) {
  const {text, onClick} = props
  return (
    <button onClick={() => onClick && onClick()} className='p-2 bg-cyan-600 rounded m-1 min-w-[100px]'>{text}</button>
  )
}

export default button 