import React from 'react';
import {
    MainMenuList,
    MainMenuListItem,
    MainMenuListItemBtn,
    MainMenuListItemBtnTextContainer,
    MainMenuWrapper,
} from './MainMenu.styled';

export default function MainMenu({ callBackFunc }) {
    const handleClick = (evt) => {
        console.log('evt');

        callBackFunc(evt.target.id);
    };
    return (
        <MainMenuWrapper>
            <MainMenuList>
                <MainMenuListItem>
                    <MainMenuListItemBtn
                        id="main-menu-start"
                        onClick={(evt) => handleClick(evt)}
                    >
                        <MainMenuListItemBtnTextContainer>
                            Start new game
                        </MainMenuListItemBtnTextContainer>
                    </MainMenuListItemBtn>
                </MainMenuListItem>
                {/* <li>
                    <button
                        id="main-menu-options"
                        onClick={(evt) => handleClick(evt)}
                    >
                        Options menu
                    </button>
                </li> */}
            </MainMenuList>
        </MainMenuWrapper>
    );
}
