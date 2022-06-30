import React from 'react';

export default function CardsInDeck({ cards }) {
    return (
        <div>
            Deck pile
            <div>Number of cards: {cards?.length}</div>
        </div>
    );
}
