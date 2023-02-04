import styles from './page.module.css'
import MainPage from '@/components/mainPage'
import SignIn from '@/components/signIn'
import SignUp from '@/components/signUp'


export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
    </main>
  )
}
