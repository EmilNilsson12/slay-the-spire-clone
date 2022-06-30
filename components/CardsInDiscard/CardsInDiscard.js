import React from 'react';

export default function CardsInDiscard({ cards }) {
    return (
        <div>
            Discard pile
            <div>Number of cards: {cards?.length}</div>
        </div>
    );
}
