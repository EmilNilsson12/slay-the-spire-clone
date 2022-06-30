import React, { useState } from 'react';
import BattleArea from '../BattleArea/BattleArea';
import CardsInDeck from '../CardsInDeck/CardsInDeck';
import CardsInDiscard from '../CardsInDiscard/CardsInDiscard';
import CardsInHand from '../CardsInHand/CardsInHand';
import { EncounterInner, EncounterWrapper } from './Encounter.styled';

const cardsInDeck = [
    {
        cardNo: 1,
        damage: 30,
        cardColor: 'red',
    },
    {
        cardNo: 2,
        damage: 10,
        cardColor: 'green',
    },
    {
        cardNo: 3,
        damage: 10,
        cardColor: 'green',
    },
    {
        cardNo: 4,
        damage: 20,
        cardColor: 'blue',
    },
    {
        cardNo: 5,
        damage: 30,
        cardColor: 'red',
    },
    {
        cardNo: 6,
        damage: 30,
        cardColor: 'red',
    },
];

export default function Encounter() {
    const NUMBER_OF_CARDS_TO_BE_DRAWN = 3;

    const [cardToBeUsed, setCardToBeUsed] = useState();

    const [cardsInDrawPile, setCardsInDrawPile] = useState(cardsInDeck);
    const [cardsInHand, setCardsInHand] = useState();
    const [cardsInDiscardPile, setCardsInDiscardPile] = useState();

    const callback = (cardId) => {
        console.log('cardId');
        console.log(cardId);
        setCardToBeUsed(cardId);
    };

    const shuffleCards = (deck) => deck;
    const drawCards = (deck, noCards) => deck.splice(0, noCards);

    // Shuffle Cards
    const shuffledCards = shuffleCards([...cardsInDeck]);

    // Send cards down to hand
    const drawnCards = drawCards(
        [...shuffledCards],
        NUMBER_OF_CARDS_TO_BE_DRAWN
    );

    return (
        <EncounterWrapper>
            <EncounterInner>
                <BattleArea cardToBeUsed={cardToBeUsed} />
                <CardsInDeck drawnCards={drawnCards} callback={callback} />
                <CardsInHand drawnCards={drawnCards} callback={callback} />
                <CardsInDiscard drawnCards={drawnCards} callback={callback} />
            </EncounterInner>
        </EncounterWrapper>
    );
}
