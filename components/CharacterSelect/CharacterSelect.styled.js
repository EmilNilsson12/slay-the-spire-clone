import styled from 'styled-components';

const transitionDuration = '315ms';

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

    &:hover {
        cursor: pointer;
        background-color: black;
        color: white;
        transform: translate(10px, 15px);
    }

    transition: all ${transitionDuration};
`;
