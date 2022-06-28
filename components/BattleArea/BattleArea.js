import React from 'react';
import {
    BattleAreaWrapper,
    EnemyContainer,
    EntitiesContainer,
} from './BattleArea.styled';

export default function BattleArea({ cardToBeUsed, callback }) {
    const handleClickEnemy = (enemyId) => {
        console.log('enemy nr: ' + enemyId + ' was attacked');

        callback(enemyId);
    };
    return (
        <BattleAreaWrapper>
            <EntitiesContainer>
                <div>My character</div>
                {cardToBeUsed && <div>Card to be used: {cardToBeUsed}</div>}

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
