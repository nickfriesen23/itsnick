import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaTicketAlt } from 'react-icons/fa'

const EventsContainer = styled.div`
  padding: 120px var(--spacing-lg) var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 100px var(--spacing-md) var(--spacing-lg);
  }
`

const EventsHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`

const EventsTitle = styled.h1`
  margin-bottom: var(--spacing-md);
`

const EventsSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-gray);
  max-width: 800px;
  margin: 0 auto;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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
  min-width: 150px;
  
  &:hover {
    background: ${({ active }) => active ? 'var(--mustard)' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-2px);
  }
`

const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`

const EventCard = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const EventImage = styled.div`
  width: 300px;
  background-color: #2a2a2a;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

const EventContent = styled.div`
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
`

const EventTitle = styled.h2`
  margin-bottom: 0.5rem;
`

const EventDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--mustard);
  margin-bottom: 1rem;
  font-weight: 500;
`

const EventDescription = styled.p`
  color: var(--text-gray);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`

const EventMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`

const EventMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
`

const EventActions = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const RegisterButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
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

const DetailsButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: var(--text-light);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: var(--transition);
  border: 2px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  
  &:hover {
    border-color: var(--text-light);
    transform: translateY(-2px);
  }
`

const NoEventsMessage = styled.div`
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--text-gray);
  font-size: 1.2rem;
`

// Sample events data
const eventsData = [
  {
    id: 1,
    title: 'AI for Photographers Workshop',
    date: 'April 15, 2025',
    description: 'Learn how to leverage AI tools to enhance your photography workflow, from editing to client management.',
    image: 'https://via.placeholder.com/600x400',
    location: 'Tech Hub, Downtown',
    capacity: '30 attendees',
    price: '$99',
    type: 'upcoming',
    registerUrl: '#',
    detailsUrl: '#'
  },
  {
    id: 2,
    title: 'Monthly Content Creation Day',
    date: 'April 5, 2025',
    description: 'Join us for a full day of content creation. Get professional headshots, video interviews, and social media content all in one session.',
    image: 'https://via.placeholder.com/600x400',
    location: 'Studio 42',
    capacity: '15 attendees',
    price: '$199',
    type: 'upcoming',
    registerUrl: '#',
    detailsUrl: '#'
  },
  {
    id: 3,
    title: 'Community Potluck & Networking',
    date: 'March 20, 2025',
    description: 'Bring your favorite dish and connect with other creatives, entrepreneurs, and tech enthusiasts in a relaxed setting.',
    image: 'https://via.placeholder.com/600x400',
    location: 'Backyard Garden',
    capacity: '50 attendees',
    price: 'Free',
    type: 'past',
    registerUrl: '#',
    detailsUrl: '#'
  },
  {
    id: 4,
    title: 'Image Model Fine-Tuning Masterclass',
    date: 'February 28, 2025',
    description: 'Deep dive into the technical aspects of fine-tuning image generation models for specific use cases and styles.',
    image: 'https://via.placeholder.com/600x400',
    location: 'Online',
    capacity: 'Unlimited',
    price: '$149',
    type: 'past',
    registerUrl: '#',
    detailsUrl: '#'
  }
]

const EventsPage = () => {
  const [filter, setFilter] = useState('upcoming')
  
  const filteredEvents = eventsData.filter(event => event.type === filter)
  
  return (
    <EventsContainer>
      <EventsHeader>
        <EventsTitle>Events</EventsTitle>
        <EventsSubtitle>
          Join me for workshops, community gatherings, and content creation days.
        </EventsSubtitle>
      </EventsHeader>
      
      <FilterContainer>
        <FilterButton 
          active={filter === 'upcoming'}
          onClick={() => setFilter('upcoming')}
        >
          Upcoming Events
        </FilterButton>
        <FilterButton 
          active={filter === 'past'}
          onClick={() => setFilter('past')}
        >
          Past Events
        </FilterButton>
      </FilterContainer>
      
      <EventsList>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EventImage>
                <img src={event.image} alt={event.title} />
              </EventImage>
              <EventContent>
                <EventTitle>{event.title}</EventTitle>
                <EventDate>
                  <FaCalendarAlt /> {event.date}
                </EventDate>
                <EventDescription>{event.description}</EventDescription>
                <EventMeta>
                  <EventMetaItem>
                    <FaMapMarkerAlt /> {event.location}
                  </EventMetaItem>
                  <EventMetaItem>
                    <FaUsers /> {event.capacity}
                  </EventMetaItem>
                  <EventMetaItem>
                    <FaTicketAlt /> {event.price}
                  </EventMetaItem>
                </EventMeta>
                {filter === 'upcoming' && (
                  <EventActions>
                    <RegisterButton href={event.registerUrl}>Register Now</RegisterButton>
                    <DetailsButton href={event.detailsUrl}>View Details</DetailsButton>
                  </EventActions>
                )}
                {filter === 'past' && (
                  <EventActions>
                    <DetailsButton href={event.detailsUrl}>View Recap</DetailsButton>
                  </EventActions>
                )}
              </EventContent>
            </EventCard>
          ))
        ) : (
          <NoEventsMessage>
            No {filter} events at the moment. Check back soon!
          </NoEventsMessage>
        )}
      </EventsList>
    </EventsContainer>
  )
}

export default EventsPage