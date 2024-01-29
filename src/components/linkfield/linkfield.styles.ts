import styled from "styled-components";
import { hexColors, fonts, fontWeight } from "../../style/global.styles";

interface DropBoxProps {
  isDropped: boolean;
}
interface HeaderProps {
  isHover: boolean;
  isSelected: boolean;
}


export const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 100%;
height: auto;
justify-content: center;
align-items: center;
/* background-color: green; */

`;


export const Div = styled.div`
/* background-color: blue; */
  display: flex;
  flex-direction: row;
 width: 100%;
  height: auto;
  flex-direction: column;
align-items:center;
  &:hover {
    color: #000;
    cursor: pointer;
    background-color: ${hexColors.coal.lightest};
  }
`;
export const Outer_Div_Row_1 = styled.div`
position: relative;
height: 3rem;
width: 100%;
display: flex;
padding: 5px 1.2rem 5px 2rem;
align-items: center;
`;
export const Div_Row_1 = styled.div`

/* padding: 5px; */
  display: flex;
  justify-content: start;
  width: 100%;
  height: auto;
`;

export const HighLightContainer = styled.div`
height: 50px;
width: 10px;
position: absolute;
left: 0;
top: 50%;
transform: translateY(-50%);

/* background-color: blue; */


`;

// export const Highlight = styled.div<HighlightProps>`
// background-color: ${props => props.color};
// width: 5px;
// height: 100%;
// border-top-right-radius: 100px;
// border-bottom-right-radius: 50px;`;

export const Div_Row_2 = styled.div`
  
`;

export const IconContainer = styled.div`
width: 22px;
height: 22px;
position: relative;
`;
export const HeaderContainer = styled.div`
margin-left: 0.4rem;
`;
export const Header = styled.p<HeaderProps>`
  font-size: 19px;
  transform: scaleY(0.95);
  color: ${(props) => {
    if (props.isSelected) {
      return hexColors.raspberry.medium
    }
    if (props.isHover && props) {
      return hexColors.coal.black
    } else return '#494949'

  }};
  font-family: ${fonts.font_2};
  font-weight: ${props => props.isSelected ? "400px" : fontWeight.light};
`;

export const ArrowContainer = styled.div`
width: 22px;
height: 22px;
position: relative;
margin-left: auto;
padding: 0;

`;
export const DropBox = styled.div<DropBoxProps>`
width: 100%;

max-height: ${({ isDropped }) => {
    console.log(isDropped)
    return isDropped ? '400px' : '0px'
  }};
overflow: hidden;
transition: max-height 0.3s ease;
`;

export const SubLinkContainer = styled.div`
padding: 0 1.2rem 0 2.5rem;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
color: #494949;
  &:hover {
    color: #11111D;
    cursor: pointer;
    background-color: #fff;
  }
`;
export const Sublink = styled.p`
padding: 10px 0 10px 0;
font-family: ${fonts.font_2};
font-weight: ${fontWeight.light};
`;

export const IndexContainer = styled.div`
overflow: hidden;
height: 18px;
width: auto;
background-color: ${hexColors.coal.light};
display: flex;
border-radius: 2px;
justify-content: end;
align-items:center;
color: #000;
`;
export const IndexValue = styled.p`
font-family: ${fonts.font_2};
font-weight: ${fontWeight.light};
font-size: 12px;
transform: scaleY(0.8);
padding: 0 5px 0 5px;
`;


