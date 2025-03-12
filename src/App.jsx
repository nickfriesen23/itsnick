import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ConsultingPage from './pages/ConsultingPage'
import EventsPage from './pages/EventsPage'
import ContactPage from './pages/ContactPage'
import AppPage from './pages/AppPage'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="consulting" element={<ConsultingPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="/app/:appId" element={<AppPage />} />
    </Routes>
  )
}

export default App