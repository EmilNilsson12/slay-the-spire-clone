import React, { useState } from 'react';
import {
    CardInHand,
    CardInHandWrapper,
    HandContainer,
    ReferenceDiv,
} from './CardsInHand.styled';

const cards = [
    {
        cardNo: 1,
        cardColor: 'red',
    },
    {
        cardNo: 2,
        cardColor: 'green',
    },
    {
        cardNo: 3,
        cardColor: 'green',
    },
    {
        cardNo: 4,
        cardColor: 'blue',
    },
    {
        cardNo: 5,
        cardColor: 'red',
    },
    {
        cardNo: 6,
        cardColor: 'red',
    },
];

const getDeg = (index, array) => {
    const NUMBER_OF_CARDS = array.length;
    const DEGREES_BETWEEN_FIRST_AND_LAST = 40;

    const degsBetweenEachCard =
        DEGREES_BETWEEN_FIRST_AND_LAST / (NUMBER_OF_CARDS - 1);

    return degsBetweenEachCard * index;
};
export default function CardsInHand({ callback }) {
    const [cardActive, setCardActive] = useState();

    const handleClick = (cardClicked) => {
        console.log('cardClicked');
        console.log(cardClicked);

        console.log('cardClicked === cardActive');
        console.log(cardClicked === cardActive);
        if (cardClicked === cardActive) {
            callback(null);
            setCardActive(null);
        }
        callback(cardClicked);
        setCardActive(cardClicked);
    };

    return (
        <HandContainer>
            {cards.map((card, index, array) => (
                <CardInHandWrapper key={card.cardNo} deg={getDeg(index, array)}>
                    <CardInHand
                        onClick={() => handleClick(card.cardNo)}
                        {...card}
                        clicked={cardActive === card.cardNo}
                    >
                        {card.cardNo}
                    </CardInHand>
                </CardInHandWrapper>
            ))}
        </HandContainer>
    );
}
