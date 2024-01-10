import styled from "styled-components";
import global from "../../style/global.styles";
interface ContainerProps {
  toggle: boolean
}
export const Container = styled.div<ContainerProps>`
  ${(props) => {
   return !props.toggle ? 'display: none;' : 'display: flex;'
  }}
  flex-direction: column;
  height: auto;
  width: 100%;
`;

export const Sublink = styled.div`
  height: auto;
  width: 100%;
`;
export const Text = styled.div`
  height: auto;
  width: 100%;
`;

