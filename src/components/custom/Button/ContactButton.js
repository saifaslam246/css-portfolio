import styled from "styled-components";

export const ContactButton = styled.button`
  padding: 10px;
  border-radius: 25px;
  width: ${(props) => props.$width};
  font-size: ${(props) => props.$fontSize};
  background-color: ${(props) => props.$backgroundColor};
  height: ${(props) => props.$height};
  border-radius: ${(props) => props.$borderRadius};
  color: ${(props) => props.$color};
`;
