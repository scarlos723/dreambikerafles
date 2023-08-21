import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import IndexTemplate from '../templates/IndexTemplate'
import PaymentForm from '../pages/PaymentForm'
import NumberList from '../pages/NumbersList'

const ContainerLocation = ({ children }) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <>
      { children }
    </>
  )
}

function App () {
  return (
    <BrowserRouter>
      <ContainerLocation>
        <Routes>
          <Route path="/" element={<IndexTemplate />}>
            <Route index element={<Home />} />
            <Route path='lista' element={<NumberList />} />
            <Route path='formulario-pago' element={<PaymentForm />} />
          </Route>
        </Routes>
      </ContainerLocation>
    </BrowserRouter>
  )
}

export default App
