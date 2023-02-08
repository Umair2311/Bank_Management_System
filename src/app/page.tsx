import styles from './page.module.css'
import MainPage from '@/components/mainPage'
import UserDetail from '@/components/userDetail'
import BankDetails from '@/components/bankDetails'
import Users from '@/components/users'

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
      {/* <Users /> */}
      {/* <UserDetail /> */}
      {/* <BankDetails /> */}
    </main>
  )
}
