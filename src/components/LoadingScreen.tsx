import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #000;
`;

interface VideoBackgroundProps {
  isLoaded: boolean;
}

const VideoBackground = styled.video<VideoBackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props: VideoBackgroundProps) => props.isLoaded ? 1 : 0};
  transition: opacity 1s ease-in-out;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  animation: ${fadeIn} 2s ease-in-out;
`;

const Logo = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const LoadingScreen: React.FC = () => {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container>
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
      <Content>
        <Logo src="/logo_ghibli.gif" alt="Logo" />
        <Title>RepliVision</Title>
        <Subtitle>Images to 3D Reconstruction</Subtitle>
      </Content>
    </Container>
  );
};

export default LoadingScreen; 