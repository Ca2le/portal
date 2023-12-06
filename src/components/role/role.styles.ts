// Login.styles.ts
import styled from 'styled-components';
import global from '../../global.styles';

export const Container = styled.div`
    position: relative;
    width: auto;
    height: 100%;
    margin-left: 4px;
`
export const Div = styled.div<{ color: string }>`
    position: absolute;
    display: flex;
    top: 0;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    margin: auto;
    margin-bottom: 25%;
    height: 20px;
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
    font-size: 55%;
    transform: scaleY(1.3);
    letter-spacing: -0.3px;
`;