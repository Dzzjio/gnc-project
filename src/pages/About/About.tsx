import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Accordion from '../../components/Accordion'
import SponsorsSlider from '../../components/sponsorsSlider'

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const [t] = useTranslation('global')

  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About GNC." />
        <link rel="cannonical" href="/about" />
      </Helmet>
      <div className="about-page-container">
        <section className="about-section-1">
          <img
            alt="about-page-img"
            src="https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png"
            data-aos="fade-down"
          />
          <div data-aos="fade-up">
            <h1>{t('About.lorem')}</h1>
            <p>{t('About.lorem')}</p>
          </div>
        </section>
        <section className="about-section-2">
          <img
            alt="woods"
            src="https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png"
            data-aos="fade-up"
          />
        </section>
        <section className="about-section-3">
          <div className="accordion" data-aos="fade-down">
            <Accordion title="Section 1" content={t('About.answer1')} />
            <Accordion title="Section 2" content={t('About.answer2')} />
            <Accordion title="Section 3" content={t('About.answer3')} />
            <Accordion title="Section 4" content={t('About.answer4')} />
          </div>
          <div className="faq" data-aos="fade-up">
            <h2>{t('About.faq')}</h2>
            <p>{t('About.lorem')}</p>
          </div>
        </section>
        <div className="sponsors" data-aos="fade-up">
          <SponsorsSlider />  
        </div>
      </div>
    </>
  )
}

export default AboutPage
