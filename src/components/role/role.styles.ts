// Login.styles.ts
import styled from 'styled-components';
import global from '../../style/global.styles';

export const Container = styled.div`
    position: relative;
    width: auto;
    height: 100%;
    margin-left: 2px;
`
export const Div = styled.div<{ color: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 3.5px;
    padding-right: 3.5px;
    margin: auto;
    margin-bottom: 50%;
    height: 14px;
    width: auto;
    border: solid 0.1px #fff;
    ${props => props.color}
    border-radius: 50px;
    box-shadow: 2px 2px 0px #26223D;
`

export const P = styled.p`
    color: #FFF;
    font-family: ${global.font_name_fat};
    font-weight: ${global.font_weight_fat};
    font-size: 8px;
    transform: scaleY(1.2);
    letter-spacing: -0.3px;
    text-shadow: 1px 1px 0px #26223D;
`;