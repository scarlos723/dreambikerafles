import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow } from 'swiper/modules'
import { Article, Selector, SliderContainer } from './styles'
import { useState } from 'react'
import NumberList from '../NumbersList'

const LIST_IMAGES = [
  img1,
  img2,
  img3,
  img4
]

const Home = () => {
  const [showNumberList, setShowNumberList] = useState(false)
  return (
    <main className='custom-container h-100vh'>
      {
        showNumberList && <NumberList />
      }
      <SliderContainer >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className={'mySwiper'}>
          {LIST_IMAGES.map((item, index) => (
            <SwiperSlide key={index}>
              <Article image={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
      <Selector>
        <div className='grid gap-2'>
          <h1 className='text-center'>
            Valor de la rifa $20.000 COP
          </h1>
          <p>
          Cilindraje, 890 cc ; Peso (con aceite y tanque de gasolina lleno), 189 Kg ; Potencia, 117.3 Hp a 10000 rpm ; Torque, 93.0 Nm a 7000 rpm.
          </p>
          <h2>
          Yamaha MT 09 2022
          </h2>
        </div>
        <div className='progress-container'>
          <div className='flex justify-between'>
            <h5>
              Meta
            </h5>
            <h5 className='text-[#EED202]'>
            50%
            </h5>
          </div>
          <figure className='progress-bar' >
            <div className='progress' />
          </figure>
        </div>
        <div>
          <h2>
            Una vez lleguemos la meta,
          </h2>
          <h4>
            La rifa juega con las ultimas cifras de la  <span>
            loteria de Medellin
            </span>
          </h4>
        </div>
        <button className='uppercase font-extrabold text-[#EED202]'
          onClick={() => setShowNumberList(true)}
        >
          Comprar Numero
        </button>
      </Selector>

    </main>
  )
}

export default Home