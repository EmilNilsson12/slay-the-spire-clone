import React, { useState } from 'react';
import { myToggleHook } from '../../hooks/myToggleHook';
import BackBtn from '../BackBtn/BackBtn';
import {
    CharacterCard,
    CharacterCardContainer,
    CharacterCardContainerWrapper,
    CharacterSelectWrapper,
    EmbarkButton,
    SelectCharacterPrompt,
    SelectedCharacterBio,
    SelectedCharacterBioWrapper,
    SelectedCharacterSplashArt,
} from './CharacterSelect.styled';

const characters = [
    {
        id: 1,
        name: 'Bard',
        image: '/images/bard.webp',
        description: 'Bard uses meeps and portals to outsmart his enemies 🤔',
    },
    {
        id: 2,
        name: 'Anivia',
        image: 'images/anivia.webp',
        description:
            'Anivia uses ice walls and blizzards to control her surroundings 🥶',
    },
    {
        id: 3,
        name: 'Twisted Fate',
        image: 'images/twistedfate.webp',
        description:
            'Twisted fate uses cards and tricks to decieve his enemies 😈',
    },
    {
        id: 4,
        name: 'Brand',
        image: 'images/brand.webp',
        description: 'Brand just wants to watch the world burn 🥵',
    },
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const checkIfFirst = (character, array) => {
    const _firstIndex = 0;
    return array.indexOf(character) === _firstIndex;
};

const checkIfLast = (character, array) => {
    const _lastIndex = array.length - 1;
    return array.indexOf(character) === _lastIndex;
};

export default function CharacterSelect({ prevScreen, callBackFunc }) {
    const [previewCharacterId, setPreviewCharacterId] = useState();

    const [bioAnimationPlaying, setBioAnimationPlaying] = useState(false);
    const [backgroundAnimationPlaying, setBackgroundAnimationIsPlaying] =
        useState(false);
    const [bioVisible, setBioVisible] = useState(false);

    const backgroundMusic = React.createRef();
    const cawcawshortRef = React.createRef();
    const cawcawlongRef = React.createRef();
    const fireRef = React.createRef();
    const fire2Ref = React.createRef();
    const babychicktweetRef = React.createRef();
    const bahhumbugRef = React.createRef();
    const cashmachinekachingRef = React.createRef();
    const characterselectedsoundRef = React.createRef();
    const evillaughRef = React.createRef();
    const glassbreaksRef = React.createRef();
    const hahahalaughRef = React.createRef();
    const obnoxiouswhistleRef = React.createRef();
    const slotmachinewinRef = React.createRef();
    const partyhornRef = React.createRef();

    const soundfxRefs = [
        {
            character: 1,
            fx: [bahhumbugRef, partyhornRef, obnoxiouswhistleRef],
        },
        {
            character: 2,
            fx: [cawcawshortRef, cawcawlongRef, babychicktweetRef],
        },
        {
            character: 3,
            fx: [hahahalaughRef, slotmachinewinRef, cashmachinekachingRef],
        },
        {
            character: 4,
            fx: [evillaughRef, fireRef, fire2Ref],
        },
    ];

    // Global let bc its modified in both click event
    let characterNoise;

    const handleCharacterCardClick = (clickedCharacterId) => {
        setBioVisible(true);

        // Only animate character bio if new character clicked
        if (clickedCharacterId !== previewCharacterId) {
            myToggleHook(setBioAnimationPlaying, 500);
        }

        // Always animate background
        myToggleHook(setBackgroundAnimationIsPlaying, 500);

        setPreviewCharacterId(clickedCharacterId);

        characterNoise = soundfxRefs.find(
            (obj) => obj.character === clickedCharacterId
        ).fx[getRandomInt(0, 3)];

        backgroundMusic.current.play();
        characterNoise.current.play();
    };

    const embark = () => {
        backgroundMusic?.current?.pause();

        setTimeout(() => {
            glassbreaksRef?.current?.play();
        }, 100);

        setTimeout(() => {
            callBackFunc('main-menu-map');
        }, 1200);
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
            <BackBtn prevScreen={prevScreen} cb={callBackFunc} />
            <SelectedCharacterBio
                className={bioAnimationPlaying && 'animated'}
                stayTranslated={bioVisible}
            >
                {previewCharacterId && previewCharacter?.description}
            </SelectedCharacterBio>
            {!previewCharacter && (
                <SelectCharacterPrompt>
                    Select one of the following characters
                </SelectCharacterPrompt>
            )}
            <CharacterCardContainer characterSelected={previewCharacterId}>
                {characters.map((character, _, array) => (
                    <CharacterCard
                        onClick={() => handleCharacterCardClick(character.id)}
                        key={character.id}
                        image={character.image}
                        isFirst={checkIfFirst(character, array)}
                        isLast={checkIfLast(character, array)}
                        bigBtns={!previewCharacterId}
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
            {/* ALWAYS PLAYING */}
            <audio loop src="music/extremeaction.mp3" ref={backgroundMusic} />
            {/* ALWAYS PLAYING */}

            {/* CHARACTER ICON CLICKED */}
            <audio
                src="soundfx/characterselectedsound.wav"
                ref={characterselectedsoundRef}
            />
            {/* CHARACTER ICON CLICKED */}

            {/* EMBARK CLICKED */}
            <audio src="soundfx/glassbreaks.wav" ref={glassbreaksRef} />
            {/* EMBARK CLICKED */}

            {/* BARD NOISED */}
            <audio src="soundfx/bahhumbug.wav" ref={bahhumbugRef} />
            <audio src="soundfx/partyhorn.wav" ref={partyhornRef} />
            <audio
                src="soundfx/obnoxiouswhistle.wav"
                ref={obnoxiouswhistleRef}
            />
            {/* BARD NOISED */}

            {/* ANIVIA NOISED */}
            <audio src="soundfx/crowcawshort.wav" ref={cawcawshortRef} />
            <audio src="soundfx/crowcawlong.wav" ref={cawcawlongRef} />
            <audio src="soundfx/babychicktweet.wav" ref={babychicktweetRef} />
            {/* ANIVIA NOISED */}

            {/* TWISTED FATE NOISED */}
            <audio src="soundfx/hahahalaugh.wav" ref={hahahalaughRef} />
            <audio src="soundfx/slotmachinewin.wav" ref={slotmachinewinRef} />
            <audio
                src="soundfx/cashmachinekaching.wav"
                ref={cashmachinekachingRef}
            />
            {/* TWISTED FATE NOISED */}

            {/* BRAND NOISED */}
            <audio src="soundfx/evillaugh.wav" ref={evillaughRef} />
            <audio src="soundfx/fire.wav" ref={fireRef} />
            <audio src="soundfx/fire2.wav" ref={fire2Ref} />
            {/* BRAND NOISED */}
        </CharacterSelectWrapper>
    );
}
