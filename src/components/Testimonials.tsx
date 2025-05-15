import styled from '@emotion/styled';
import { useState } from 'react';

const TestimonialsSection = styled.section`
  padding: 100px 0;
  background-color: var(--light-purple);
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TestimonialContent = styled.p`
  font-style: italic;
  color: var(--text-color);
  margin-bottom: 20px;
  line-height: 1.6;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  background-color: var(--light-pink);
  border-radius: 50%;
  object-fit: cover;
  display: block;
`;

const AuthorInfo = styled.div`
  h4 {
    color: var(--primary-color);
    margin-bottom: 5px;
  }
  
  p {
    color: var(--text-color);
    font-size: 0.9rem;
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      content: "The coaching my daughter received was transformative. She gained so much confidence and learned valuable life skills that extend far beyond the pageant stage.",
      author: "Sarah Johnson",
      role: "Parent of Miss Teen California 2023",
      initials: "SJ"
    },
    {
      content: "I never thought I could feel so comfortable in front of an audience. The personalized attention and guidance helped me discover my true potential.",
      author: "Emily Rodriguez",
      role: "Former Student",
      initials: "ER"
    },
    {
      content: "The interview preparation was exceptional. My daughter learned how to express herself authentically and handle any question with grace and confidence.",
      author: "Michael Thompson",
      role: "Parent",
      initials: "MT"
    }
  ];

  const testimonialImages = [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=60&h=60&facepad=3&q=80", // Sarah Johnson (parent)
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=60&h=60&facepad=3&q=80", // Emily Rodriguez (student)
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=60&h=60&facepad=3&q=80", // Michael Thompson (parent)
  ];

  return (
    <TestimonialsSection id="testimonials">
      <TestimonialsContainer>
        <h2 className="section-title">What Our Families Say</h2>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <TestimonialContent>"{testimonial.content}"</TestimonialContent>
              <TestimonialAuthor>
                <AuthorImage src={testimonialImages[index]} alt={`Photo of ${testimonial.author}`} />
                <AuthorInfo>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials; 