import styled from "styled-components"

interface TextProps {
    header: 'false' | 'true'
}

export const Div = styled.div`
    position: relative;
    display: flex;
    width: auto;
    height: 100%;
`
export const Text = styled.p<TextProps>`
    padding-left: 5px;
    font-size: ${({ header }: TextProps) => header === 'true' ? '30px' : '20px'};
    margin: ${({ header }: TextProps) => header === 'true' ? '5px' : '2px'};;
    margin-left: ${({ header }: TextProps) => header === 'true' ? '0' : '10px'};;
    &:hover {
    transform: scale(1.01);
    color: #fff;
    padding-left: 1%;
    cursor: pointer;
  }
`

