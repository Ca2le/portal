import styled from "styled-components";
import global from "../../style/global.styles";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Div = styled.div`
  padding: 5px 0;
  position: relative;
  display: flex;
  flex-direction: row;
  width: auto;
  height: 100%;
  align-items: center;
  &:hover {
    transform: scale(1.02);
    color: #fff;
    cursor: pointer;
    background-color: #1d1b31;
  }
`;
export const Header = styled.p`
  font-size: 14px;
  color: #fff;

  font-weight: ${global.font_weight_reg};
`;
