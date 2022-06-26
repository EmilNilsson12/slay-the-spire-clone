import React, { useState } from 'react';
import {
    CharacterCard,
    CharacterSelectWrapper,
} from './CharacterSelect.styled';

const characters = ['Bard', 'Anivia', 'TF', 'Brand'];

export default function CharacterSelect() {
    const [previewCharacterId, setPreviewCharacterId] = useState(null);

    // const CharacterCard = ({ characterName }) => (
    //     <CharacterCard>{characterName}</CharacterCard>
    // );
    return (
        <CharacterSelectWrapper>
            {characters.map((name) => (
                <CharacterCard key={name}>{name}</CharacterCard>
            ))}
        </CharacterSelectWrapper>
    );
}
