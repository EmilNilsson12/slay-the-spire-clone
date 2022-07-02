import styled from 'styled-components';
import {
    animationDurationCardHover,
    transitionDurationShort,
    transitionTimingFunction,
    translateLength,
} from '../../styles/variables';

export const SelectCharacterPrompt = styled.div`
    grid-area: 1 / 2 / 2 / 4;
    height: min-content;
    width: max-content;
    padding: 40px;
    border-radius: 70px;
    box-shadow: 20px 20px 10px 10px rgba(0, 0, 0, 0.5);
    font-size: 40px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: 1px solid rgba(255, 255, 2555, 0.3);
`;

export const CharacterSelectWrapper = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

export const EmbarkButton = styled.button`
    grid-area: 3 / 4 / 4 / 5;
    width: 350px;
    height: 120px;
    border-radius: 30px;
    background-color: green;
    color: white;
    font-size: 30px;

    &:hover,
    &:focus-visible {
        color: black;
        background-color: white;
        cursor: pointer;

        animation-name: choose-character-button-hover;
        animation-duration: 500ms;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        @keyframes choose-character-button-hover {
            0% {
                transform: translateY(5px);
            }
            50% {
                background-color: rgba(0, 255, 80, 0.5);
                transform: translateY(10px);
            }
            100% {
                transform: translateY(-10px);
            }
        }
    }
`;

export const SelectedCharacterBio = styled.div`
    grid-area: 2 / 1 / 4 / 2;
    transform: ${(props) =>
        props.stayTranslated ? 'translate(10%)' : 'translate(-100%)'};

    font-size: 40px;
    color: white;
    border: 1px solid black;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 100px 30px rgba(255, 255, 255, 0.4);
    padding: 30px;
    border-radius: 40px;
    height: min-content;

    &.animated {
        animation-name: character-bio-transition;
        animation-duration: 250ms;
        animation-timing-function: ease-out;
        animation-iteration-count: 1;

        @keyframes character-bio-transition {
            from {
                transform: translate(-100%);
            }
            to {
                transform: translate(10%);
            }
        }
    }
`;

export const CharacterCardContainer = styled.div`
    grid-area: ${(props) =>
        props.characterSelected ? '4 / 2 / 5 / 4' : '2 / 1 / 4 / 5'};

    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const CharacterCard = styled.button`
    height: ${(props) => (props.bigBtns ? '200px' : '100px')};
    width: ${(props) => (props.bigBtns ? '200px' : '100px')};
    /* background-color: grey; */
    border: 5px solid grey;
    border-radius: 10px;

    background-image: ${(props) => `url(${props.image})`};
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;

    filter: blur(1px) grayscale(80%);

    position: relative;
    z-index: 0;
    color: transparent;

    &:focus-visible,
    &:hover {
        z-index: 1;
        cursor: pointer;
        background-color: black;
        color: white;
        filter: unset;
        border: 1px solid grey;
        transform: scale(2);
    }

    transition: all ${transitionDurationShort} linear;
`;

export const SelectedCharacterSplashArt = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100vh;

    background-image: ${(props) => `url('${props.imageSrc}')`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &.animated {
        animation-name: background-image-change;
        animation-duration: 500ms;
        animation-timing-function: linear;
        animation-iteration-count: 1;

        @keyframes background-image-change {
            0% {
                filter: saturate(100%) hue-rotate(0deg);
                transform: translate(0px);
            }
            10% {
                filter: saturate(80%) hue-rotate(90deg);
                transform: translate(-10px);
            }
            20% {
                filter: saturate(500%) invert(100%) hue-rotate(-9deg);
                transform: translate(-10px);
            }
            30% {
                transform: translate(10px);
            }
            40% {
                filter: saturate(200%) hue-rotate(-180deg);
                transform: translate(-60px);
            }
            80% {
                transform: translate(-10px);
            }
            100% {
                transform: translate(0px);
            }
        }
    }
`;
