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
            <h2>{t('About.lorem')}</h2>
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
            <h2>{t('About.faq')}</h2>
            <Accordion title={t('About.question1')} content={t('About.answer1')} />
            <Accordion title={t('About.question2')} content={t('About.answer2')} />
            <Accordion title={t('About.question3')} content={t('About.answer3')} />
            <Accordion title={t('About.question4')} content={t('About.answer4')} />
            <Accordion title={t('About.question5')} content={t('About.answer5')} />
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
