import styled from "styled-components";

export const Input = styled.input`
  background-color: transparent;
  padding: 10px;
  border: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;