import styled from 'styled-components';

export const BackBtnStyled = styled.button`
    position: absolute;
    z-index: 9999;
    top: 20px;
    left: 20px;
    padding: 30px;
    background-color: blue;
    color: white;
    transition: all 200ms ease-in-out;

    text-align: right;

    &:hover {
        cursor: pointer;
        padding-left: 20px;
        transform: translateX(-10px);
        background-color: darkblue;
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;
    }
`;
