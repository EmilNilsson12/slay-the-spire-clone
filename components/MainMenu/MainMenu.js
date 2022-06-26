import React from 'react';
import { MainMenuWrapper } from './MainMenu.styled';

export default function MainMenu({ callBackFunc }) {
    const handleClick = (evt) => {
        console.log('evt');

        callBackFunc(evt.target.id);
    };
    return (
        <MainMenuWrapper>
            <ul>
                <li>
                    <button
                        id="main-menu-start"
                        onClick={(evt) => handleClick(evt)}
                    >
                        Start new game
                    </button>
                </li>
                {/* <li>
                    <button
                        id="main-menu-options"
                        onClick={(evt) => handleClick(evt)}
                    >
                        Options menu
                    </button>
                </li> */}
            </ul>
        </MainMenuWrapper>
    );
}
