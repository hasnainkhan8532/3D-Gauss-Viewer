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

const ContactLink = styled(motion.button)`
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

const MainContent = styled.main`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #F3EFF6;
  text-align: left;
  width: 100%;
  max-width: 1240px;
  padding: 0 2rem;

  @media (min-width: 768px) {
    padding: 0 4rem;
  }
`;

const Title = styled.h1`
  font-family: 'OpenSans', sans-serif;
  font-size: 24px;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-align: left;
  color: #F3EFF6;
  font-weight: 700;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const TitleLine = styled.span`
  display: block;
`;

const Subtitle = styled.p`
  font-family: 'OpenSans', sans-serif;
  font-size: 16px;
  margin-bottom: 2rem;
  opacity: 0.8;
  line-height: 1.4;
  text-align: left;
  color: #F3EFF6;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 3rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StartButton = styled(motion.button)`
  background: #F29C22;
  color: #F3EFF6;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 16px;
  font-family: 'OpenSans', sans-serif;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  width: auto;
  min-width: 200px;

  @media (max-width: 767px) {
    width: auto;
    min-width: 180px;
  }

  &:hover {
    background: #FBDE56;
    transform: translateY(-2px);
  }
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

const MainMenu = () => {
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
        muted 
        loop 
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
        <ContactLink
          onClick={() => navigate('/contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </ContactLink>
      </Header>

      <MainContent>
        <Title>
          <TitleLine>3D Reconstruction Using</TitleLine>
          <TitleLine>Photogrammetry & AI</TitleLine>
        </Title>
        <Subtitle>
          One Shot Real World to Digital Twins
        </Subtitle>
        <ButtonContainer>
          <StartButton
            onClick={() => navigate('/viewer')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start the Reconstructor
          </StartButton>
        </ButtonContainer>
      </MainContent>

      <Footer>
        © Designed with ❤️ by <FooterLink href="https://hasnainayaz.com" target="_blank" rel="noopener noreferrer">hasnainayaz.com</FooterLink>
      </Footer>
    </Container>
  );
};

export default MainMenu; 