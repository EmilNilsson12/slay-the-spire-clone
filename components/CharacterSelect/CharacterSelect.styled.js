import styled from 'styled-components';
import {
    transitionDurationShort,
    transitionTimingFunction,
    translateLength,
} from '../../styles/variables';

export const CharacterSelectWrapper = styled.div`
    padding: 10px;
    width: 100%;
    background-color: red;
    display: flex;
    justify-content: space-between;
`;

export const CharacterCard = styled.button`
    height: 400px;
    width: 300px;
    background-color: grey;

    background-image: ${(props) => `url(${props.image})`};
    background-position: right;
    background-size: cover;

    filter: blur(1px) grayscale(80%);

    position: relative;
    z-index: 0;

    &:focus,
    &:hover {
        z-index: 1;
        cursor: pointer;
        background-color: black;
        color: white;
        background-position: center;
        filter: unset;

        transform: ${(props) =>
            `
            ${props.isFirst ? `translateX(${translateLength})` : ''} 
            ${props.isLast ? `translateX(-${translateLength})` : ''}
            
            scale(1.4)
            `};
    }

    transition: all ${transitionDurationShort} ${transitionTimingFunction};
`;

// translateY(${translateLength})
