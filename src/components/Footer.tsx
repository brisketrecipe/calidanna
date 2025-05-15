import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: var(--text-color);
  color: white;
  padding: 50px 0 20px;
  width: 100vw;
`;

const FooterContent = styled.div`
  width: 100vw;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 10px;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: var(--primary-color);
    margin-bottom: 20px;
    font-size: 1.2rem;
  }
  
  p {
    margin-bottom: 10px;
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>CaliDanna</h3>
          <p>
            Empowering young girls to shine their brightest through personalized
            pageant coaching and character development.
          </p>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              📘
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              📸
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              🐦
            </SocialLink>
            <SocialLink href="#" aria-label="YouTube">
              📺
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <p><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></p>
          <p><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></p>
          <p><a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a></p>
          <p><a href="#testimonials" style={{ color: 'white', textDecoration: 'none' }}>Testimonials</a></p>
          <p><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></p>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Info</h3>
          <p>123 Pageant Lane</p>
          <p>Los Angeles, CA 90001</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@calidanna.com</p>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} CaliDanna. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 