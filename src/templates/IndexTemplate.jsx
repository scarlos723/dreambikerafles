import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
const IndexTemplate = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default IndexTemplate
