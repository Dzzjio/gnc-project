import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import HeaderTop from '../Layout/Header/HeaderTop'

const Root = () => {
  return (
    <div className="app">
      <HeaderTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
