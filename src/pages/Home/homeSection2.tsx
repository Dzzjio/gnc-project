import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import jungle from '../../assets/Images/jungle.jpg'
import { useTranslation } from 'react-i18next'

const HomeSectionTwo = () => {

    const [t] = useTranslation('global')

    useEffect(() => {
        AOS.init({
            duration: 1000,
            disable: 'mobile',
        })
    }, [])

    return (
        <>
        <section className='home-section-2'>
            <div className='home-section-2-animation' >
                <img className='home-scroll-img-1' alt='home-img-1' src={jungle} data-aos='fade-up'/>
                <div data-aos='fade-down'>
                    <h2>{t('Home.mainObjectives')}</h2>
                    <ul>
                        <li>{t('Home.objectivesOne')}</li>
                        <li>{t('Home.objectivesTwo')}</li>
                        <li>{t('Home.objectivesThree')}</li>
                        <li>{t('Home.objectivesFour')}</li>
                        <li>{t('Home.objectivesFive')}</li>
                    </ul>
                </div>
            </div>
            <div className='home-section-2-animation' >
                <div data-aos='fade-up'>
                <h2>{t('Home.mainActivities')}</h2>
                <ul>
                    <li>{t('Home.activityOne')}</li>
                    <li>{t('Home.activityTwo')}</li>
                    <li>{t('Home.activityThree')}</li>
                    <li>{t('Home.activityFour')}</li>
                    <li>{t('Home.activityFive')}</li>
                </ul>
                </div>
                <img className='home-scroll-img' alt='home-img-2' src={jungle} data-aos='fade-down'/>
            </div>
        </section>
        <section className="home-section-3">
            <img alt="woods-home" src={jungle} data-aos='fade-up'/>
        </section>
        </>
    )
}

export default HomeSectionTwo