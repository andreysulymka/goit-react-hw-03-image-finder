import React from "react";
import { ModalStyled, Overlay } from "./Modal.styled";


function Modal ({largeImage,overlayClick}){
     
    return <Overlay onClick={overlayClick}>
  <ModalStyled >
    <img src={largeImage} alt="" />
  </ModalStyled>
</Overlay>
    
}

export default Modal;