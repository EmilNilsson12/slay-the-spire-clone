import React, { useEffect, useState } from 'react';
import {
    CardInHand,
    CardInHandWrapper,
    HandContainer,
    ReferenceDiv,
} from './CardsInHand.styled';

export default function CardsInHand({ playableCards, playThisCard }) {
    const NUMBER_OF_CARDS = playableCards.length;

    const DEGREES_BETWEEN_FIRST_AND_LAST =
        NUMBER_OF_CARDS <= 1 ? 0 : NUMBER_OF_CARDS * 6;

    const OFFSET_DEGREES = DEGREES_BETWEEN_FIRST_AND_LAST / -2;

    const DEGREES_BETWEEN_EACH_CARD =
        DEGREES_BETWEEN_FIRST_AND_LAST / (NUMBER_OF_CARDS - 1);

    const [cardActive, setCardActive] = useState();
    const [playFancyAnimation, setPlayFancyAnimation] = useState(true);

    console.log('CardsInHand playableCards');
    console.log(playableCards);

    const handleClick = (cardClicked) => {
        // Only play fancy animation once
        setPlayFancyAnimation(false);

        // console.log('cardClicked');
        // console.log(cardClicked);

        // console.log('cardClicked === cardActive');
        // console.log(cardClicked === cardActive);
        if (cardClicked === cardActive) {
            playThisCard(null);
            setCardActive(null);
        }

        setCardActive(cardClicked);
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
                        clicked={cardActive === card.cardNo}
                    >
                        {card.damage} <br />
                        damage
                    </CardInHand>
                </CardInHandWrapper>
            ))}
        </HandContainer>
    );
}
