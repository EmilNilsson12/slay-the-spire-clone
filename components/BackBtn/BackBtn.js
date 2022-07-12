import React from 'react';
import { BackBtnStyled } from './BackBtn.styled';

export default function BackBtn({ prevScreen, cb }) {
    const { path, name } = prevScreen;
    return (
        <BackBtnStyled onClick={() => cb(path)}>
            Return to: {name}
        </BackBtnStyled>
    );
}
