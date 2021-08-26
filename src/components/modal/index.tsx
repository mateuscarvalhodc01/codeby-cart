import React from 'react';

import { Background, Container, ModalBody } from './styles';

interface ModalProps {
  autoScroll?: boolean;
  dismissModal: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({
  autoScroll,
  dismissModal,
  children,
}) => {
  return (
    <Background
      onClick={() => {
        dismissModal();
      }}
    >
      <Container
        autoScroll={autoScroll}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <ModalBody>{children}</ModalBody>
      </Container>
    </Background>
  );
};

export default ModalComponent;
