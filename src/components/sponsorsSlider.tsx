import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css'
import { A11y, Navigation, Scrollbar } from 'swiper/modules'

const SponsorsSlider = () => {

    const sponsors = [
        {
            name : 'sp1',
            // image: url()
        },
        {
            name : 'sp2',
            // image: url()
        },
        {
            name : 'sp3',
            // image: url()
        },        {
            name : 'sp4',
            // image: url()
        },
        {
            name : 'sp5',
            // image: url()
        },
        {
            name : 'sp6',
            // image: url()
        },        {
            name : 'sp7',
            // image: url()
        },
        {
            name : 'sp8',
            // image: url()
        },
        {
            name : 'sp9',
            // image: url()
        }
    ]

    return (
        <div style={{ width: '80vw', margin: '0' }}>
          <Swiper
            className="swiper"
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={180}
            navigation
            loop={true}
            // autoplay={true}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              }
            }}
          >
    
        {sponsors.map((sponsor, index) => (
          <SwiperSlide key={index} className="swiper-slide-sponsors">
            <p>{sponsor.name}</p>
            {/* <img src={sponsor.image} alt={sponsor.name} /> */}
          </SwiperSlide>
        ))}
     
          </Swiper>
        </div>
      )

}

export default SponsorsSlider
