import styled from 'styled-components';

export const MainMenuWrapper = styled.nav`
    background-color: grey;
    width: 100%;
    height: 100vh;
    position: relative;
`;

export const MainMenuList = styled.ul`
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 50px;
    left: 100px;
    background-color: red;
`;

export const MainMenuListItem = styled.li`
    width: 100%;
    background-color: green;
    display: block;
`;
export const MainMenuListItemBtn = styled.button`
    width: 100%;
    background-color: transparent;
    padding-left: 10px;
    border: none;
    &:hover {
        cursor: pointer;
        span {
            transition: all 200ms ease-out;
            transform: translateX(10px);
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
    font-size: 32px;
    transition: all 100ms linear;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 100%
    );
    display: inline-block;
    width: 100%;
    text-align: left;
    padding: 10px 20px;
    border-radius: 10px;
`;
