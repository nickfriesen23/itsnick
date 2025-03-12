import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaCamera, FaRobot, FaMusic, FaUsers } from 'react-icons/fa'

const ConsultingContainer = styled.div`
  padding: 120px var(--spacing-lg) var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 100px var(--spacing-md) var(--spacing-lg);
  }
`

const ConsultingHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`

const ConsultingTitle = styled.h1`
  margin-bottom: var(--spacing-md);
`

const ConsultingSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-gray);
  max-width: 800px;
  margin: 0 auto;
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 12px;
  padding: var(--spacing-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: var(--mustard);
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ServiceTitle = styled.h2`
  margin-bottom: var(--spacing-sm);
`

const ServiceDescription = styled.p`
  color: var(--text-gray);
  margin-bottom: var(--spacing-md);
  flex-grow: 1;
`

const ServiceFeatures = styled.ul`
  list-style-type: none;
  margin-bottom: var(--spacing-md);
`

const ServiceFeature = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: '•';
    color: var(--mustard);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-right: 0.5em;
  }
`

const BookButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--mustard);
  color: var(--dark-blue);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: var(--transition);
  border: 2px solid transparent;
  text-align: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 200, 87, 0.3);
    background-color: transparent;
    border-color: var(--mustard);
    color: var(--mustard);
  }
`

const TestimonialsSection = styled.div`
  margin-top: var(--spacing-xl);
  text-align: center;
`

const TestimonialsTitle = styled.h2`
  margin-bottom: var(--spacing-lg);
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TestimonialCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 12px;
  padding: var(--spacing-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: left;
`

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: var(--spacing-md);
`

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const TestimonialAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const TestimonialInfo = styled.div``

const TestimonialName = styled.h4`
  margin-bottom: 0.25rem;
`

const TestimonialRole = styled.p`
  font-size: 0.875rem;
  color: var(--text-gray);
`

const ConsultingPage = () => {
  const services = [
    {
      id: 1,
      icon: <FaRobot />,
      title: 'AI Consulting',
      description: 'Expert guidance on implementing AI solutions for your business or creative projects.',
      features: [
        'Image model fine-tuning',
        'Autonomous coding implementation',
        'AI workflow optimization',
        'Custom model development'
      ],
      bookingUrl: 'https://calendly.com'
    },
    {
      id: 2,
      icon: <FaCamera />,
      title: 'Photography Coaching',
      description: 'Learn how to capture authentic, engaging photos that showcase personality.',
      features: [
        'Portrait photography techniques',
        'Natural expression coaching',
        'Lighting and composition',
        'Post-processing workflows'
      ],
      bookingUrl: 'https://calendly.com'
    },
    {
      id: 3,
      icon: <FaMusic />,
      title: 'Music Lessons',
      description: 'Private piano and guitar lessons for beginners to advanced students.',
      features: [
        'Piano technique and theory',
        'Guitar fundamentals',
        'Music composition',
        'Performance preparation'
      ],
      bookingUrl: 'https://calendly.com'
    },
    {
      id: 4,
      icon: <FaUsers />,
      title: 'AI Workshops',
      description: 'Group workshops on AI fundamentals and applications for businesses and individuals.',
      features: [
        'ChatGPT for business',
        'Image generation basics',
        'AI tools for productivity',
        'Future-proofing your career'
      ],
      bookingUrl: 'https://calendly.com'
    }
  ]
  
  const testimonials = [
    {
      id: 1,
      text: "Nick's AI consulting transformed our business. His expertise in fine-tuning image models helped us create a custom solution that our clients love.",
      name: "Sarah Johnson",
      role: "Marketing Director",
      avatar: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      text: "The photography coaching session with Nick was eye-opening. He taught me techniques that immediately improved my portrait work.",
      name: "Michael Chen",
      role: "Aspiring Photographer",
      avatar: "https://via.placeholder.com/100"
    },
    {
      id: 3,
      text: "Nick's workshop on AI tools for business gave our team practical knowledge we could implement right away. Highly recommended!",
      name: "David Rodriguez",
      role: "Startup Founder",
      avatar: "https://via.placeholder.com/100"
    }
  ]
  
  return (
    <ConsultingContainer>
      <ConsultingHeader>
        <ConsultingTitle>Consulting Services</ConsultingTitle>
        <ConsultingSubtitle>
          Expert guidance in AI, photography, music, and more to help you achieve your goals.
        </ConsultingSubtitle>
      </ConsultingHeader>
      
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServiceFeatures>
              {service.features.map((feature, i) => (
                <ServiceFeature key={i}>{feature}</ServiceFeature>
              ))}
            </ServiceFeatures>
            <BookButton href={service.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book a Consultation
            </BookButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
      
      <TestimonialsSection>
        <TestimonialsTitle>What People Say</TestimonialsTitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>
                <TestimonialAvatar>
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </TestimonialAvatar>
                <TestimonialInfo>
                  <TestimonialName>{testimonial.name}</TestimonialName>
                  <TestimonialRole>{testimonial.role}</TestimonialRole>
                </TestimonialInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>
    </ConsultingContainer>
  )
}

export default ConsultingPage