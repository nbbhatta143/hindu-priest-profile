// Import necessary React modules
import React, { useState } from "react"
import "./HinduPriestProfile.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

// Create a functional component for the Hindu Priest profile
const HinduPriestProfile = () => {
  // Define the initial state for services
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Puja Ceremony",
      description: "Perform various puja ceremonies for different occasions.",
    },
    {
      id: 2,
      title: "Astrology Consultation",
      description: "Provide astrology readings and consultations.",
    },
    {
      id: 3,
      title: "Vastu Shastra",
      description: "Offer guidance on Vastu Shastra for homes and businesses.",
    },
    {
      id: 4,
      title: "Muhurat Selection",
      description: "Assist in selecting auspicious timings for events or activities.",
    },
    {
      id: 5,
      title: "Katha Recitation",
      description: "Recite religious scriptures and stories for spiritual gatherings.",
    },
    {
      id: 6,
      title: "Chakra Balancing",
      description: "Perform rituals to balance and align the body's energy centers.",
    },
    {
      id: 7,
      title: "Mantra Chanting",
      description: "Lead chanting sessions for the repetition of sacred mantras.",
    },
    {
      id: 8,
      title: "Yagnas and Homas",
      description: "Conduct elaborate fire rituals for specific spiritual purposes.",
    },
    {
      id: 9,
      title: "Griha Nirmana",
      description: "Bless and consecrate new homes during the construction phase.",
    },
    {
      id: 10,
      title: "Prasadam Distribution",
      description: "Distribute blessed food items as a part of religious ceremonies.",
    },
    // Add more services as needed
  ])

  // Define the initial state for the priest's information
  const priestInfo = {
    name: "Priest Name",
    imageUrl: "priest_image.jpg",
    phoneNumber: "123-456-7890",
  }

  // Define a function to handle the card click event
  const handleCardClick = (id) => {
    // Toggle the card's open state
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === id ? { ...service, isOpen: !service.isOpen } : service
      )
    )
  }

  return (
    <div className="profile-container">
      <h1 className="profile-name">{priestInfo.name}</h1>
      <FontAwesomeIcon
        icon={faUser}
        size="4x"
        color="#333"
        className="profile-image"
        alt="Profile Image of Hindu Priest"
      />
      <h2>Services</h2>
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <div onClick={() => handleCardClick(service.id)} className="card-header">
            <h3>{service.title}</h3>
          </div>
          <div className={`card-content ${service.isOpen ? "open" : ""}`}>
            {service.isOpen && <p>{service.description}</p>}
          </div>
        </div>
      ))}

      <h2>Contact Information</h2>
      <p>Phone Number: {priestInfo.phoneNumber}</p>
    </div>
  )
}

export default HinduPriestProfile
