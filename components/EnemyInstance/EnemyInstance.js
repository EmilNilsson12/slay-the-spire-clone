import React, { useState } from 'react';
import {
    EnemyHealthbar,
    EnemyHitbox,
    EnemyInstanceWrapper,
} from './EnemyInstance.styled';

export default function EnemyInstance({ damageDealt }) {
    const ENEMY_MAX_HP = 100;
    const [enemyHp, setEnemyHp] = useState(ENEMY_MAX_HP);

    const handleClickEnemy = () => {
        setEnemyHp(() => enemyHp - damageDealt);
    };
    return (
        <EnemyInstanceWrapper>
            <EnemyHealthbar min="0" max={ENEMY_MAX_HP} value={enemyHp}>
                {enemyHp} hp
            </EnemyHealthbar>
            <EnemyHitbox onClick={() => handleClickEnemy()}>
                <div>{enemyHp} hp</div>
                Enemy 2
            </EnemyHitbox>
        </EnemyInstanceWrapper>
    );
}
