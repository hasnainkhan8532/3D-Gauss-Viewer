import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #000;
`;

interface VideoBackgroundProps {
  isLoaded: boolean;
}

const VideoBackground = styled.video<VideoBackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: ${props => props.isLoaded ? 1 : 0};
  transition: opacity 0.5s ease;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #F3EFF6;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    padding: 1.5rem 4rem;
  }
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const Logo = styled.img`
  height: 30px;

  @media (min-width: 768px) {
    height: 40px;
  }
`;

const LogoText = styled.span`
  font-family: 'OpenSans', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #F3EFF6;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BackButton = styled(motion.button)`
  background: transparent;
  color: #F29C22;
  border: 1px solid #F29C22;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  font-family: 'OpenSans', sans-serif;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
  }

  &:hover {
    color: #FBDE56;
    border-color: #FBDE56;
    background: rgba(251, 222, 86, 0.1);
  }
`;

const Content = styled.main`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: #F3EFF6;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;

  @media (min-width: 768px) {
    padding: 0 4rem;
  }
`;

const Title = styled.h1`
  font-family: 'OpenSans', sans-serif;
  font-size: 32px;
  margin-bottom: 2rem;
  text-align: center;
  color: #F3EFF6;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamMember = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const MemberName = styled.h2`
  font-family: 'OpenSans', sans-serif;
  font-size: 24px;
  margin-bottom: 0.5rem;
  color: #F3EFF6;
`;

const MemberRole = styled.h3`
  font-family: 'OpenSans', sans-serif;
  font-size: 18px;
  color: #F29C22;
  margin-bottom: 1rem;
`;

const MemberInfo = styled.p`
  font-family: 'OpenSans', sans-serif;
  font-size: 16px;
  color: #F3EFF6;
  opacity: 0.8;
  line-height: 1.6;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  text-align: center;
  padding: 1rem;
  color: #F3EFF6;
  font-family: 'OpenSans', sans-serif;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    padding: 1.5rem;
    font-size: 14px;
  }
`;

const FooterLink = styled.a`
  color: #F3EFF6;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.5;
  }
`;

const ContactUs = () => {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <VideoBackground 
        autoPlay 
        loop 
        muted 
        playsInline 
        isLoaded={videoLoaded}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </VideoBackground>

      <Header>
        <LogoContainer
          onClick={handleLogoClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Logo src="/logo.png" alt="RepliVision" />
          <LogoText>RepliVision</LogoText>
        </LogoContainer>
        <BackButton
          onClick={() => navigate('/main')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Menu
        </BackButton>
      </Header>

      <Content>
        <Title>Meet Our Team</Title>
        <TeamGrid>
          <TeamMember
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <MemberName>Hasnain Khan</MemberName>
            <MemberRole>3D Specialist</MemberRole>
            <MemberInfo>
              Expert in photogrammetry and 3D reconstruction.
              Specializes in creating accurate digital twins from real-world objects.
            </MemberInfo>
          </TeamMember>

          <TeamMember
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <MemberName>Muhammad Hassan Aamir</MemberName>
            <MemberRole>Lead Developer</MemberRole>
            <MemberInfo>
            Full-stack developer with expertise in React, TypeScript, and 3D technologies.
            Passionate about creating immersive digital experiences.
            </MemberInfo>
          </TeamMember>

          <TeamMember
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <MemberName>Arooj Yousaf</MemberName>
            <MemberRole>Fronend Designing</MemberRole>
            <MemberInfo>
              Frontend designer with expertise in React, TypeScript, and 3D technologies.
              Passionate about creating immersive digital experiences.
            </MemberInfo>
          </TeamMember>
        </TeamGrid>
      </Content>

      <Footer>
        © Designed with ❤️ by <FooterLink href="https://hasnainayaz.com" target="_blank" rel="noopener noreferrer">hasnainayaz.com</FooterLink> & team
      </Footer>
    </Container>
  );
};

export default ContactUs; 