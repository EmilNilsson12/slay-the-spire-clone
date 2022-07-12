import styled from 'styled-components';

export const PauseMenuWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
`;

export const PauseMenuList = styled.div`
    padding: 40px;
    background-color: red;
`;

export const ToggleMenuBtnWrapper = styled.button``;

export const MenuCollapsed = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;
