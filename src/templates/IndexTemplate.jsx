import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
const IndexTemplate = () => {
  return (
    <div className='w-[100vw]'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default IndexTemplate
