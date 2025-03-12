import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ scrolled }) => 
    scrolled 
      ? 'rgba(26, 31, 46, 0.95)' 
      : 'transparent'
  };
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(10px)' : 'none'
  };
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-light);
  text-decoration: none;
  display: flex;
  align-items: center;
  
  span {
    color: var(--mustard);
  }
`

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--mustard);
    transition: width 0.3s ease;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
  
  &.active {
    color: var(--mustard);
  }
`

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  background: var(--dark-blue);
  z-index: 1001;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`

const MobileNavLink = styled(Link)`
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.25rem;
  
  &.active {
    color: var(--mustard);
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }
  
  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo to="/">
        It's Nick<span>.</span>
      </Logo>
      
      <NavLinks>
        <NavLink to="/" className={isActive('/')}>Home</NavLink>
        <NavLink to="/about" className={isActive('/about')}>About</NavLink>
        <NavLink to="/projects" className={isActive('/projects')}>Projects</NavLink>
        <NavLink to="/consulting" className={isActive('/consulting')}>Consulting</NavLink>
        <NavLink to="/events" className={isActive('/events')}>Events</NavLink>
        <NavLink to="/contact" className={isActive('/contact')}>Contact</NavLink>
      </NavLinks>
      
      <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
        <FaBars />
      </MobileMenuButton>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <Overlay 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <CloseButton onClick={() => setMobileMenuOpen(false)}>
                <FaTimes />
              </CloseButton>
              
              <MobileNavLinks>
                <MobileNavLink to="/" className={isActive('/')}>Home</MobileNavLink>
                <MobileNavLink to="/about" className={isActive('/about')}>About</MobileNavLink>
                <MobileNavLink to="/projects" className={isActive('/projects')}>Projects</MobileNavLink>
                <MobileNavLink to="/consulting" className={isActive('/consulting')}>Consulting</MobileNavLink>
                <MobileNavLink to="/events" className={isActive('/events')}>Events</MobileNavLink>
                <MobileNavLink to="/contact" className={isActive('/contact')}>Contact</MobileNavLink>
              </MobileNavLinks>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </HeaderContainer>
  )
}

export default Header