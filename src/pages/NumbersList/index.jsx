import { useEffect, useState } from 'react'
import { Container } from './styles'
import { HiOutlineTicket } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
const NumberList = () => {
  const [numbers, setNumbers] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const inputList = []

    for (let i = 0; i < 100; i++) {
      const number = i.toString().padStart(3, '0')
      inputList.push({
        number,
        selected: false,
        state: 'available'
      })
    }
    setNumbers(inputList)
  }
  , [])
  function calcTotal (length) {
    const total = length * 20000
    return total.toLocaleString('es-CO')
  }
  return (
    <Container>
      <div>
        <h2>
        Numeros disponibles
        </h2>
        <h3>
        Selecciona los numeros que deseas comprar
        </h3>
      </div>
      <ul className='list'>
        {
          numbers?.map((item, index) => (
            <li key={index}>
              <article className={`item ${item.selected ? 'active' : ''}`}
                onClick={() => {
                  const newNumbers = [...numbers]
                  newNumbers[index].selected = !newNumbers[index].selected
                  setNumbers(newNumbers)
                }}
              >
                <h4>
                  <HiOutlineTicket color="#EED202" />
                  {item.number}
                </h4>
              </article>
            </li>
          ))
        }
      </ul>
      <h3>Numeros que has seleccionado:     <span>
        {numbers?.filter(item => item.selected).map(item => item.selected).length}
      </span> </h3>

      <ul className='list-selected'>
        {
          numbers?.map((item, index) =>
            item.selected &&
              <li key={index}>
                <article className={'item active'}
                  onClick={() => {
                    const newNumbers = [...numbers]
                    newNumbers[index].selected = !newNumbers[index].selected
                    setNumbers(newNumbers)
                  }}
                >
                  <h4>
                    <HiOutlineTicket/>
                    {item.number}
                  </h4>
                </article>
              </li>

          )
        }
      </ul>

      <h2>  Total: $ {calcTotal(numbers?.filter(item => item.selected).map(item => item.selected).length) }</h2>

      <button className='uppercase font-extrabold text-[#EED202]'
        onClick={() => navigate('/formulario-pago')}
      >
          Ir a formulario de pago
      </button>
    </Container>
  )
}

export default NumberList
