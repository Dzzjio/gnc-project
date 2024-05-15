import { useState } from 'react'
import { StyledContactForm } from './styled'
import ReCAPTCHA from 'react-google-recaptcha'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTranslation } from 'react-i18next'

export const ContactForm = () => {
  const [t] = useTranslation('global')

  // State to store form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  })

  const [focused, setFocused] = useState({ name: false, message: false, email: false })

  // Function to handle input focus
  const handleFocus = (field: string) => {
    setFocused({ ...focused, [field]: true })
  }

  // Function to handle input blur
  // const handleBlur = (field: any) => {
  //     setFocused({ ...focused, [field]: false });
  // };

  // Function to handle input changes
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // You can perform form validation or submit data here
    console.log(formData)
  }

  const [capVal, setCapVal] = useState(null)

  const submit = () => {
    let hasError = false

    // Check for empty fields
    const newErrorState = {
      name: formData.name.length < 1,
      email: formData.email.length < 1,
      message: formData.message.length < 1,
    }

    setError(newErrorState)

    // Check if any required field is empty
    if (Object.values(newErrorState).some((field) => field)) {
      toast.error('Please fill all required fields')
      hasError = true
    }

    // Check email format only if all required fields are filled
    if (!hasError) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(formData.email)) {
        toast.error('Please enter a valid email address')
        hasError = true
      }
    }

    if (!hasError) {
      toast.success('Form submitted successfully')
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    }
  }

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <ToastContainer />
      <label>
        <input
          className={error.name ? 'has-error' : ''}
          placeholder={formData.name.length > 0 ? '' : t('Contact.name')}
          name="name"
          onFocus={() => handleFocus('name')}
          onChange={handleChange}
          value={formData.name}
        />
        {formData.name.length > 0 && <span style={{ top: '-15px' }}>{t('Contact.name')}</span>}
      </label>

      <label>
        <input
          className={error.email ? 'has-error' : ''}
          placeholder={formData.email.length > 0 ? '' : t('Contact.email')}
          name="email"
          onFocus={() => handleFocus('email')}
          onChange={handleChange}
          value={formData.email}
        />
        {formData.email.length > 0 && <span style={{ top: '-15px' }}>{t('Contact.email')}</span>}
      </label>

      <label>
        <textarea
          className={error.message ? 'has-error' : ''}
          placeholder={formData.message.length > 0 ? '' : t('Contact.message')}
          name="message"
          onFocus={() => handleFocus('message')}
          onChange={handleChange}
          value={formData.message}
        />
        {formData.message.length > 0 && (
          <span style={{ top: '-15px' }}>{t('Contact.message')}</span>
        )}
      </label>
      <div style={{ margin: '10px 0' }}>
        <ReCAPTCHA
          sitekey="6LfIMNUpAAAAACmod972tlr4v83adlyv78mM5eYt"
          onChange={(val: any) => setCapVal(val)}
        />
      </div>
      <button disabled={!capVal} type="submit" onClick={() => submit()}>
        {t('Contact.send')}
      </button>
    </StyledContactForm>
  )
}

export default ContactForm
