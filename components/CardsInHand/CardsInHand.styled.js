import styled from 'styled-components';

const offsetY = '800px';
const offsetRotation = '-20deg';

export const HandContainer = styled.div`
    /* border: 5px dashed black; */

    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: rotate(${offsetRotation});
    transform-origin: center ${offsetY};
`;

export const CardInHandWrapper = styled.div`
    position: absolute;
    transform-origin: center ${offsetY};

    transform: ${(props) => `rotate(${props.deg}deg)`};
    transition: transform 1s;

    z-index: 0;

    &:hover {
        z-index: 1;
        div {
            transform: scale(1.3);
            cursor: pointer;
        }
    }
`;

export const CardInHand = styled.div`
    background-color: ${(props) => props.cardColor};
    height: 140px;
    width: 100px;
    border-radius: 10px;
    border: 2px solid black;
    box-shadow: 4px 4px 4px 4px yellow;

    transition: transform 625ms;

    position: relative;
`;
