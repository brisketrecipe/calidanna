import styled from '@emotion/styled';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  background: linear-gradient(135deg, var(--light-pink) 0%, var(--light-purple) 100%);
  width: 100vw;
`;

const HeroContent = styled.div`
  width: 100vw;
  padding: 0 0 40px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 0 20px 0;
  }
`;

const HeroImage = styled.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 2rem;
  box-shadow: 0 4px 16px rgba(255, 105, 180, 0.15);
  background: var(--light-blue);
  border: 6px solid #fff;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-color);
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 95vw;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background-color: #ff1493;
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  return (
    <HeroSection className="full-width-section" id="home">
      <HeroContent>
        <HeroImage src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&h=600&facepad=3&q=80" alt="Smiling young girl in a pageant dress" />
        <Title>Building Confidence, Character & Talent</Title>
        <Subtitle>
          Empowering young girls to shine their brightest through personalized pageant coaching.
          We focus on developing confidence, poise, and authentic self-expression while nurturing
          each girl's unique talents and personality.
        </Subtitle>
        <CTAButton href="#contact">Start Your Journey</CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 