import styled from 'styled-components';

const height = 100;

export const BackBtnStyled = styled.button`
    padding: 10px;
    border: none;
    position: fixed;
    top: 10%;
    left: 10%;

    background-color: blue;
    color: white;
    height: ${() => `${height}px`};
    &:hover {
        cursor: pointer;
        background-color: darkblue;

        box-shadow: -20px 10px 100px white;
        transition: all 10ms ease;

        .outer {
            .inner {
                background-color: darkblue;
                transform: rotate3d(0, 0, 1, 0deg);
            }
        }
    }
`;

export const BackBtnStyledArrowOuter = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    height: ${() => `${height / Math.sqrt(2)}px`};
    width: ${() => `${height / Math.sqrt(2)}px`};
    transform: translateY(-50%) rotateZ(45deg);
`;

export const BackBtnStyledInner = styled.div`
    position: relative;
    background-color: blue;
    top: 0;
    left: 0;
    height: ${() => `${height / Math.sqrt(2)}px`};
    width: ${() => `${height / Math.sqrt(2)}px`};
    transform: rotateY(90deg) rotateZ(45deg);

    transition: transform 100ms ease;
`;

export const BackBtnStyledText = styled.span`
    position: relative;
    z-index: 1;
`;
