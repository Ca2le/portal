import styled from "styled-components"
import { fontWeight, fonts } from "../../../style/global.styles"

export const GridContainer = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: 10rem auto;

`

export const WelcomeSection = styled.div`
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 1;
grid-column-end: 2;
display: flex;
align-items: center;
justify-content: start;
padding-left: 4rem;
`


export const WelcomeText = styled.p`
font-size: 20px;
font-family: ${fonts.font_1};
font-weight: ${fontWeight.bold};
`


export const Div = styled.div`

`

export const ShortcutSection = styled.div`
display: grid;
grid-row-start: 2;
grid-row-end: 4;
grid-column-start: 1;
grid-column-end: 2;
grid-template-columns: 1fr 1fr;
margin-bottom: auto;
gap: 1rem;
margin-left: 1rem;
min-width: 64rem;


`
export const H = styled.p`
`
