import React from 'react';
import BattleArea from '../BattleArea/BattleArea';
import CardsInHand from '../CardsInHand/CardsInHand';
import { EncounterWrapper } from './Encounter.styled';

export default function Encounter() {
    return (
        <EncounterWrapper>
            <BattleArea />
            <CardsInHand />
        </EncounterWrapper>
    );
}
