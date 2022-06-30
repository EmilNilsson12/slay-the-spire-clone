import React, { useState } from 'react';

const getDeg = (index, array) => {
    const NUMBER_OF_CARDS = array.length;
    const DEGREES_BETWEEN_FIRST_AND_LAST = 40;

    const degsBetweenEachCard =
        DEGREES_BETWEEN_FIRST_AND_LAST / (NUMBER_OF_CARDS - 1);

    return degsBetweenEachCard * index;
};
export default function CardsInDiscard({ drawnCards, callback }) {
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

    return <div>Discard pile</div>;
}
