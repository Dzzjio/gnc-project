import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next'

const HomeSectionTwo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: 'mobile',
    })
  }, [])

  const [t] = useTranslation('global')

  return (
    <>
      <section className="home-section-2">
        <div className="home-section-2-animation">
          <img
            className="home-scroll-img-1"
            alt="home-img-1"
            src="https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png"
            data-aos="fade-up"
          />
          <div data-aos="fade-down">
            <h2>{t('Home.lorem')}</h2>
            <p>{t('Home.lorem')}</p>
          </div>
        </div>
        <div className="home-section-2-animation">
          <div data-aos="fade-up">
            <h2>{t('Home.lorem')}</h2>
            <p>{t('Home.lorem')}</p>
          </div>
          <img
            className="home-scroll-img"
            alt="home-img-2"
            src="https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png"
            data-aos="fade-down"
          />
        </div>
      </section>
      <section className="home-section-3">
        <img
          alt="woods-home"
          src="https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png"
          data-aos="fade-up"
        />
      </section>
    </>
  )
}

export default HomeSectionTwo
