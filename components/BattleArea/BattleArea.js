import React, { useState } from 'react';
import {
    BattleAreaWrapper,
    EnemyContainer,
    EntitiesContainer,
} from './BattleArea.styled';

export default function BattleArea({ cardToBeUsed, callback }) {
    const [enemyToBeAttacked, setEnemyToBeAttacked] = useState();
    const handleClickEnemy = (enemyId) => {
        if (!cardToBeUsed) return;

        setEnemyToBeAttacked(enemyId);
    };
    return (
        <BattleAreaWrapper>
            <EntitiesContainer>
                <div>My character</div>
                {cardToBeUsed && <div>Card to be used: {cardToBeUsed}</div>}
                {enemyToBeAttacked && (
                    <div>Card was used on enemy: {enemyToBeAttacked}</div>
                )}

                <EnemyContainer>
                    Their characters
                    <button onClick={() => handleClickEnemy('enemyId1')}>
                        Enemy 1
                    </button>
                    <button onClick={() => handleClickEnemy('enemyId2')}>
                        Enemy 2
                    </button>
                </EnemyContainer>
            </EntitiesContainer>
        </BattleAreaWrapper>
    );
}
