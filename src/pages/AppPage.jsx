import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const AppHeader = styled.header`
  background: var(--dark-blue);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    color: var(--mustard);
  }
`

const AppTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    color: var(--mustard);
  }
`

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const AppFrame = styled.iframe`
  flex: 1;
  border: none;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px);
`

const AppNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl);
  text-align: center;
  height: calc(100vh - 60px);
`

const AppNotFoundTitle = styled.h2`
  margin-bottom: var(--spacing-md);
`

const AppNotFoundText = styled.p`
  color: var(--text-gray);
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
`

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--mustard);
  color: var(--dark-blue);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 200, 87, 0.3);
  }
`

// Map of available apps
const apps = {
  bookforge: {
    title: 'BookForge',
    description: 'Generate personalized books on any topic',
    url: 'https://bookforge.itsnick.co',
    externalUrl: 'https://bookforge.itsnick.co'
  },
  // Add more apps here as they become available
}

const AppPage = () => {
  const { appId } = useParams()
  const [app, setApp] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Find the app by ID
    const foundApp = apps[appId]
    setApp(foundApp)
    setLoading(false)
  }, [appId])
  
  if (loading) {
    return <div>Loading...</div>
  }
  
  if (!app) {
    return (
      <AppContainer>
        <AppHeader>
          <BackLink to="/">
            <FaArrowLeft /> Back to itsnick.co
          </BackLink>
        </AppHeader>
        <AppNotFound>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AppNotFoundTitle>App Not Found</AppNotFoundTitle>
            <AppNotFoundText>
              The application you're looking for doesn't exist or is not available.
              Please check the URL and try again, or return to the homepage.
            </AppNotFoundText>
            <HomeButton to="/">Return to Homepage</HomeButton>
          </motion.div>
        </AppNotFound>
      </AppContainer>
    )
  }
  
  return (
    <AppContainer>
      <AppHeader>
        <BackLink to="/">
          <FaArrowLeft /> Back to itsnick.co
        </BackLink>
        <AppTitle>{app.title}</AppTitle>
        <ExternalLink href={app.externalUrl} target="_blank" rel="noopener noreferrer">
          Open in New Tab <FaExternalLinkAlt />
        </ExternalLink>
      </AppHeader>
      <AppContent>
        <AppFrame 
          src={app.url} 
          title={app.title}
          allow="fullscreen"
        />
      </AppContent>
    </AppContainer>
  )
}

export default AppPage