import styled from 'styled-components'
import { motion } from 'framer-motion'

const AboutContainer = styled.div`
  padding: 120px var(--spacing-lg) var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 100px var(--spacing-md) var(--spacing-lg);
  }
`

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`

const AboutTitle = styled.h1`
  margin-bottom: var(--spacing-md);
`

const AboutSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-gray);
  max-width: 800px;
  margin: 0 auto;
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const AboutImage = styled.div`
  border-radius: 12px;
  overflow: hidden;
  height: 500px;
  background-color: var(--card-bg);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`

const AboutSection = styled.div`
  margin-bottom: var(--spacing-lg);
`

const AboutSectionTitle = styled.h2`
  margin-bottom: var(--spacing-sm);
  color: var(--mustard);
`

const AboutPage = () => {
  return (
    <AboutContainer>
      <AboutHeader>
        <AboutTitle>About Me</AboutTitle>
        <AboutSubtitle>
          A photographer turned AI enthusiast with a love for music, woodworking, and faith.
        </AboutSubtitle>
      </AboutHeader>
      
      <AboutContent>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AboutImage>
            {/* Placeholder for profile image */}
            <img src="https://via.placeholder.com/600x800" alt="Nick Friesen" />
          </AboutImage>
        </motion.div>
        
        <AboutText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AboutSection>
              <AboutSectionTitle>My Journey</AboutSectionTitle>
              <p>
                Hey, I'm Nick—a photographer turned AI enthusiast with a love for music, woodworking, and faith. 
                I founded The Match Artist to help guys shine online, and now I'm exploring AI, autonomous coding, and more.
              </p>
              <p>
                My journey began with photography, capturing authentic moments and helping people present their best selves. 
                This evolved into The Match Artist, where I've helped countless individuals improve their online dating presence.
              </p>
            </AboutSection>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AboutSection>
              <AboutSectionTitle>AI & Technology</AboutSectionTitle>
              <p>
                In recent years, I've become fascinated with artificial intelligence and its potential to transform creative work. 
                I've been fine-tuning image models, exploring autonomous coding, and finding ways to integrate AI into my photography workflow.
              </p>
              <p>
                This intersection of creativity and technology is where I thrive, constantly learning and pushing boundaries.
              </p>
            </AboutSection>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <AboutSection>
              <AboutSectionTitle>Beyond Work</AboutSectionTitle>
              <p>
                When I'm not behind the camera or coding, you'll find me playing piano, building custom furniture, 
                or experimenting with new BBQ recipes. I believe in creating with your hands and finding joy in the process.
              </p>
              <p>
                My faith is also an important part of who I am, guiding my approach to work and relationships.
              </p>
            </AboutSection>
          </motion.div>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  )
}

export default AboutPage