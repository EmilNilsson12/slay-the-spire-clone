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

        backgroundMusic.current.play();

        characterselectedsoundRef.current.play();
        switch (clickedCharacterId) {
            // Bard sounds
            case 1:
                Math.random() > 0.66
                    ? partyhornRef.current.play()
                    : Math.random() > 0.33
                    ? obnoxiouswhistleRef.current.play()
                    : bahhumbugRef.current.play();
                break;

            // Anivia sounds
            case 2:
                snowstormRef.current.play();
                Math.random() > 0.5
                    ? cawcawshortRef.current.play()
                    : cawcawlongRef.current.play();
                babychicktweetRef.current.play();
                break;

            // Twisted fate sounds
            case 3:
                Math.random() > 0.5
                    ? hahahalaughRef.current.play()
                    : slotmachinewinRef.current.play();

                break;

            // Brand sounds
            case 4:
                Math.random() > 0.5
                    ? evillaughRef.current.play()
                    : fireRef.current.play();

                break;

            default:
                growlRef.current.play();
                break;
        }
    };

    const embark = () => {
        callBackFunc('main-menu-map');
    };

    const previewCharacter = characters.find(
        (character) => character.id === previewCharacterId
    );

    const backgroundMusic = React.createRef();
    const growlRef = React.createRef();
    const snowstormRef = React.createRef();
    const cawcawshortRef = React.createRef();
    const cawcawlongRef = React.createRef();
    const fireRef = React.createRef();
    const fire2Ref = React.createRef();
    const babychicktweetRef = React.createRef();
    const bahhumbugRef = React.createRef();
    const bensoundsavehumanityRef = React.createRef();
    const cashmachinekachingRef = React.createRef();
    const characterselectedsoundRef = React.createRef();
    const evillaughRef = React.createRef();
    const glassbreaksRef = React.createRef();
    const hahahalaughRef = React.createRef();
    const obnoxiouswhistleRef = React.createRef();
    const slapRef = React.createRef();
    const slotmachinewinRef = React.createRef();
    const partyhornRef = React.createRef();

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
            <audio src="music/extremeaction.mp3" ref={backgroundMusic} />

            <audio src="music/growl.wav" ref={growlRef} />
            <audio src="music/snowstorm.wav" ref={snowstormRef} />
            <audio src="music/crowcawshort.wav" ref={cawcawshortRef} />
            <audio src="music/crowcawlong.wav" ref={cawcawlongRef} />
            <audio src="music/fire.wav" ref={fireRef} />
            <audio src="music/fire2.wav" ref={fire2Ref} />
            <audio src="music/babychicktweet.wav" ref={babychicktweetRef} />

            <audio src="music/bahhumbug.wav" ref={bahhumbugRef} />
            <audio
                src="music/bensoundsavehumanity.mp3"
                ref={bensoundsavehumanityRef}
            />
            <audio
                src="music/cashmachinekaching.wav"
                ref={cashmachinekachingRef}
            />
            <audio
                src="music/characterselectedsound.wav"
                ref={characterselectedsoundRef}
            />
            <audio src="music/evillaugh.wav" ref={evillaughRef} />
            <audio src="music/glassbreaks.wav" ref={glassbreaksRef} />
            <audio src="music/hahahalaugh.wav" ref={hahahalaughRef} />
            <audio src="music/obnoxiouswhistle.wav" ref={obnoxiouswhistleRef} />
            <audio src="music/slap.wav" ref={slapRef} />
            <audio src="music/slotmachinewin.wav" ref={slotmachinewinRef} />
            <audio src="music/partyhorn.wav" ref={partyhornRef} />
        </CharacterSelectWrapper>
    );
}
