import styled, { keyframes } from "styled-components";
import { promoteLayer } from "./utils";

const getDropdownRootKeyFrame = ({ animatingOut, direction }: any) => {
  if (!animatingOut && direction) return null;

  return keyframes`
  from {
    transform: ${animatingOut ? "rotateX(0)" : "rotateX(-15deg)"};
    opacity: ${animatingOut ? 1 : 0};
  }
  to {
    transform: ${animatingOut ? "rotateX(-15deg)" : "rotateX(0)"};
    opacity: ${animatingOut ? 0 : 1};
  }
`;
};

export const DropdownRoot = styled.div`
  transform-origin: 0 0;
  animation-name: ${getDropdownRootKeyFrame};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -20px;
  right: 0;
`;

export const DropdownBackground = styled.div`
  transform-origin: 0 0;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1);
`;

export const AltBackground = styled.div`
  background-color: var(--grey);
  width: 300%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  transform-origin: 0 0;
  z-index: 0;
  transition: transform 300ms;
`;

export const InvertedDiv = styled.div`
  ${promoteLayer}
  position: ${(props: any) => (props.absolute ? "absolute" : "relative")};
  top: 0;
  left: 0;
  &:first-of-type {
    z-index: 1;
  }
  &:not(:first-of-type) {
    z-index: -1;
  }
`;
