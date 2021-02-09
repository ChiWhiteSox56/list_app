import React from 'react';
import styled from "styled-components"
import Flex from './Flex'
import closeIcon from '../images/close_btn.png'
import FlavorCard from './FlavorCard'

const DummyComponent = styled(FlavorCard)

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
`;

const ModalBody = styled.div`
    margin: 0 10%;
    padding: 50px;
    width: 80%;
    position: relative;
    z-index: 1;
    background: white;
    box-sizing: border-box,
    border-radius: 10px,
    background-color: #fff,
    cursor: auto
  `;

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
        <div 
            className={'modal__overlay'}
            ref={overlayRef} 
            onClick={handleOverlayClick}>
        </div>
        <ModalBody>
            <div className={'modal__close-btn'}>
                <button onClick={onClose}>
                <img src={closeIcon} alt={'close modal'} />
                </button>
            </div>
            <div className={'modal__content'}>
                {children}
            </div>
        </ModalBody>
    </ModalContainer>
    ) : null;
};