import React, { useState } from 'react';
import EnemyInstance from '../EnemyInstance/EnemyInstance';
import {
    BattleAreaWrapper,
    EnemyContainer,
    EntitiesContainer,
} from './BattleArea.styled';

export default function BattleArea({ cardToBeUsed }) {
    const [enemyToBeAttacked, setEnemyToBeAttacked] = useState();
    const handleClickEnemy = (enemyId) => {
        if (!cardToBeUsed) {
            setEnemyToBeAttacked(null);
        }

        setEnemyToBeAttacked(enemyId);
    };
    return (
        <BattleAreaWrapper>
            <EntitiesContainer>
                <div>My character</div>
                <div>
                    {cardToBeUsed && <div>Card to be used: {cardToBeUsed}</div>}
                    {enemyToBeAttacked && (
                        <div>Card was used on enemy: {enemyToBeAttacked}</div>
                    )}
                </div>

                <EnemyContainer>
                    Their characters
                    <EnemyInstance />
                    <EnemyInstance />
                    <EnemyInstance />
                </EnemyContainer>
            </EntitiesContainer>
        </BattleAreaWrapper>
    );
}
