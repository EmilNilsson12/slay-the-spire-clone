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

export const EnemyHealthBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    margin-bottom: 20px;

    transform: translateY(0);
    animation: hover-up-and-down 1s infinite linear;

    @keyframes hover-up-and-down {
        0% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(${healthBarHoverDistance});
        }
        50% {
            transform: translateY(0px);
        }
        75% {
            transform: translateY(-${healthBarHoverDistance});
        }
        100% {
            transform: translateY(0);
        }
    }
`;

export const EnemyHealthbar = styled.meter`
    height: 30px;
    width: 100%;
`;
