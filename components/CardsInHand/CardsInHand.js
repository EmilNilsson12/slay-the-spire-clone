import React, { useEffect, useState } from 'react';
import {
    CardInHand,
    CardInHandWrapper,
    HandContainer,
    ReferenceDiv,
} from './CardsInHand.styled';

export default function CardsInHand({
    currentChosenCard,
    chooseCardCB,
    playCardCB,
    playableCards,
}) {
    const NUMBER_OF_CARDS = playableCards.length;

    const DEGREES_BETWEEN_FIRST_AND_LAST =
        NUMBER_OF_CARDS <= 1 ? 0 : NUMBER_OF_CARDS * 6;

    const OFFSET_DEGREES = DEGREES_BETWEEN_FIRST_AND_LAST / -2;

    const DEGREES_BETWEEN_EACH_CARD =
        DEGREES_BETWEEN_FIRST_AND_LAST / (NUMBER_OF_CARDS - 1);

    const [playFancyAnimation, setPlayFancyAnimation] = useState(true);

    const handleClick = (cardClicked) => {
        if (currentChosenCard && cardClicked === currentChosenCard) {
            // Second click
            playCardCB(cardClicked);
        } else {
            // First click
            chooseCardCB(cardClicked);
        }

        // Only play fancy animation once
        setPlayFancyAnimation(false);
    };

    return (
        <HandContainer degreesOffset={OFFSET_DEGREES}>
            {playableCards?.map((card, index) => (
                <CardInHandWrapper
                    key={card.cardNo}
                    deg={DEGREES_BETWEEN_EACH_CARD * index}
                    playFancyAnimation={playFancyAnimation}
                >
                    <CardInHand
                        onClick={() => handleClick(card.cardNo)}
                        {...card}
                        clicked={currentChosenCard === card.cardNo}
                    >
                        {card.damage} <br />
                        damage
                    </CardInHand>
                </CardInHandWrapper>
            ))}
        </HandContainer>
    );
}
