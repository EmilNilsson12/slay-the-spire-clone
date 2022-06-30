import React, { useState } from 'react';
import CharacterSelect from '../CharacterSelect/CharacterSelect';
import Encounter from '../Encounter/Encounter';
import MainMenu from '../MainMenu/MainMenu';
import MapLevelSelect from '../MapLevelSelect/MapLevelSelect';
import PauseMenu from '../PauseMenu/PauseMenu';
import { BackgroundWrapper, GameWrapper } from './Game.styled';

export default function Game() {
    const [view, setView] = useState(null);

    const cb = (arg) => {
        console.log('Game cb');
        console.log(arg);
        setView(arg);
    };

    const getView = () => {
        switch (view) {
            case 'encounter-enemy':
            // return <Encounter callBackFunc={cb} />;

            case 'main-menu-start':
                return <CharacterSelect callBackFunc={cb} />;

            case 'main-menu-map':
                return <MapLevelSelect callBackFunc={cb} />;

            case 'main-menu-options':
                return <PauseMenu callBackFunc={cb} />;

            default:
                return <Encounter callBackFunc={cb} />;
        }
    };
    return (
        <GameWrapper>
            {/* <PauseMenu /> */}
            {getView()}
        </GameWrapper>
    );
}
