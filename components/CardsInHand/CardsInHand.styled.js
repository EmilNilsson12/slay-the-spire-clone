import styled from 'styled-components';

const offsetY = '800px';
const offsetRotation = '-20deg';

export const CardInHandContainer = styled.div``;

export const CardInHandWrapper = styled.div`
    position: absolute;
    transform-origin: center ${offsetY};

    transform: ${(props) => `rotate(${props.deg}deg)`};
    transition: transform 1s;
`;

export const CardInHand = styled.div`
    background-color: ${(props) => props.cardColor};
    height: 100px;
    width: 40px;
    border-radius: 10px;
    border: 2px solid black;
    box-shadow: 4px 4px 4px 4px yellow;

    transition: transform 1s;

    &:hover {
        transform: scale(1.3);
        cursor: pointer;
    }
`;

export const HandContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;

    transform: rotate(${offsetRotation});
    transform-origin: center ${offsetY};
`;

export const ReferenceDiv = styled.div`
    background-color: black;
    width: 100px;
    height: 100px;
`;
