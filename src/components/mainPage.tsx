"use client";
import Button from './button'
import { useRouter } from 'next/navigation';

function MainPage() {
  const router = useRouter()

const handleSignUp = () => {
  router.push("signup")
}

function handleSignIn() {
  router.push("signin")
}


  return (
    <div className='text-center p-48'>
        <div className='text-5xl uppercase p-6'>apna bank system</div>
        <Button onClick={handleSignIn} text="Sign In" />
        <Button onClick={handleSignUp} text="Sign Up" />
    </div>
  )
}

export default MainPage