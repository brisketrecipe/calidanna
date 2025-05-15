import styled from '@emotion/styled';

const ServicesSection = styled.section`
  padding: 100px 0;
  background-color: var(--light-pink);
  width: 100vw;
`;

const ServicesContainer = styled.div`
  width: 100vw;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 100%;
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  max-width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
  margin: 0 auto 12px auto;
  display: block;
  background: var(--light-blue);
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: var(--light-purple);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--primary-color);
  font-size: 2rem;
`;

const ServiceTitle = styled.h3`
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ServiceDescription = styled.p`
  color: var(--text-color);
  margin-bottom: 20px;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ServicePrice = styled.div`
  font-size: 1.25rem;
  color: var(--secondary-color);
  font-weight: bold;
  margin-bottom: 20px;
`;

const ServiceButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 12px 0;
  }
  &:hover {
    background-color: #ff1493;
  }
`;

const Services = () => {
  const services = [
    {
      title: "Interview Preparation",
      description: "Master the art of confident communication and interview skills. Learn how to express yourself clearly and authentically.",
      price: "From $299",
      icon: "💬"
    },
    {
      title: "Talent Development",
      description: "Discover and refine your unique talents. Get personalized coaching to showcase your abilities with confidence.",
      price: "From $399",
      icon: "⭐"
    },
    {
      title: "Poise & Presentation",
      description: "Develop grace, posture, and stage presence. Learn essential skills for walking, posing, and presenting yourself.",
      price: "From $249",
      icon: "👑"
    },
    {
      title: "Complete Package",
      description: "Comprehensive training covering all aspects of pageant preparation. Perfect for serious competitors.",
      price: "From $899",
      icon: "✨"
    }
  ];

  const serviceImages = [
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Interview Preparation
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Talent Development
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // Poise & Presentation
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80", // Complete Package
  ];

  return (
    <ServicesSection id="services">
      <ServicesContainer>
        <h2 className="section-title">Our Services</h2>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceImage src={serviceImages[index]} alt={`${service.title} stock photo`} />
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServicePrice>{service.price}</ServicePrice>
              <ServiceButton href="#contact">Learn More</ServiceButton>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services; 