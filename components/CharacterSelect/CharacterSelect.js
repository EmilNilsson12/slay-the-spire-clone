import React, { useState } from 'react';
import { myToggleHook } from '../../hooks/myToggleHook';
import {
    CharacterCard,
    CharacterCardContainer,
    CharacterCardContainerWrapper,
    CharacterSelectWrapper,
    EmbarkButton,
    SelectedCharacterBio,
    SelectedCharacterBioWrapper,
    SelectedCharacterSplashArt,
} from './CharacterSelect.styled';

const characters = [
    {
        id: 1,
        image: '/images/bard.webp',
        name: 'Bard',
        description: 'Bard uses meeps and portals to outsmart his enemies',
    },
    {
        id: 2,
        image: 'images/anivia.webp',
        name: 'Anivia',
        description:
            'Anivia uses ice walls and blizzards to control her surrounding',
    },
    {
        id: 3,
        image: 'images/twistedfate.webp',
        name: 'TF',
        description:
            'Twisted fate uses cards and tricks to decieve his enemies',
    },
    {
        id: 4,
        image: 'images/brand.webp',
        name: 'Brand',
        description: 'Brand just wants to watch the world burn',
    },
];

const checkIfFirst = (character, array) => {
    const _firstIndex = 0;
    return array.indexOf(character) === _firstIndex;
};

const checkIfLast = (character, array) => {
    const _lastIndex = array.length - 1;
    return array.indexOf(character) === _lastIndex;
};

export default function CharacterSelect({ callBackFunc }) {
    const [previewCharacterId, setPreviewCharacterId] = useState();

    const [bioAnimationPlaying, setBioAnimationPlaying] = useState(false);
    const [backgroundAnimationPlaying, setBackgroundAnimationIsPlaying] =
        useState(false);
    const [bioVisible, setBioVisible] = useState(false);

    const handleCharacterCardClick = (clickedCharacterId) => {
        setBioVisible(true);

        if (clickedCharacterId !== previewCharacterId) {
            myToggleHook(setBioAnimationPlaying, 500);
        }

        myToggleHook(setBackgroundAnimationIsPlaying, 500);

        setPreviewCharacterId(clickedCharacterId);
    };

    const embark = () => {
        callBackFunc('main-menu-map');
    };

    const previewCharacter = characters.find(
        (character) => character.id === previewCharacterId
    );

    return (
        <CharacterSelectWrapper>
            <SelectedCharacterSplashArt
                className={backgroundAnimationPlaying && 'animated'}
                imageSrc={previewCharacter?.image}
            />
            <SelectedCharacterBio
                className={bioAnimationPlaying && 'animated'}
                stayTranslated={bioVisible}
            >
                {previewCharacterId && previewCharacter?.description}
            </SelectedCharacterBio>
            <CharacterCardContainer>
                {characters.map((character, _, array) => (
                    <CharacterCard
                        onClick={() => handleCharacterCardClick(character.id)}
                        key={character.id}
                        image={character.image}
                        isFirst={checkIfFirst(character, array)}
                        isLast={checkIfLast(character, array)}
                    >
                        {character.name}
                    </CharacterCard>
                ))}
            </CharacterCardContainer>
            {previewCharacterId && (
                <EmbarkButton onClick={() => embark()}>
                    Select this character
                </EmbarkButton>
            )}
        </CharacterSelectWrapper>
    );
}
