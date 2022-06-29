import styled from 'styled-components';
import {
    animationDurationCardHover,
    boxshadowHoverBlur,
    boxshadowHoverDistance,
    boxshadowHoverSpreadBig,
    boxshadowHoverSpreadSmall,
    boxshadowIdle,
    offsetRotation,
    offsetY,
    transitionDuration,
} from '../../styles/variables';

export const HandContainer = styled.div`
    /* Uncomment to debug */
    /* border: 5px dashed black; */

    position: absolute;
    bottom: 100px;
    height: 100px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: rotate(${offsetRotation});
    transform-origin: center ${offsetY};
`;

export const CardInHandWrapper = styled.button`
    background-color: transparent;
    border: none;

    position: absolute;
    transform-origin: center ${offsetY};

    transform: ${(props) => `rotate(${props.deg}deg)`};
    transition: transform 1s;

    z-index: ${(props) => (props.clicked ? 1 : 0)};
    cursor: pointer;

    & > {
        transform: ${(props) => (props.clicked ? scale(1.3) : '0')};
        animation: ${(props) =>
            props.clicked
                ? `card-hover-2 ${animationDurationCardHover} infinite linear`
                : ''};
    }

    &:hover,
    &:focus {
        z-index: 1;
        div {
            transform: scale(1.3);
            cursor: pointer;

            animation: card-hover-2 ${animationDurationCardHover} infinite
                linear;
        }
    }

    @keyframes card-hover {
        0% {
            box-shadow: 0 ${boxshadowHoverDistance} ${boxshadowHoverBlur}
                ${boxshadowHoverBlur} white;
        }
        12% {
            box-shadow: ${boxshadowHoverDistance} ${boxshadowHoverDistance}
                ${boxshadowHoverBlur} ${boxshadowHoverBlur} white;
        }
        25% {
            box-shadow: ${boxshadowHoverDistance} 0 ${boxshadowHoverBlur}
                ${boxshadowHoverBlur} white;
        }
        37% {
            box-shadow: ${boxshadowHoverDistance} -${boxshadowHoverDistance} ${boxshadowHoverBlur}
                ${boxshadowHoverBlur} white;
        }
        50% {
            box-shadow: 0 -${boxshadowHoverDistance} ${boxshadowHoverBlur} ${boxshadowHoverBlur}
                white;
        }
        62% {
            box-shadow: -${boxshadowHoverDistance} -${boxshadowHoverDistance}
                ${boxshadowHoverBlur} ${boxshadowHoverBlur} white;
        }
        75% {
            box-shadow: -${boxshadowHoverDistance} 0 ${boxshadowHoverBlur} ${boxshadowHoverBlur}
                white;
        }
        87% {
            box-shadow: -${boxshadowHoverDistance} ${boxshadowHoverDistance} ${boxshadowHoverBlur}
                ${boxshadowHoverBlur} white;
        }
        100% {
            box-shadow: 0 ${boxshadowHoverDistance} ${boxshadowHoverBlur}
                ${boxshadowHoverBlur} white;
        }
    }

    @keyframes card-hover-2 {
        0% {
            box-shadow: 0 0 ${boxshadowHoverBlur} ${boxshadowHoverSpreadSmall}
                white;
        }
        50% {
            box-shadow: 0 0 ${boxshadowHoverBlur} ${boxshadowHoverSpreadBig}
                white;
        }
        100% {
            box-shadow: 0 0 ${boxshadowHoverBlur} ${boxshadowHoverSpreadSmall}
                white;
        }
    }
`;

export const CardInHand = styled.div`
    display: grid;
    place-items: center;
    background-color: ${(props) => props.cardColor};
    color: white;
    height: 140px;
    font-size: 20px;
    width: 100px;
    border-radius: 10px;
    border: 2px solid black;
    box-shadow: ${boxshadowIdle} ${boxshadowIdle} 0 0 black;

    position: relative;
    bottom: ${(props) => (props.clicked ? '100px' : '0')};
    border: ${(props) =>
        props.clicked ? '4px dotted gold' : '1px solid black'};

    transition: transform ${transitionDuration},
        box-shadow ${transitionDuration}, bottom ${transitionDuration};
`;
