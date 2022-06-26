import styled from 'styled-components';

export const MapLevelSelectWrapper = styled.div`
    background-color: darkorange;
    width: 800px;
    padding: 50px;
    border: 1px solid grey;
    border-radius: 40px;
`;

export const MapGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const LevelIcon = styled.div`
    grid-column: ${(props) => `${props.startNum} / span ${props.spanNum}`};
    background-color: azure;
    height: 60px;
    width: 50px;
`;
