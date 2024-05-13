import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'

const AboutPageSlider = () => {
  return (
    <div style={{ width: '80vw', margin: '0' }}>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        navigation
        slidesPerView={1}
        loop={true}
        pagination={{ type: 'fraction' }}
      >
        <SwiperSlide className="swiper-slide">
          <img
            className="slider-images"
            alt="elepant"
            src="https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="slider-images"
            alt="shrkSmith"
            src="https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="slider-images"
            alt="shrek"
            src="https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="slider-images"
            alt="rock"
            src="https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default AboutPageSlider
