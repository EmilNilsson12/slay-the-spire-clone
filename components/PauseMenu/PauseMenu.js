import React, { useState } from 'react';
import {
    MenuCollapsed,
    PauseMenuList,
    PauseMenuWrapper,
    ToggleMenuBtnWrapper,
} from './PauseMenu.styled';

export default function PauseMenu({ prevScreen, cb }) {
    const [menuClosed, setmenuClosed] = useState(true);
    const toggleMenu = (e) => {
        console.log(e.target.classList);
        if (e.target.classList.value.includes('safe-area')) return;
        setmenuClosed(!menuClosed);
    };

    return (
        <>
            {menuClosed ? (
                <MenuCollapsed>
                    <button onClick={(e) => toggleMenu(e)}>
                        Open pause menu
                    </button>
                </MenuCollapsed>
            ) : (
                <PauseMenuWrapper onClick={(e) => toggleMenu(e)}>
                    <PauseMenuList className="safe-area">
                        Pause menu
                        <li>
                            <button onClick={(e) => toggleMenu(e)}>
                                Continue
                            </button>
                        </li>
                        <li>
                            <button onClick={() => cb(prevScreen.path)}>
                                Run from this encounter
                            </button>
                        </li>
                        <li>
                            <button onClick={() => cb(null)}>
                                Exit to Main Menu
                            </button>
                        </li>
                    </PauseMenuList>
                </PauseMenuWrapper>
            )}
        </>
    );
}
