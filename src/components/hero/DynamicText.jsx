import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const DynamicTextContainer = styled.div`
  padding-top: 1rem;
  height: 4rem;
  transform: translateX(2rem);
  
  @media (max-width: 768px) {
    transform: translateX(1rem);
    padding-top: 0;
  }
`

const DynamicTextWrapper = styled.div`
  font-size: 2rem;
  color: var(--text-gray);
  height: 4rem;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const TextWrapper = styled.div`
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;
  gap: 1rem;
`

const StaticText = styled.span`
  color: var(--text-gray);
`

const ChangingText = styled(motion.span)`
  color: var(--mustard);
  display: inline-block;
  text-align: left;
  min-width: 250px;
  margin-left: 1rem;
  
  @media (max-width: 768px) {
    min-width: 200px;
  }
`

const DynamicText = () => {
  // Array of interests to cycle through
  const interests = [
    'Photography.',
    'AI.',
    'Machine Learning.',
    'Piano.',
    'Guitar.',
    'Dance Music.',
    'Coffee.',
    'GPUs.',
    'interesting people.',
    'smoking meat.',
    'Welding.',
    'Chopin.',
    'Sparkling Water.',
    'Jesus.',
    'facial expressions.',
    'the blues.',
    'warmly lit spaces.'
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  
  // Function to get random index different from current one
  const getRandomIndex = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * interests.length)
    } while (newIndex === currentIndex && interests.length > 1)
    return newIndex
  }
  
  // Update text with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentIndex(getRandomIndex())
        setIsVisible(true)
      }, 250) // Half of the interval for smooth transition
    }, 3000)
    
    return () => clearInterval(interval)
  }, [currentIndex])
  
  return (
    <DynamicTextContainer>
      <DynamicTextWrapper>
        <TextWrapper>
          <StaticText>...and I'm into</StaticText>
          <AnimatePresence mode="wait">
            <ChangingText
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {interests[currentIndex]}
            </ChangingText>
          </AnimatePresence>
        </TextWrapper>
      </DynamicTextWrapper>
    </DynamicTextContainer>
  )
}

export default DynamicText