import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactPageContainer, ContactPageLeft } from './styled'
import { faEnvelope, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import ContactForm from '../../components/ContactForm'

// es page wavshalo da modalad gavitano

const ContactPage = () => {
  const [t] = useTranslation('global')

  return (
    <>
      <Helmet>
        <title>GNC - Contact</title>
        <meta name="description" content="Contact Us GNC." />
        <link rel="cannonical" href="/contact" />
      </Helmet>
      <ContactPageContainer>
        <ContactPageLeft>
          <h2>
            {t('Contact.getInTouch')}{' '}
            <span>
              <FontAwesomeIcon icon={faMessage} />
            </span>{' '}
          </h2>
          <p>{t('Contact.fillForm')}</p>
          <div className="contact-us-box-container">
            <div className="contact-us-box">
              <span className="contact-us-logo">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <p>{t('Contact.sendEmail')}</p>
              <span>
                <Link to="">Info@gnc.ge</Link>
              </span>
            </div>
            <div className="contact-us-box">
              <span className="contact-us-logo">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <p>{t('Contact.ContactUsDirectly')}</p>
              <span>(+995) 597728871</span>
            </div>
            <div className="contact-us-box">
              <span className="contact-us-logo">
                <img
                  src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-best-facebook-logo-icons-gif-transparent-png-images-9.png"
                  alt="fb"
                />
              </span>
              <p>{t('Contact.FindUsOnFacebook')}</p>
              <span>
                <Link to="www.facebook.com">facebook</Link>
              </span>
            </div>
          </div>
        </ContactPageLeft>
        <ContactForm />
      </ContactPageContainer>
    </>
  )
}

export default ContactPage
