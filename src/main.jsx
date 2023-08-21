import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import App from './routes/App'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App/>
  </>
)
