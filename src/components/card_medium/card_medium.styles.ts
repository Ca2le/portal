import styled from "styled-components";
import global from "../../global.styles";
interface IShadow {
    color: string
}

const card = {
    width: 500,
    height: 210,
    h_color: '#1A1A1A',
    p_color: '#666666',
    h_font_size: 24,
    p_font_size: 16,

}

export const Container = styled.div`
    position: relative;
    flex-direction: row;
    height: ${card.height + 5}px;
    width: ${card.width + 5}px;
    margin: 1rem;
`
export const Card = styled.div`
    position: absolute;
    display: flex;
    top: 0%;
    left: 0%;
    height: ${card.height}px;
    width: ${card.width}px;
    z-index: 5;
    background-color: #fff;
    border-radius: 20px;
`

export const Shadow = styled.div<IShadow>`
    position: absolute;
    top: 5px;
    left:5px;
    height: ${card.height}px;
    width: ${card.width}px;
    z-index: 4;
    border-radius: 20px;
   ${props => props.color}
`

export const Div1 = styled.div`
    height: ${card.height}px;
    width: ${(card.width / 3) * 2}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Div = styled.div`
    padding-left: 30px ;
    height: auto;
    width: auto;
`

export const Div2 = styled.div`
    height: ${card.height}px;
    width: ${(card.width / 3)}px;
`
export const Header = styled.p`
    font-family: ${global.font_name_fat};
    font-weight: ${global.font_weight_fat};
    font-size: 30px;
    color: ${card.h_color};
    margin-bottom: auto;
`
export const P = styled.p`
    font-size: 16px;
    font-family: ${global.font_name_reg};
    font-weight: ${global.font_weight_reg};
    color: ${card.p_color};
    margin-top: 8px;
`
export const Img = styled.img`
    
`
