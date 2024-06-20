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
                    <ul className="objectives-list">
                        <li className="objective-item">
                            <span>{t('Home.objectivesOne')}</span>
                        </li>
                        <hr className="custom-hr" />
                        <li className="objective-item">
                            <span>{t('Home.objectivesTwo')}</span>
                        </li>
                        <hr className="custom-hr" />
                        <li className="objective-item">
                            <span>{t('Home.objectivesThree')}</span>
                        </li>
                        <hr className="custom-hr" />
                        <li className="objective-item">
                            <span>{t('Home.objectivesFour')}</span>
                        </li>
                        <hr className="custom-hr" />
                        <li className="objective-item">
                            <span>{t('Home.objectivesFive')}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='home-section-2-animation' >
                <div data-aos='fade-up'>
                <h2>{t('Home.mainActivities')}</h2>
                <ul className="objectives-list">
                        <li className="objective-item">
                            <span>{t('Home.activityOne')}</span>
                        </li>
                        <hr className="custom-hr" />
                        <li className="objective-item">
                            <span>{t('Home.activityTwo')}</span>
                        </li>
                        <hr className="custom-hr" />
                        <li className="objective-item">
                            <span>{t('Home.activityThree')}</span>
                        </li>
                        <hr className="custom-hr" />
                        <li className="objective-item">
                            <span>{t('Home.activityFour')}</span>
                        </li>
                        <hr className="custom-hr" />
                        <li className="objective-item">
                            <span>{t('Home.activityFive')}</span>
                        </li>
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