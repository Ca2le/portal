import styled from "styled-components";
import { fontWeight, fonts } from "../../style/global.styles";

const card = {
    width: 500,
    height: 210,
    h_color: '#1A1A1A',
    p_color: '#666666',
    h_font_size: 21,
    p_font_size: 16,

}

export const Container = styled.div`
    position: relative;
    flex-direction: row;
    height: ${card.height + 5}px;
    width: ${card.width + 5}px;
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
    width: ${card.width / 3}px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 20px 20px 0px;
`
export const Header = styled.p`
    font-family: ${fonts.font_1};
    font-size: ${card.h_font_size}px;
    font-weight: ${fontWeight.bold};
    color: ${card.h_color};
    margin-bottom: auto;
`
export const P = styled.p`
    font-size: 16px;
    font-family: ${fonts.font_2};
    color: ${card.p_color};
    font-weight: ${fontWeight.light};
    margin-top: 8px;
`
export const IMG = styled.img`
    width: 100px;
`
