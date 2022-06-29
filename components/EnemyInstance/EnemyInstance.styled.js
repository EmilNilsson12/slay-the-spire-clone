import styled from 'styled-components';
import {
    boxshadowSpreadBottom,
    boxshadowSpreadTop,
    healthBarHoverDistance,
} from '../../styles/variables';

export const EnemyInstanceWrapper = styled.div`
    margin: 40px;
    /* background-color: darkcyan; */
    height: 100px;
    width: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const EnemyHitbox = styled.button`
    width: 100%;
    height: 200px;
`;

export const EnemyHealthbar = styled.progress`
    width: 100%;

    margin-bottom: 20px;

    transform: translateY(0);
    animation: hover-up-and-down 1s infinite linear;
    box-shadow: 0 5px 10px 1px black;

    @keyframes hover-up-and-down {
        0% {
            transform: translateY(0);
        }
        25% {
            box-shadow: 0 5px 10px 1px black;
            transform: translateY(${healthBarHoverDistance});
        }
        50% {
            transform: translateY(0px);
        }
        75% {
            box-shadow: 0 8px 20px 1px black;
            transform: translateY(-${healthBarHoverDistance});
        }
        100% {
            transform: translateY(0);
        }
    }
`;
