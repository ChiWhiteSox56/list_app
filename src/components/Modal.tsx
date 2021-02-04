import React from 'react';
import closeIcon from '../images/close_btn.png'

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
    <div className={'modal'}>
        <div 
            className={'modal__overlay'}
            ref={overlayRef} 
            onClick={handleOverlayClick}>
        </div>
        <div className={'modal__box'}>
            <div className={'modal__close-btn'}>
                <button onClick={onClose}>
                <img src={closeIcon} alt={'close modal'} />
                </button>
            </div>
            <div className={'modal__title'}>
                {title}
            </div>
            <div className={'modal__content'}>
                {children}
            </div>
        </div>
    </div>
    ) : null;
};