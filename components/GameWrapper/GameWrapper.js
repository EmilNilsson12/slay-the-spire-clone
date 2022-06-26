import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import PauseMenu from '../PauseMenu/PauseMenu';

export default function GameWrapper() {
    return (
        <div>
            <PauseMenu />
            <MainMenu />
        </div>
    );
}
