import styled, { keyframes } from 'styled-components';

// Define the keyframes for the jiggle animation
const smoothGlide = keyframes`
    0% {
        transform: translateX(-100%) translateY(-50%);
    }
    50% {
        transform: scaleX(1.05) translateX(5%)translateY(-50%);
    }
    100% {
        transform: translate(-10%, -50%) scaleX(0.9);
    }
`;


// Create a styled component with the jiggle animation
const SmoothGlideDiv = styled.div`
    animation: ${smoothGlide} 0.5s ease-out;
    position: relative;
    left: 0;
    top: 50%;;
    transform: translate(-10%, -50%) scaleX(0.9) ;
`;

export default SmoothGlideDiv;
