import React, { useState } from 'react';
import {
    CharacterCard,
    CharacterSelectWrapper,
} from './CharacterSelect.styled';

const characters = [
    {
        id: 1,
        image: '/images/bard.webp',
        name: 'Bard',
    },
    {
        id: 2,
        image: 'images/anivia.webp',
        name: 'Anivia',
    },
    {
        id: 3,
        image: 'images/twistedfate.webp',
        name: 'TF',
    },
    {
        id: 4,
        image: 'images/brand.webp',
        name: 'Brand',
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
    const [previewCharacterId, setPreviewCharacterId] = useState(null);

    const handleClick = (evt) => {
        console.log('evt');

        callBackFunc('main-menu-map');
    };

    return (
        <CharacterSelectWrapper>
            {characters.map((character, _, array) => (
                <CharacterCard
                    onClick={(evt) => handleClick(evt)}
                    key={character.id}
                    image={character.image}
                    isFirst={checkIfFirst(character, array)}
                    isLast={checkIfLast(character, array)}
                >
                    {character.name}
                </CharacterCard>
            ))}
        </CharacterSelectWrapper>
    );
}
