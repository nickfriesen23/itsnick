import { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectsContainer = styled.div`
  padding: 120px var(--spacing-lg) var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 100px var(--spacing-md) var(--spacing-lg);
  }
`

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`

const ProjectsTitle = styled.h1`
  margin-bottom: var(--spacing-md);
`

const ProjectsSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-gray);
  max-width: 800px;
  margin: 0 auto;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: var(--spacing-xl);
`

const FilterButton = styled.button`
  background: ${({ active }) => active ? 'var(--mustard)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${({ active }) => active ? 'var(--dark-blue)' : 'var(--text-light)'};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background: ${({ active }) => active ? 'var(--mustard)' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-2px);
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 200, 87, 0.3);
  }
`

const ProjectImage = styled.div`
  height: 220px;
  background-color: #2a2a2a;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`

const ProjectCategory = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--mustard);
  color: var(--dark-blue);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`

const ProjectContent = styled.div`
  padding: var(--spacing-md);
`

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
`

const ProjectDescription = styled.p`
  color: var(--text-gray);
  margin-bottom: 1rem;
`

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`

const ProjectTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
`

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'The Match Artist',
    description: 'Professional dating photography service helping people improve their online dating profiles.',
    image: 'https://via.placeholder.com/600x400',
    category: 'Photography',
    tags: ['Dating', 'Portraits', 'Business']
  },
  {
    id: 2,
    title: 'AI Headshot Generator',
    description: 'Custom AI model for generating professional headshots from user photos.',
    image: 'https://via.placeholder.com/600x400',
    category: 'AI',
    tags: ['Machine Learning', 'Image Generation', 'LoRA']
  },
  {
    id: 3,
    title: 'Custom BBQ Smoker',
    description: 'Hand-built offset smoker designed for optimal heat retention and smoke flow.',
    image: 'https://via.placeholder.com/600x400',
    category: 'Builds',
    tags: ['Welding', 'Cooking', 'Design']
  },
  {
    id: 4,
    title: 'Piano Composition',
    description: 'Original piano composition inspired by classical and contemporary influences.',
    image: 'https://via.placeholder.com/600x400',
    category: 'Music',
    tags: ['Piano', 'Composition', 'Classical']
  },
  {
    id: 5,
    title: 'Content Creation Workshop',
    description: 'Workshop helping entrepreneurs create high-quality content for their businesses.',
    image: 'https://via.placeholder.com/600x400',
    category: 'Content',
    tags: ['Workshop', 'Business', 'Marketing']
  },
  {
    id: 6,
    title: 'AI Model Fine-Tuning Guide',
    description: 'Comprehensive guide on fine-tuning image generation models for specific use cases.',
    image: 'https://via.placeholder.com/600x400',
    category: 'AI',
    tags: ['Tutorial', 'Machine Learning', 'Technical']
  }
]

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All')
  
  const categories = ['All', 'Photography', 'AI', 'Music', 'Builds', 'Content']
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter)
  
  return (
    <ProjectsContainer>
      <ProjectsHeader>
        <ProjectsTitle>My Projects</ProjectsTitle>
        <ProjectsSubtitle>
          A collection of my work across photography, AI, music, and more.
        </ProjectsSubtitle>
      </ProjectsHeader>
      
      <FilterContainer>
        {categories.map(category => (
          <FilterButton 
            key={category}
            active={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>
      
      <ProjectsGrid>
        <AnimatePresence mode="wait">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
                <ProjectCategory>{project.category}</ProjectCategory>
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map(tag => (
                    <ProjectTag key={tag}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectsGrid>
    </ProjectsContainer>
  )
}

export default ProjectsPage