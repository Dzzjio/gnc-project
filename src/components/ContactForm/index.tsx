/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import { StyledContactForm } from './styled';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const [t] = useTranslation('global');

  // State to store form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [capVal, setCapVal] = useState(null);
  const form = useRef<HTMLFormElement>(null);

  // Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrorState = {
      name: formData.name.trim().length < 1,
      email: formData.email.trim().length < 1,
      message: formData.message.trim().length < 1,
    };

    setError(newErrorState);

    if (Object.values(newErrorState).some((field) => field)) {
      toast.error('Please fill all required fields');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      toast.error('Please enter a valid email address');
      setError((prev) => ({ ...prev, email: true }));
      return false;
    }

    return true;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current && validateForm()) {
      emailjs.sendForm('service_ve669e9', 'template_2mn8mhp', form.current, 'N9q0jIMksWEhRL1J5')
        .then(() => {
          toast.success('Email sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
          toast.error('Failed to send email.');
          console.error('Email send error:', error.text);
        });
    } else {
      console.error("Form reference is null");
    }
  };

  return (
    <StyledContactForm ref={form} onSubmit={sendEmail}>
      <ToastContainer />
      <label>
        <input
          className={error.name ? 'has-error' : ''}
          placeholder={t('Contact.name')}
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>

      <label>
        <input
          className={error.email ? 'has-error' : ''}
          placeholder={t('Contact.email')}
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </label>

      <label>
        <textarea
          className={error.message ? 'has-error' : ''}
          placeholder={t('Contact.message')}
          name="message"
          onChange={handleChange}
          value={formData.message}
        />
      </label>
      <div style={{ margin: '10px 0' }}>
        <ReCAPTCHA
          sitekey="6LfIMNUpAAAAACmod972tlr4v83adlyv78mM5eYt"
          onChange={(val: any) => setCapVal(val)}
        />
      </div>
      <input
        className='submit-btn'
        disabled={!capVal}
        type="submit"
        value={t('Contact.send')}
      />
    </StyledContactForm>
  );
};

export default ContactForm;
