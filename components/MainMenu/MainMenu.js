import React from 'react';
import { MainMenuWrapper } from './MainMenu.styled';

export default function MainMenu({ callBackFunc }) {
    const handeClick = (evt) => {
        console.log('evt');

        callBackFunc(evt.target.id);
    };
    return (
        <MainMenuWrapper>
            <ul>
                <li>
                    <button
                        id="main-menu-start"
                        onClick={(evt) => handeClick(evt)}
                    >
                        Start new game
                    </button>
                </li>
                <li>
                    <button
                        id="main-menu-options"
                        onClick={(evt) => handeClick(evt)}
                    >
                        Options menu
                    </button>
                </li>
            </ul>
        </MainMenuWrapper>
    );
}
