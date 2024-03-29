import React, { useState } from 'react';
import CharacterSelect from '../CharacterSelect/CharacterSelect';
import Encounter from '../Encounter/Encounter';
import MainMenu from '../MainMenu/MainMenu';
import MapLevelGenerator from '../MapLevelSelect/MapLevelGenerator';
import PauseMenu from '../PauseMenu/PauseMenu';
import { BackgroundWrapper, GameWrapper } from './Game.styled';

const DECK_OF_CARDS_ARRAY = [
    {
        cardNo: 1,
        damage: 30,
        cardColor: 'red',
    },
    {
        cardNo: 2,
        damage: 10,
        cardColor: 'green',
    },
    {
        cardNo: 3,
        damage: 10,
        cardColor: 'green',
    },
    {
        cardNo: 4,
        damage: 20,
        cardColor: 'blue',
    },
    {
        cardNo: 5,
        damage: 30,
        cardColor: 'red',
    },
    {
        cardNo: 6,
        damage: 30,
        cardColor: 'red',
    },
];

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
                return (
                    <Encounter
                        prevScreen={{
                            path: 'main-menu-map',
                            name: 'Level select',
                        }}
                        callBackFunc={cb}
                        deck={DECK_OF_CARDS_ARRAY}
                    />
                );

            case 'main-menu-start':
                return (
                    <CharacterSelect
                        prevScreen={{ path: null, name: 'Main menu' }}
                        callBackFunc={cb}
                    />
                );

            case 'main-menu-map':
                return (
                    <MapLevelGenerator
                        prevScreen={{
                            path: 'main-menu-start',
                            name: 'Character select screen',
                        }}
                        callBackFunc={cb}
                    />
                );

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
