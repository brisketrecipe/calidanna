import styled from '@emotion/styled';

const AboutSection = styled.section`
  background-color: var(--light-blue);
  padding: 100px 0;
  width: 100vw;
`;

const AboutContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 0 0 0;
  }
`;

const AboutImage = styled.div`
  background-color: var(--light-pink);
  border-radius: 20px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.2rem;
  overflow: hidden;
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CoachImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const AboutContent = styled.div`
  width: 100%;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
  h2 {
    color: var(--primary-color);
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 1rem;
    line-height: 1.8;
  }
`;

const Qualifications = styled.div`
  margin-top: 2rem;
  h3 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;
      &:before {
        content: "•";
        color: var(--primary-color);
        position: absolute;
        left: 0;
      }
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutImage>
          <CoachImg src="https://images.unsplash.com/photo-1519340333755-c1aa5571fd46?auto=format&fit=facearea&w=400&h=400&facepad=3&q=80" alt="Professional female coach smiling" />
        </AboutImage>
        <AboutContent>
          <h2>Meet Your Coach</h2>
          <p>
            With over 15 years of experience in pageantry and youth development,
            I am passionate about helping young girls discover their true potential
            and develop the skills they need to succeed both on and off the stage.
          </p>
          <p>
            My approach combines traditional pageant training with modern coaching
            techniques, focusing on building confidence, character, and authentic
            self-expression. I believe that every girl has unique talents and
            qualities that deserve to be celebrated and nurtured.
          </p>
          <Qualifications>
            <h3>Qualifications & Achievements</h3>
            <ul>
              <li>Former National Pageant Titleholder</li>
              <li>Certified Youth Development Coach</li>
              <li>Bachelor's Degree in Child Psychology</li>
              <li>15+ Years of Pageant Coaching Experience</li>
              <li>100+ Successful Contestants</li>
            </ul>
          </Qualifications>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 