import styled from '@emotion/styled';
import { useState } from 'react';

const ContactSection = styled.section`
  padding: 100px 0;
  background-color: var(--light-blue);
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: var(--text-color);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #ff1493;
  }
`;

const ContactInfo = styled.div`
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

const InfoItem = styled.div`
  margin-top: 30px;
  
  h3 {
    color: var(--secondary-color);
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 5px;
  }
`;

const LocationImage = styled.img`
  width: 100%;
  max-width: 320px;
  height: 120px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 1rem;
  background: var(--light-blue);
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactForm onSubmit={handleSubmit}>
          <h2>Get in Touch</h2>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
        
        <ContactInfo>
          <h2>Contact Information</h2>
          <p>
            Ready to start your journey to success? Get in touch with us to schedule
            a consultation or learn more about our coaching programs.
          </p>
          
          <InfoItem>
            <LocationImage src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="Welcoming coaching office" />
            <h3>Location</h3>
            <p>123 Pageant Lane</p>
            <p>Los Angeles, CA 90001</p>
          </InfoItem>
          
          <InfoItem>
            <h3>Contact</h3>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@calidanna.com</p>
          </InfoItem>
          
          <InfoItem>
            <h3>Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </InfoItem>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 