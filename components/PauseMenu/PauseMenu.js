import React, { useState } from 'react';
import {
    MenuCollapsed,
    PauseMenuList,
    PauseMenuWrapper,
    ToggleMenuBtnWrapper,
} from './PauseMenu.styled';

export default function PauseMenu(callBackFunc) {
    const [menuClosed, setmenuClosed] = useState(true);
    const toggleMenu = () => {
        setmenuClosed(!menuClosed);
    };

    const ToggleMenuBtn = () => (
        <ToggleMenuBtnWrapper onClick={() => toggleMenu()}>
            X
        </ToggleMenuBtnWrapper>
    );

    return (
        <>
            {menuClosed ? (
                <MenuCollapsed>
                    <ToggleMenuBtn />
                </MenuCollapsed>
            ) : (
                <PauseMenuWrapper>
                    <PauseMenuList>
                        <ToggleMenuBtn />
                        <li>
                            <button>Continue</button>
                        </li>
                        <li>
                            <button>Options</button>
                        </li>
                        <li>
                            <button>Exit to Main Menu</button>
                        </li>
                        <li>
                            <button>Exit to Desktop</button>
                        </li>
                    </PauseMenuList>
                </PauseMenuWrapper>
            )}
        </>
    );
}
