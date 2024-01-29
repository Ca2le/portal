import styled from "styled-components";
import { hexColors } from "../../style/global.styles";
interface ArrowProps {
    dropped: boolean;
}

const SVG = styled.svg<ArrowProps>`
    transform: translateY(-50%) ${({ dropped }) => dropped ? 'rotate(180deg)' : 'rotate(0deg)'};
    position: absolute;
    fill: ${hexColors.coal.dark};
    width: 15px;
    height: 15px;
    right: 0;
    top: 50%;
    transform-origin: center;
`;


const DropArrow = ({ dropped }: ArrowProps) => {

    return (
        <SVG viewBox="0 0 20 20" dropped={dropped}>
            {dropped ? null : <path d="m10,20c-.43,0-.79-.35-.79-.79V.79c0-.43.35-.79.79-.79s.79.35.79.79v18.43c0,.43-.35.79-.79.79Z" />}
            <path d="m19.21,10.79H.79c-.43,0-.79-.35-.79-.79s.35-.79.79-.79h18.43c.43,0,.79.35.79.79s-.35.79-.79.79Z" />
        </SVG>
    );
};

export default DropArrow;
