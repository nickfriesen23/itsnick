import { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Hero from '../components/hero/Hero'

const Section = styled.section`
  padding: var(--spacing-xl) var(--spacing-lg);
  position: relative;
  text-align: center;
  
  & > * {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  
  &:nth-child(even) {
    background: linear-gradient(to bottom right, 
      var(--dark-blue-alt) 0%,
      var(--dark-blue-lighter) 100%
    );
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to right,
        rgba(255, 255, 255, 0.02) 0%,
        transparent 50%,
        rgba(255, 255, 255, 0.02) 100%
      );
    }
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      height: 1px;
      background: linear-gradient(90deg, 
        transparent 0%,
        rgba(255, 200, 87, 0.08) 50%,
        transparent 100%
      );
    }
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg) var(--spacing-sm);
  }
`

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: var(--text-gray);
  margin-bottom: var(--spacing-lg);
  max-width: 800px;
  line-height: 1.8;
  margin-left: auto;
  margin-right: auto;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: var(--spacing-md);
  border-radius: 12px;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`

const Feature = styled(motion.div)`
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-align: center;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`

const ContentItem = styled(motion.div)`
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-align: center;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const HomePage = () => {
  // Animation variants for cards and features
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderColor: "rgba(255, 200, 87, 0.3)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    }
  }
  
  return (
    <>
      <Hero />
      
      {/* Photography Section */}
      <Section id="photography" className="section">
        <h2>Photography</h2>
        <SectionDescription>
          I specialize in photography that captures personality, connection, and authenticity. 
          Whether it's professional headshots, online dating photos, or couples sessions, 
          I make sure every shot reflects you at your best.
        </SectionDescription>
        <Cards>
          <Card 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Headshots</h3>
            <p>Professional business portraits</p>
          </Card>
          <Card 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Dating</h3>
            <p>Online dating photography, featuring The Match Artist</p>
          </Card>
          <Card 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Couples</h3>
            <p>Wedding & couples photography, featuring The Wedding Artists</p>
          </Card>
        </Cards>
      </Section>
      
      {/* AI Section */}
      <Section id="ai" className="section">
        <h2>AI & Image Models</h2>
        <SectionDescription>
          I'm obsessive about AI and machine learning. I fine-tune image models to create 
          the most accurate, lifelike results possible. Whether it's for research, business 
          applications, or creative projects, I'm pushing the boundaries of what's possible 
          in AI-generated images.
        </SectionDescription>
        <Features>
          <Feature 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            LoRA training & model fine-tuning
          </Feature>
          <Feature 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            AI-powered headshots
          </Feature>
          <Feature 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            Automated photography workflows
          </Feature>
        </Features>
      </Section>
      
      {/* ML Bootcamp Section */}
      <Section id="machine-learning" className="section">
        <h2>AI + Machine Learning</h2>
        <SectionDescription>
          Bootcamp with local experts to help you use AI in your business, create and inspire your art, 
          and help you be more informed to future proof yourself.
        </SectionDescription>
      </Section>
      
      {/* Music Section */}
      <Section id="music" className="section">
        <h2>Music</h2>
        <SectionDescription>
          Music is another passion of mine, spanning multiple instruments and genres. From classical piano 
          to electronic dance music production, I love exploring different musical expressions.
        </SectionDescription>
        <Cards>
          <Card 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Piano</h3>
            <p>Classical and contemporary piano performances</p>
          </Card>
          <Card 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Guitar</h3>
            <p>Acoustic and electric guitar compositions</p>
          </Card>
          <Card 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Dance Music</h3>
            <p>Electronic music production and mixing</p>
          </Card>
        </Cards>
      </Section>
      
      {/* Cooking Section */}
      <Section id="cooking" className="section">
        <h2>Food, Science, and Fire</h2>
        <SectionDescription>
          Food isn't just fuel—it's an obsession. I experiment with baking, BBQ, 
          smoking meats, and the science behind great cooking. From slow-smoked 
          brisket to homemade bread, I love mastering new techniques.
        </SectionDescription>
        <ContentGrid>
          <ContentItem 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            Smoker builds
          </ContentItem>
          <ContentItem 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            Favorite recipes
          </ContentItem>
          <ContentItem 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            Cooking experiments
          </ContentItem>
        </ContentGrid>
      </Section>
      
      {/* Builds Section */}
      <Section id="builds" className="section">
        <h2>Things I Build</h2>
        <SectionDescription>
          From welding smokers to crafting furniture, I love building things with my hands. 
          My projects blend functionality with craftsmanship—whether it's for cooking, 
          home projects, or just for fun.
        </SectionDescription>
        <ContentGrid>
          <ContentItem 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            Custom smokers
          </ContentItem>
          <ContentItem 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            Woodworking projects
          </ContentItem>
          <ContentItem 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            Welding experiments
          </ContentItem>
        </ContentGrid>
      </Section>
      
      {/* Community Section */}
      <Section id="community" className="section">
        <h2>Join the Community</h2>
        <SectionDescription>
          I host monthly community events, potlucks, and content days where people can 
          network, share knowledge, and collaborate. If you're into AI, photography, 
          or just good food, there's always something happening.
        </SectionDescription>
        <div id="events-container">
          {/* Events will be dynamically populated */}
        </div>
      </Section>
      
      {/* Content Creation Section */}
      <Section id="content" className="section">
        <h2>High-Quality Content for Founders & Creators</h2>
        <SectionDescription>
          I run content creation days for business owners and entrepreneurs to get 
          high-quality video content, professional headshots, and social media 
          material—all in one session.
        </SectionDescription>
        <Features>
          <Feature 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            Filming & interviews
          </Feature>
          <Feature 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            Professional photography
          </Feature>
          <Feature 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            AI-generated headshots
          </Feature>
        </Features>
      </Section>
    </>
  )
}

export default HomePage