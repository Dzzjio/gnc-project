import { Link } from 'react-router-dom'
// import HomeSectionTwo from '../../components/partials/homeSectionTwo'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Button from '../../components/UI/Button'
// import jungle from '../../assets/Images/jungle.jpg'
import bgBattery from '../../assets/Images/bg-sun-battery.webp'
import HomeSectionTwo from './homeSection2'

const HomePage = () => {
  const [t] = useTranslation('global')

  return (
    <>
      <Helmet>
        <title>GNC - Geo-Natural Consulting</title>
        <meta name="description" content="Home Page GNC." />
        <link rel="cannonical" href="/" />
      </Helmet>
      <main id="home-page-container">
        <section className="home-section-1">
          <img className="home-first-image" src={bgBattery} alt="jung" />
          <div>
            {<h1>{t('Home.title')}</h1>}
            <Link to="projects">
              <Button text={t('Home.projects')} />
            </Link>
          </div>
        </section>
        <HomeSectionTwo />
      </main>
    </>
  )
}

export default HomePage
