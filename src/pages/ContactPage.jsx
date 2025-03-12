import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const ContactContainer = styled.div`
  padding: 120px var(--spacing-lg) var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 100px var(--spacing-md) var(--spacing-lg);
  }
`

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`

const ContactTitle = styled.h1`
  margin-bottom: var(--spacing-md);
`

const ContactSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-gray);
  max-width: 800px;
  margin: 0 auto;
`

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`

const ContactInfoTitle = styled.h2`
  margin-bottom: var(--spacing-md);
`

const ContactInfoText = styled.p`
  color: var(--text-gray);
  margin-bottom: var(--spacing-md);
  line-height: 1.8;
`

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mustard);
`

const ContactText = styled.div`
  a {
    color: var(--text-light);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: var(--mustard);
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: var(--spacing-md);
`

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  transition: var(--transition);
  
  &:hover {
    background: var(--mustard);
    color: var(--dark-blue);
    transform: translateY(-3px);
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  background: var(--card-bg);
  padding: var(--spacing-lg);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FormLabel = styled.label`
  font-weight: 500;
`

const FormInput = styled.input`
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-light);
  font-family: inherit;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--mustard);
    box-shadow: 0 0 0 2px rgba(255, 200, 87, 0.2);
  }
  
  &::placeholder {
    color: var(--text-gray);
  }
`

const FormTextarea = styled.textarea`
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-light);
  font-family: inherit;
  resize: vertical;
  min-height: 150px;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--mustard);
    box-shadow: 0 0 0 2px rgba(255, 200, 87, 0.2);
  }
  
  &::placeholder {
    color: var(--text-gray);
  }
`

const FormError = styled.span`
  color: #ff6b6b;
  font-size: 0.875rem;
`

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--mustard);
  color: var(--dark-blue);
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 200, 87, 0.3);
  }
  
  &:disabled {
    background-color: rgba(255, 200, 87, 0.5);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

const FormSuccess = styled(motion.div)`
  background: rgba(46, 213, 115, 0.1);
  border: 1px solid rgba(46, 213, 115, 0.3);
  padding: 1rem;
  border-radius: 8px;
  color: #2ed573;
  margin-bottom: var(--spacing-md);
`

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form data:', data)
    
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false)
    }, 5000)
  }
  
  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>Get in Touch</ContactTitle>
        <ContactSubtitle>
          Have a question or want to work together? Reach out and let's chat.
        </ContactSubtitle>
      </ContactHeader>
      
      <ContactContent>
        <ContactInfo>
          <div>
            <ContactInfoTitle>Let's Connect</ContactInfoTitle>
            <ContactInfoText>
              Whether you're interested in consulting, have a project idea, or just want to say hello,
              I'd love to hear from you. Fill out the form or reach out directly through any of the channels below.
            </ContactInfoText>
          </div>
          
          <ContactDetails>
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <a href="mailto:hello@itsnick.co">hello@itsnick.co</a>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactText>
                <a href="tel:+1234567890">(123) 456-7890</a>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>
                <p>Dallas, Texas</p>
              </ContactText>
            </ContactItem>
          </ContactDetails>
          
          <div>
            <h3>Follow Me</h3>
            <SocialLinks>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </div>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit(onSubmit)}>
          {isSuccess && (
            <FormSuccess
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Your message has been sent successfully! I'll get back to you soon.
            </FormSuccess>
          )}
          
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput 
              id="name"
              type="text"
              placeholder="Your name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput 
              id="email"
              type="email"
              placeholder="Your email address"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput 
              id="subject"
              type="text"
              placeholder="What's this about?"
              {...register('subject', { required: 'Subject is required' })}
            />
            {errors.subject && <FormError>{errors.subject.message}</FormError>}
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea 
              id="message"
              placeholder="Your message"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <FormError>{errors.message.message}</FormError>}
          </FormGroup>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  )
}

export default ContactPage