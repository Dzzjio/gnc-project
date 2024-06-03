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
                        <li>
                            <span className='star'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="144"/></svg></span>
                            <span>{t('Home.objectivesOne')}</span>
                        </li>
                        <li>
                            <span className='star'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="144"/></svg></span>
                            <span>{t('Home.objectivesTwo')}</span>
                        </li>
                        <li>
                            <span className='star'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="144"/></svg></span>
                            <span>{t('Home.objectivesThree')}</span>
                        </li>
                        <li>
                            <span className='star'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="144"/></svg></span>
                            <span>{t('Home.objectivesFour')}</span>
                        </li>
                        <li>
                            <span className='star'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="144"/></svg></span>
                            <span>{t('Home.objectivesFive')}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='home-section-2-animation' >
                <div data-aos='fade-up'>
                <h2>{t('Home.mainActivities')}</h2>
                <ul>
                        <li>
                            <span className='star'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="144"/></svg></span>
                            <span>{t('Home.activityOne')}</span>
                        </li>
                        <li>
                            <span className='star'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="144"/></svg></span>
                            <span>{t('Home.activityTwo')}</span>
                        </li>
                        <li>
                            <span className='star'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="144"/></svg></span>
                            <span>{t('Home.activityThree')}</span>
                        </li>
                        <li>
                            <span className='star'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="144"/></svg></span>
                            <span>{t('Home.activityFour')}</span>
                        </li>
                        <li>
                            <span className='star'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="144"/></svg></span>
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