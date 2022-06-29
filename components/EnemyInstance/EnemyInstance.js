import React, { useState } from 'react';
import {
    EnemyHealthbar,
    EnemyHealthBarWrapper,
    EnemyHitbox,
    EnemyInstanceWrapper,
} from './EnemyInstance.styled';

export default function EnemyInstance({ initalHp, damageDealt }) {
    const ENEMY_MAX_HP = 100;
    const [enemyHp, setEnemyHp] = useState(initalHp);

    const handleClickEnemy = () => {
        setEnemyHp(() => enemyHp - damageDealt);
    };
    return (
        <EnemyInstanceWrapper>
            <EnemyHealthBarWrapper>
                <div>{enemyHp} hp</div>
                <EnemyHealthbar
                    low={ENEMY_MAX_HP * (1 / 3)}
                    high={ENEMY_MAX_HP * (2 / 3)}
                    optimum={ENEMY_MAX_HP}
                    max={ENEMY_MAX_HP}
                    value={enemyHp}
                >
                    {enemyHp} hp
                </EnemyHealthbar>
            </EnemyHealthBarWrapper>
            <EnemyHitbox onClick={() => handleClickEnemy()}>
                Enemy 2
            </EnemyHitbox>
        </EnemyInstanceWrapper>
    );
}
