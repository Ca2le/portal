// Login.styles.ts
import styled from 'styled-components';
import global, { colorBook } from '../../global.styles';

const paddingLeft = '25'

export const Container = styled.div`
    width: 400px;
    height: 100vh;
    background-color: #26223D;
`;

export const Profile = styled.div`
    margin-top: 20px;
    height: 125px;
    width: 100%;
    background-color: #332E45;
    display: flex;
    align-items: center;
    padding-left: ${paddingLeft}px;
    box-shadow: 0 5px 10px #201E33;
`;

export const Img = styled.div`
    height: 80px;
    width: 80px;
    border-radius: 100px;
    ${colorBook.smurfs}
`;

export const TextArea = styled.div`
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    grid-template-columns: auto;
    width: auto;
    height: 100%;
    margin-left: 15px;
`;

export const HeaderDiv = styled.div`
    grid-row-start: 2;
    grid-row-end: 3;
    align-self: center;
    display: flex;
    height: auto;
    width: 100%;
`;


export const Name = styled.p`
    font-family: ${global.font_name_fat};
    font-weight: ${global.font_weight_fat};
    font-size: 32px;
    color: #fff;
    text-shadow: 2px 2px 4px #26223D;
`;
export const ID = styled.div`
    grid-row-start: 3;
    grid-row-end: 4;
    
    /* line-height: 0.5px; */
    font-family: ${global.font_name_fat};
    font-weight: ${global.font_weight_fat};
    font-size: 12px;
    color: #AAA3D1;    
`;
export const LinkContainer = styled.div`
    margin-top: 50px;
    height: auto;
    width: 100%;
    color: #AAA3D1;
    font-family: ${global.font_name_fat};
    padding-left: 100px;
`;
