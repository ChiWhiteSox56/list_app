import { FC } from "react";
import styled from "styled-components";

const IceImage = styled.div`
  align-items: center;
  padding-bottom: 30px;
`;
const ModalImage: FC = ({ children }) => {
  return <IceImage>{children}</IceImage>;
};

export default ModalImage;
