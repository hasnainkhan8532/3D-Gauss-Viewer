import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Popup = styled(motion.div)`
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  color: #F3EFF6;
  font-family: 'OpenSans', sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #F3EFF6;
  text-align: center;
`;

const Section = styled.section`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
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
  
  &:before {
    content: "•";
    color: #F29C22;
    position: absolute;
    left: 0;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  color: #F3EFF6;
  border: 1px solid #F3EFF6;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
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

const HowToUse = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/viewer');
  };

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      >
        <Popup
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <CloseButton
            onClick={handleClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Close
          </CloseButton>

          <Title>How to Use the 3D Viewer</Title>
          
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
        </Popup>
      </Overlay>
    </AnimatePresence>
  );
};

export default HowToUse; 