import React, { useState } from 'react';
import BattleArea from '../BattleArea/BattleArea';
import CardsInHand from '../CardsInHand/CardsInHand';
import { EncounterInner, EncounterWrapper } from './Encounter.styled';

export default function Encounter() {
    const [cardToBeUsed, setCardToBeUsed] = useState();

    const callback = (cardId) => {
        console.log('cardId');
        console.log(cardId);
        setCardToBeUsed(cardId);
    };
    return (
        <EncounterWrapper>
            <EncounterInner>
                <BattleArea cardToBeUsed={cardToBeUsed} />
                <CardsInHand callback={callback} />
            </EncounterInner>
        </EncounterWrapper>
    );
}
