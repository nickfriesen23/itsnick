import { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import DynamicText from './DynamicText'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: var(--spacing-lg);
  background: linear-gradient(135deg, var(--dark-blue) 0%, var(--dark-blue-lighter) 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
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

const HeroContent = styled.div`
  max-width: 1000px;
  width: 100%;
  position: relative;
  z-index: 1;
  padding: 2rem;
  padding-top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    padding-top: 45vh;
  }
`

const TitleGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`

const MainTitle = styled.h1`
  margin-bottom: 0;
  transform: translateX(-2rem);
  
  @media (max-width: 768px) {
    transform: translateX(-1rem);
    font-size: 3rem;
  }
`

const Accent = styled.span`
  color: var(--mustard);
`

const NavCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 1000px;
  margin: 3rem auto;
  padding: 0 1rem;
  margin-top: 45vh;
  
  @media (max-width: 768px) {
    margin-top: 35vh;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 0 0.75rem;
  }
`

const NavCard = styled(motion.a)`
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  padding: 1.5rem;
  border-radius: 15px;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  border: 2px solid transparent;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(255, 200, 87, 0.1) 100%);
    opacity: 0;
    transition: var(--transition);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.9rem;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Hero = () => {
  // Add intersection observer for section animations
  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)
    
    sections.forEach(section => {
      section.style.opacity = '0'
      section.style.transform = 'translateY(20px)'
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
      sectionObserver.observe(section)
    })
    
    return () => {
      sections.forEach(section => {
        sectionObserver.unobserve(section)
      })
    }
  }, [])
  
  // Add smooth scroll behavior for navigation links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })
  }, [])
  
  return (
    <HeroSection id="hero">
      <HeroContent>
        <TitleGroup>
          <MainTitle>
            It's Nick<Accent>.</Accent>
          </MainTitle>
          <DynamicText />
        </TitleGroup>
        
        <NavCards>
          <NavCard 
            href="#photography"
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              borderColor: 'var(--mustard)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            Photography
          </NavCard>
          <NavCard 
            href="#ai"
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              borderColor: 'var(--mustard)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            AI & Image Models
          </NavCard>
          <NavCard 
            href="#machine-learning"
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              borderColor: 'var(--mustard)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            AI + Machine Learning
          </NavCard>
          <NavCard 
            href="#music"
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              borderColor: 'var(--mustard)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            Music
          </NavCard>
          <NavCard 
            href="#cooking"
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              borderColor: 'var(--mustard)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            Cooking
          </NavCard>
          <NavCard 
            href="#builds"
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              borderColor: 'var(--mustard)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            Builds
          </NavCard>
          <NavCard 
            href="#community"
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              borderColor: 'var(--mustard)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            Community
          </NavCard>
          <NavCard 
            href="#content"
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              borderColor: 'var(--mustard)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            Content
          </NavCard>
        </NavCards>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero