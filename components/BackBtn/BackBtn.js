import React from 'react';
import {
    BackBtnStyled,
    BackBtnStyledArrowOuter,
    BackBtnStyledInner,
    BackBtnStyledText,
} from './BackBtn.styled';

export default function BackBtn({ prevScreen, cb }) {
    const { path, name } = prevScreen;
    return (
        <BackBtnStyled onClick={() => cb(path)}>
            <BackBtnStyledArrowOuter className="outer">
                <BackBtnStyledInner className="inner" />
            </BackBtnStyledArrowOuter>
            <BackBtnStyledText> Return to: {name}</BackBtnStyledText>
        </BackBtnStyled>
    );
}
