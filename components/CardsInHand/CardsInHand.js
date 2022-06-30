import React, { useState } from 'react';
import {
    CardInHand,
    CardInHandWrapper,
    HandContainer,
    ReferenceDiv,
} from './CardsInHand.styled';

const getDeg = (index, array) => {
    const NUMBER_OF_CARDS = array.length;
    const DEGREES_BETWEEN_FIRST_AND_LAST = 40;

    const degsBetweenEachCard =
        DEGREES_BETWEEN_FIRST_AND_LAST / (NUMBER_OF_CARDS - 1);

    return degsBetweenEachCard * index;
};
export default function CardsInHand({ playableCards, playThisCard }) {
    const [cardActive, setCardActive] = useState();

    console.log('CardsInHand playableCards');
    console.log(playableCards);

    const handleClick = (cardClicked) => {
        // console.log('cardClicked');
        // console.log(cardClicked);

        // console.log('cardClicked === cardActive');
        // console.log(cardClicked === cardActive);
        // if (cardClicked === cardActive) {
        //     playThisCard(null);
        //     setCardActive(null);
        // }
        playThisCard(cardClicked);
        // setCardActive(cardClicked);
    };

    return (
        <HandContainer>
            {playableCards?.map((card, index, array) => (
                <CardInHandWrapper key={card.cardNo} deg={getDeg(index, array)}>
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
