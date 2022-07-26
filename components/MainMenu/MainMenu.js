import React from 'react';
import {
    MainMenuHeading,
    MainMenuList,
    MainMenuListItem,
    MainMenuListItemBtn,
    MainMenuListItemBtnTextContainer,
    MainMenuWrapper,
} from './MainMenu.styled';

const links = [
    {
        displayName: 'Start new game',
        idName: 'main-menu-start',
    },
    {
        displayName: 'Statistics',
        idName: 'main-menu-start',
    },
    {
        displayName: 'Settings',
        idName: 'main-menu-start',
    },
    {
        displayName: 'About us',
        idName: 'main-menu-start',
    },
];

export default function MainMenu({ callBackFunc }) {
    const handleClick = (evt) => {
        const id = evt.target.id || evt.target.parentNode.id;
        console.log('id');
        console.log(id);

        callBackFunc(id);
    };
    return (
        <MainMenuWrapper>
            <MainMenuHeading>Slay the Spire clone</MainMenuHeading>
            <MainMenuList>
                {links.map((link) => (
                    <MainMenuListItem key={link.idName}>
                        <MainMenuListItemBtn
                            id={link.idName}
                            onClick={(evt) => handleClick(evt)}
                        >
                            <MainMenuListItemBtnTextContainer>
                                {link.displayName}
                            </MainMenuListItemBtnTextContainer>
                        </MainMenuListItemBtn>
                    </MainMenuListItem>
                ))}
            </MainMenuList>
        </MainMenuWrapper>
    );
}
