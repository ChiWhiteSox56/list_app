import React from 'react';
import styled from "styled-components"
import Flex from './Flex'
import closeIcon from '../images/close_btn.png'
import Button from './Button'

const ModalContainer = styled(Flex).attrs(() => ({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}))`
    position: fixed;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    cursor: pointer;
`;

const ModalBody = styled.div`
    margin: 0 10%;
    padding: 50px;
    width: 80%;
    position: relative;
    z-index: 1;
    background: white;
    box-sizing: border-box;
    border-radius: 24px;
    border: 6px solid #00269a;
    background-color: #fff;
    cursor: auto;
  `;

const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
`

const ModalCloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
} // all other properties will be passed as children

export const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => { 
    const overlayRef = React.useRef(null);

    const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === overlayRef.current) { // this conditional passes only if the overlay (reference element) is the same as the clicked one (e.target)
            onClose();
        }
    }
    return isOpen ? (
    <ModalContainer>
        <ModalOverlay
            ref={overlayRef} 
            onClick={handleOverlayClick} />
        <ModalBody>
            <ModalCloseButton onClick={onClose}>
                <img src={closeIcon} alt={'close modal'} />
            </ModalCloseButton>
            <div className={'modal__content'}>
                {children}
            </div>
            <div>
                <Button>Sounds good!</Button>
                <Button>Nah, try again.</Button>
            </div>
        </ModalBody>
    </ModalContainer>
    ) : null;
};