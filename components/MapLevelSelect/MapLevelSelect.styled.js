import styled from 'styled-components';
import {
    animationDurationLong,
    transitionDuration,
    transitionTimingFunction,
} from '../../styles/variables';

export const MapLevelSelectWrapper = styled.div`
    background-color: darkorange;
    width: 1000px;
    padding: 50px 100px;
    border: 1px solid grey;
    border-radius: 40px;
`;

export const MapGrid = styled.div`
    /* display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px; */
`;

export const LevelIcon = styled.button`
    /* height: 60px; */
    /* width: 50px; */
    margin: 20px;
    background-color: black;
    color: white;
    padding: 40px;
    border-radius: 999px;

    animation: ${(props) =>
        `${
            props.isCurrentRow
                ? `example ${animationDurationLong} infinite ease-out forwards`
                : ''
        }`};

    @keyframes example {
        0% {
            opacity: 0.2;
            transform: scale(1.2);
        }
        0% {
            opacity: 0.5;
            transform: scale(1.4);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    &:hover {
        color: black;

        transform: ${(props) =>
            `${props.isCurrentRow ? 'scale(1.8)' : 'scale(0.8)'}`};
        background-color: ${(props) =>
            `${props.isCurrentRow ? 'white' : 'red'}`};
        cursor: ${(props) =>
            `${props.isCurrentRow ? 'pointer' : 'not-allowed'}`};
    }
    transition: all ${transitionDuration} ${transitionTimingFunction};
`;

export const LevelIconWrapper = styled.div`
    padding: 10px;
    /* background-color: grey; */
`;
export const RowInMap = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;
