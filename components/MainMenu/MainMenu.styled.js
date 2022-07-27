import styled from 'styled-components';

export const MainMenuWrapper = styled.div`
    background-image: url('/images/backgrounds/start-page-clouds.jpg');
    background-size: cover;
    position: relative;

    background-color: grey;
    width: 100%;
    height: 100vh;

    display: grid;
    place-items: center;

    animation-name: background-mood;
    animation-duration: 5000ms;
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes background-mood {
        0% {
            filter: saturate(0) hue-rotate(0deg);
        }
        50% {
            filter: saturate(1) hue-rotate(100deg);
        }
        100% {
            filter: saturate(2) hue-rotate(150deg);
        }
    }
`;
export const MainMenuHeading = styled.h1`
    position: relative;
    top: -200px;

    font-size: 72px;
`;

export const MainMenuList = styled.ul`
    position: absolute;

    margin: 0;
    padding: 0;
    bottom: 50px;
    left: 200px;
`;

export const MainMenuListItem = styled.li`
    display: block;
    width: 100%;
`;
export const MainMenuListItemBtn = styled.button`
    width: 100%;
    background-color: transparent;
    padding: 0;
    border: none;
    &:hover,
    &:focus {
        cursor: pointer;
        span {
            transition: all 200ms ease-out;
            transform: translateX(20px);
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 0) 100%
            );
            color: black;
        }
    }
`;

export const MainMenuListItemBtnTextContainer = styled.span`
    display: inline-block;

    font-size: 32px;
    transition: all 100ms linear;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 100%
    );
    width: 100%;
    text-align: left;
    padding: 10px 20px;
    border-radius: 10px;
`;
