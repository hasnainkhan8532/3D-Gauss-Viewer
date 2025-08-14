import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #000;
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

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;

  @media (max-width: 1024px) {
    .desktop-buttons {
      display: none;
    }
  }

  @media (min-width: 1025px) {
    .mobile-menu {
      display: none;
    }
  }
`;

const DesktopButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuButton = styled(motion.button)`
  background: transparent;
  color: #F3EFF6;
  border: 1px solid #F3EFF6;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  font-family: 'OpenSans', sans-serif;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  padding-left: 3rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    padding-left: 3.2rem;
  }

  &:hover {
    color: #F29C22;
    border-color: #F29C22;
    background: rgba(242, 156, 34, 0.1);
  }
`;

const MenuIcon = styled(motion.img)`
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
  position: absolute;
  left: 0.8rem;
`;

const MenuDropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem;
  min-width: 200px;
  z-index: 1000;
`;

const MenuItem = styled(motion.button)`
  width: 100%;
  padding: 0.8rem 1rem;
  background: transparent;
  border: none;
  color: #F3EFF6;
  font-size: 1rem;
  font-family: 'OpenSans', sans-serif;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(242, 156, 34, 0.1);
    color: #F29C22;
  }
`;

const MenuDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 0;
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

const ViewerFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  margin-top: 80px; // Add space for header
  margin-bottom: 60px; // Add space for footer
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ExamplesButton = styled(motion.button)`
  background: transparent;
  color: #F3EFF6;
  border: 1px solid #F3EFF6;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  font-family: 'OpenSans', sans-serif;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
  }

  &:hover {
    color: #F29C22;
    border-color: #F29C22;
    background: rgba(242, 156, 34, 0.1);
  }
`;

const ExamplesDropdown = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;
`;

const ExamplesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ExamplesTitle = styled.h2`
  color: #F3EFF6;
  font-size: 2rem;
  font-family: 'OpenSans', sans-serif;
  margin: 0;
`;

const CloseButton = styled(motion.button)`
  background: transparent;
  color: #F3EFF6;
  border: 1px solid #F3EFF6;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: 'OpenSans', sans-serif;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #F29C22;
    border-color: #F29C22;
    background: rgba(242, 156, 34, 0.1);
  }
`;

const ExampleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
`;

const ExampleItem = styled(motion.div)`
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: #F29C22;
    transform: translateY(-4px);
    background: rgba(242, 156, 34, 0.1);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ExampleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #1a1a1a;
`;

const ExampleTitle = styled.div`
  padding: 1rem;
  font-size: 1.1rem;
  color: #F3EFF6;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  font-family: 'OpenSans', sans-serif;
`;

const InstructionsDropdown = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;
`;

const InstructionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const InstructionsTitle = styled.h2`
  color: #F3EFF6;
  font-size: 2rem;
  font-family: 'OpenSans', sans-serif;
  margin: 0;
`;

const Section = styled.section`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #F29C22;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InstructionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InstructionItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  color: #F3EFF6;
  font-size: 1.1rem;
  
  &:before {
    content: "•";
    color: #F29C22;
    position: absolute;
    left: 0;
  }
`;

const InstructionsButton = styled(motion.button)`
  background: transparent;
  color: #F3EFF6;
  border: 1px solid #F3EFF6;
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
    color: #F29C22;
    border-color: #F29C22;
    background: rgba(242, 156, 34, 0.1);
  }
`;

const SplatViewer = () => {
  const navigate = useNavigate();
  const [isExamplesOpen, setIsExamplesOpen] = useState(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentModel, setCurrentModel] = useState('');

  const examples = [
    {
      id: 'lexus-3d',
      title: 'Lexus 3D',
      thumbnail: '/examples/thumbnails/lexus-3d.jpg',
      model: '/examples/lexus-3d.ply.splat'
    },
    {
      id: 'nathiagali',
      title: 'Nathiagali',
      thumbnail: '/examples/thumbnails/nathiagali.jpg',
      model: '/examples/nathiagali.splat'
    },
    {
      id: 'austria',
      title: 'Austria',
      thumbnail: '/examples/thumbnails/austria.jpg',
      model: '/examples/austria.splat'
    },
    {
      id: 'ayesha-hostel',
      title: 'Ayesha Hostel',
      thumbnail: '/examples/thumbnails/ayesha-hostel.jpg',
      model: '/examples/ayesha-hostel.ply.splat'
    },
    {
      id: 'ford',
      title: 'Ford Model',
      thumbnail: '/examples/thumbnails/ford.jpg',
      model: '/examples/ford.ply.splat'
    },
    {
      id: 'bahria-university',
      title: 'Bahria University',
      thumbnail: '/examples/thumbnails/bahria-university.jpg',
      model: '/examples/bahria-university.splat'
    },
    {
      id: 'vase-brown',
      title: 'Brown Vase',
      thumbnail: '/examples/thumbnails/vase-brown.jpg',
      model: '/examples/vase-brown.splat'
    },
    {
      id: 'toy-cat',
      title: 'Toy Cat',
      thumbnail: '/examples/thumbnails/toy_cat.jpg',
      model: '/examples/toy_cat.splat'
    },
    {
      id: 'seiko-watch',
      title: 'Seiko Watch',
      thumbnail: '/examples/thumbnails/seiko-watch.jpg',
      model: '/examples/seiko-watch.splat'
    },
    {
      id: 'suzuki-bike',
      title: 'Suzuki Bike',
      thumbnail: '/examples/thumbnails/suzuki-bike.jpg',
      model: '/examples/suzuki-bike.splat'
    },
    {
      id: 'bicycle-noroad',
      title: 'Bicycle',
      thumbnail: '/examples/thumbnails/bicycle-road.jpg',
      model: '/examples/bicycle-noroad.splat'
    },
    {
      id: 'lexus-scene',
      title: 'Lexus Scene',
      thumbnail: '/examples/thumbnails/lexus-scene.jpg',
      model: '/examples/lexus-scene.ply.splat'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const frame = document.getElementById('splat-viewer') as HTMLIFrameElement;
    if (frame) {
      frame.src = '/splat/index.html';
      
      frame.onload = () => {
        frame.focus();
        
        const container = document.querySelector('.viewer-container');
        if (container) {
          container.addEventListener('click', () => {
            frame.focus();
          });
        }
      };
    }

    return () => {
      const container = document.querySelector('.viewer-container');
      if (container) {
        container.removeEventListener('click', () => {
          const frame = document.getElementById('splat-viewer') as HTMLIFrameElement;
          if (frame) frame.focus();
        });
      }
    };
  }, []);

  const handleModelSelect = (modelPath: string) => {
    const frame = document.getElementById('splat-viewer') as HTMLIFrameElement;
    if (frame && frame.contentWindow) {
      frame.contentWindow.postMessage({ type: 'loadModel', modelPath }, '*');
    }
    setIsExamplesOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Container className="viewer-container">
      <Header>
        <HeaderLeft>
          <LogoContainer
            onClick={handleLogoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo src="/logo.png" alt="RepliVision" />
            <LogoText>RepliVision</LogoText>
          </LogoContainer>
        </HeaderLeft>
        <HeaderRight className="menu-container">
          {/* Desktop Buttons */}
          <DesktopButtons className="desktop-buttons">
            <ExamplesButton
              onClick={(e) => {
                e.stopPropagation();
                setIsExamplesOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Examples
            </ExamplesButton>
            <InstructionsButton
              onClick={(e) => {
                e.stopPropagation();
                setIsInstructionsOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              How to Use
            </InstructionsButton>
            <BackButton
              onClick={() => navigate('/main')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Menu
            </BackButton>
          </DesktopButtons>

          {/* Mobile Menu */}
          <div className="mobile-menu">
            <MenuButton
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <MenuIcon
                    key="close"
                    src="/close.svg"
                    alt="Close Menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                ) : (
                  <MenuIcon
                    key="open"
                    src="/open.svg"
                    alt="Open Menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
              {isMenuOpen ? 'Close' : 'Menu'}
            </MenuButton>

            <AnimatePresence>
              {isMenuOpen && (
                <MenuDropdown
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuItem
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsExamplesOpen(true);
                      setIsMenuOpen(false);
                    }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🎨 Examples
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsInstructionsOpen(true);
                      setIsMenuOpen(false);
                    }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    📖 How to Use
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    onClick={() => navigate('/main')}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🏠 Back to Menu
                  </MenuItem>
                </MenuDropdown>
              )}
            </AnimatePresence>
          </div>
        </HeaderRight>
      </Header>

      <AnimatePresence>
        {isExamplesOpen && (
          <ExamplesDropdown
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ExamplesHeader>
              <ExamplesTitle>Example Models</ExamplesTitle>
              <CloseButton
                onClick={() => setIsExamplesOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </CloseButton>
            </ExamplesHeader>
            <ExampleGrid>
              {examples.map((example) => (
                <ExampleItem
                  key={example.id}
                  onClick={() => handleModelSelect(example.model)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExampleImage src={example.thumbnail} alt={example.title} />
                  <ExampleTitle>{example.title}</ExampleTitle>
                </ExampleItem>
              ))}
            </ExampleGrid>
          </ExamplesDropdown>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isInstructionsOpen && (
          <InstructionsDropdown
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <InstructionsHeader>
              <InstructionsTitle>How to Use</InstructionsTitle>
              <CloseButton
                onClick={() => setIsInstructionsOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </CloseButton>
            </InstructionsHeader>

            <Section>
              <SectionTitle>🎮 Gamepad Controls</SectionTitle>
              <InstructionList>
                <InstructionItem>Left Stick: Move camera</InstructionItem>
                <InstructionItem>Right Stick: Rotate camera</InstructionItem>
                <InstructionItem>L2/R2: Tilt camera</InstructionItem>
                <InstructionItem>A Button (I): Rotate up</InstructionItem>
                <InstructionItem>B Button (L): Rotate right</InstructionItem>
                <InstructionItem>X Button (K): Rotate down</InstructionItem>
                <InstructionItem>Y Button (J): Rotate left</InstructionItem>
                <InstructionItem>L1 (B4): Toggle P functionality</InstructionItem>
                <InstructionItem>R1 (B5): Toggle H functionality</InstructionItem>
              </InstructionList>
            </Section>

            <Section>
              <SectionTitle>⌨️ Keyboard Controls</SectionTitle>
              <InstructionList>
                <InstructionItem>Arrow Keys: Move camera</InstructionItem>
                <InstructionItem>W/S: Tilt camera up/down</InstructionItem>
                <InstructionItem>A/D: Turn camera left/right</InstructionItem>
                <InstructionItem>Q/E: Roll camera counterclockwise/clockwise</InstructionItem>
                <InstructionItem>I/K: Rotate up/down</InstructionItem>
                <InstructionItem>J/L: Rotate left/right</InstructionItem>
                <InstructionItem>P: Toggle default animation</InstructionItem>
                <InstructionItem>H: Toggle carousel mode (when cameras loaded)</InstructionItem>
                <InstructionItem>0-9: Switch to pre-loaded camera views</InstructionItem>
                <InstructionItem>+/-: Cycle through loaded cameras</InstructionItem>
              </InstructionList>
            </Section>

            <Section>
              <SectionTitle>📱 Mobile Controls</SectionTitle>
              <InstructionList>
                <InstructionItem>One finger drag: Orbit camera</InstructionItem>
                <InstructionItem>Two finger pinch: Move forward/back</InstructionItem>
                <InstructionItem>Two finger rotate: Rotate camera</InstructionItem>
                <InstructionItem>Two finger pan: Move side-to-side and up-down</InstructionItem>
              </InstructionList>
            </Section>

            <Section>
              <SectionTitle>Additional Features</SectionTitle>
              <InstructionList>
                <InstructionItem>Drag and drop .ply file to convert to .splat</InstructionItem>
                <InstructionItem>Drag and drop cameras.json to load cameras</InstructionItem>
                <InstructionItem>Press V to save current view coordinates to URL</InstructionItem>
              </InstructionList>
            </Section>
          </InstructionsDropdown>
        )}
      </AnimatePresence>

      <ViewerFrame
        id="splat-viewer"
        title="3D Gaussian Splat Viewer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <Footer>
        © Designed with ❤️ by <FooterLink href="https://hasnainayaz.com" target="_blank" rel="noopener noreferrer">hasnainayaz.com</FooterLink>
      </Footer>
    </Container>
  );
};

export default SplatViewer; 