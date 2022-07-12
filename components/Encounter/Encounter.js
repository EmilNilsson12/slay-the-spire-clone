import React, { useEffect, useState } from 'react';
import BackBtn from '../BackBtn/BackBtn';
import BattleArea from '../BattleArea/BattleArea';
import CardsInDeck from '../CardsInDeck/CardsInDeck';
import CardsInDiscard from '../CardsInDiscard/CardsInDiscard';
import CardsInHand from '../CardsInHand/CardsInHand';
import {
    CardArea,
    DeveloperInsights,
    EncounterInner,
    EncounterWrapper,
} from './Encounter.styled';

export default function Encounter({
    prevScreen,
    callBackFunc,
    deck: DECK_OF_CARDS_ARRAY,
}) {
    const [cardsInDiscardPile, setCardsInDiscardPile] = useState([]);
    console.log('cardsInDiscardPile');
    console.log(cardsInDiscardPile);

    const discardedCards = (playableCard) => {
        const cardIsNotDiscarded = !cardsInDiscardPile.find(
            (discardedCard) => discardedCard.cardNo === playableCard.cardNo
        );

        console.log('cardIsNotDiscarded');
        console.log(cardIsNotDiscarded);
        // Return true if card is not discarded
        return cardIsNotDiscarded;
    };
    console.log('DECK_OF_CARDS_ARRAY');
    console.log(DECK_OF_CARDS_ARRAY);

    const NUMBER_OF_CARDS_TO_BE_DRAWN = 3;

    const [cardToBeUsed, setCardToBeUsed] = useState();

    // const [cardsInDrawPile, setCardsInDrawPile] = useState(cardsInDeck);
    const [playableCards, setPlayableCards] = useState(DECK_OF_CARDS_ARRAY);

    // Doesnt shuffle yet
    const shuffleCards = (deck) => deck;

    // Break out cards from deck and move to hand
    const drawCards = (deck, noCards) => deck.splice(0, noCards);

    // Shuffle Cards
    // const shuffledCards = shuffleCards(cardsInDeck);

    // Send cards down to hand
    // const drawnCards = drawCards(shuffledCards, NUMBER_OF_CARDS_TO_BE_DRAWN);

    const playThisCard = (usedCardId) => {
        console.log(playableCards);
        const cardBeingUsed = playableCards.find(
            (card) => card.cardNo == usedCardId
        );

        setCardsInDiscardPile([...cardsInDiscardPile, cardBeingUsed]);
    };

    useEffect(() => {
        if (!playableCards) return;

        console.log('Runs at start');
        setPlayableCards([...playableCards.filter(discardedCards)]);
    }, [cardsInDiscardPile]);

    // console.log('cardsInDrawPile: ', cardsInDrawPile?.length);
    console.log('playableCards: ', playableCards?.length);
    console.log(playableCards);
    console.log('cardsInDiscardPile: ', cardsInDiscardPile?.length);

    return (
        <EncounterWrapper>
            <BackBtn prevScreen={prevScreen} cb={callBackFunc} />

            <EncounterInner>
                <BattleArea cardToBeUsed={cardToBeUsed} />
                <DeveloperInsights>
                    {/* <div>cardsInDrawPile: {cardsInDrawPile?.length}</div> */}
                    <div>playableCards: {playableCards?.length}</div>
                    <div>cardsInDiscardPile: {cardsInDiscardPile?.length}</div>
                </DeveloperInsights>
                <CardArea>
                    <CardsInDeck cards={DECK_OF_CARDS_ARRAY} />
                    <CardsInHand
                        playableCards={playableCards}
                        playThisCard={playThisCard}
                    />
                    <CardsInDiscard cards={cardsInDiscardPile} />
                </CardArea>
            </EncounterInner>
        </EncounterWrapper>
    );
}
