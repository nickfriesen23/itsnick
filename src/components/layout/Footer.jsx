import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.05));
  padding: var(--spacing-xl) var(--spacing-md);
  margin-top: var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -40%;
    left: 50%;
    width: 80vh;
    height: 80vh;
    background: radial-gradient(circle at center, rgba(255, 140, 0, 0.7) 0%, rgba(255, 140, 0, 0.2) 25%, transparent 50%);
    filter: blur(35px);
    transform-origin: center;
    animation: glowPulse 3s ease-in-out infinite;
    pointer-events: none;
    mix-blend-mode: color-dodge;
  }
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const FooterLeft = styled.div`
  flex: 1;
  min-width: 300px;
`

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
`

const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const FooterLink = styled(Link)`
  color: var(--text-gray);
  text-decoration: none;
  transition: var(--transition);
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid transparent;
  
  &:hover {
    color: var(--mustard);
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
    border-color: rgba(255, 200, 87, 0.3);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const SocialLink = styled.a`
  color: var(--text-gray);
  text-decoration: none;
  transition: var(--transition);
  padding: 0.8rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--mustard);
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
    border-color: rgba(255, 200, 87, 0.3);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`

const CtaButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--mustard);
  color: var(--dark-blue);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: var(--transition);
  border: 2px solid transparent;
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 200, 87, 0.3);
    background-color: transparent;
    border-color: var(--mustard);
    color: var(--mustard);
  }
`

const Copyright = styled.p`
  margin-top: var(--spacing-lg);
  color: var(--text-gray);
  font-size: 0.875rem;
  text-align: center;
`

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLeft>
          <FooterTitle>It's Nick. A little bit of everything.</FooterTitle>
          <FooterNav>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/consulting">Consulting</FooterLink>
            <FooterLink to="/events">Events</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterNav>
        </FooterLeft>
        
        <FooterRight>
          <CtaButton to="/contact">Book a Call</CtaButton>
          <SocialLinks>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </SocialLink>
            <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </SocialLink>
          </SocialLinks>
        </FooterRight>
      </FooterContent>
      
      <Copyright>
        &copy; {currentYear} Nick Friesen. All rights reserved.
      </Copyright>
    </FooterContainer>
  )
}

export default Footer