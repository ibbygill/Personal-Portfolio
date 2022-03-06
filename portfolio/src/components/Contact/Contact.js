import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import {
  Section,
  SectionDivider,
  SectionSubTitle,
} from '../../styles/GlobalComponents';

import {
  ContInfo,
  ContactForm,
  FormBox,
  InputBox,
  ContContainer,
  InfoContainer,
  InfoItemContainer,
  InfoItem,
  Alert,
} from './ContactStyles';

import { AnimatePresence } from 'framer-motion';
import SlideUpWhenVisible from '../../utils/SlideUpWhenVisible';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import BarLoader from 'react-spinners/BarLoader';
import { TiTick } from 'react-icons/ti';
import { MdLocationOn } from 'react-icons/md';
import { IoIosClose } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

const Contact = () => {
  const [contactSuccess, setContactSuccess] = useState('');
  const [contactError, setContactError] = useState('');
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID,
      )
      .then(
        (result) => {
          setLoading(false);
          setContactSuccess(`Message Sent, I will get back to you shortly`);
          setTimeout(() => {
            setContactSuccess('');
          }, 5000);
        },
        (error) => {
          setContactError(`An error occurred, Please try again`);
          setTimeout(() => {
            setContactError('');
          }, 5000);
        },
      );
    formRef.current.reset();
    setInput('');
  };

  return (
    <Section contact id="contact">
      <SectionDivider />
      <SectionSubTitle main>Contact</SectionSubTitle>
      <SlideUpWhenVisible>
        <ContContainer>
          <ContInfo>
            <img
              src="/images/"
              alt="contact-photo"
              loading="lazy"
            />
            <InfoContainer>
              <h2>Contact Info</h2>
              <InfoItemContainer>
                <InfoItem>
                  <AiOutlineMail />
                  <a
                    href="mailto:ibjyot17@gmail.com"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <h5>ibjyotgill@ibjyot.dev</h5>
                  </a>
                </InfoItem>
                <InfoItem>
                  <FiPhoneCall />
                  <a
                    href="tel:+16046217937"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    {' '}
                    <h5>604-621-7937</h5>
                  </a>
                </InfoItem>
                <InfoItem>
                  <IconContext.Provider value={{ color: 'white' }}>
                    <MdLocationOn color="white" />
                  </IconContext.Provider>
                  <a
                    href="https://goo.gl/maps/XT8it3qpkxxPgW976"
                    target="_blank"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <h5>Abbotsford, British Columbia</h5>
                  </a>
                </InfoItem>
              </InfoItemContainer>
            </InfoContainer>
          </ContInfo>
          <ContactForm ref={formRef} onSubmit={handleSubmit}>
            <h2>Get In Touch</h2>
            <FormBox>
              <InputBox className="w50">
                <input type="text" name="firstname" required />
                <span>First Name</span>
              </InputBox>
              <InputBox className="w50">
                <input type="text" name="lastname" required />
                <span>Last Name</span>
              </InputBox>
              <InputBox className="w50 ">
                <input
                  value={input}
                  onInput={(e) => setInput(e.target.value)}
                  type="email"
                  name="email"
                  required
                />
                <span className={input && 'email-textarea'}>Email Address</span>
              </InputBox>
              <InputBox className="w50">
                <input type="number" name="phone" required />
                <span>Mobile Number</span>
              </InputBox>
              <InputBox className="w100">
                <textarea name="message" required />
                <span>Write your message here...</span>
              </InputBox>

              <InputBox className="w100">
                <input type="submit" value="Send" className="submitButton" />
              </InputBox>
              <BarLoader loading={loading} />
            </FormBox>
            <AnimatePresence>
              {(contactSuccess || contactError) && (
                <Alert
                  className={contactSuccess ? 'success-msg' : 'error-msg'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {contactError ? (
                    <>
                      <IoIosClose /> {contactError}
                    </>
                  ) : (
                    <>
                      <TiTick /> {contactSuccess}
                    </>
                  )}
                </Alert>
              )}
            </AnimatePresence>
          </ContactForm>
        </ContContainer>
      </SlideUpWhenVisible>
    </Section>
  );
};

export default Contact;