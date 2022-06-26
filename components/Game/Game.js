import React, { useState } from 'react';
import CharacterSelect from '../CharacterSelect/CharacterSelect';
import MainMenu from '../MainMenu/MainMenu';
import PauseMenu from '../PauseMenu/PauseMenu';
import { GameWrapper } from './Game.styled';

export default function Game() {
    const [view, setView] = useState(null);

    const cb = (arg) => {
        console.log('Game cb');
        console.log(arg);
        setView(arg);
    };

    const getView = () => {
        console.log('current view');
        console.log(view);
        switch (view) {
            case 'main-menu-start':
                return <CharacterSelect callBackFunc={cb} />;

            case 'main-menu-options':
                return <PauseMenu callBackFunc={cb} />;

            default:
                return <MainMenu callBackFunc={cb} />;
        }
    };
    return (
        <GameWrapper>
            {/* <PauseMenu /> */}
            {getView()}
        </GameWrapper>
    );
}
