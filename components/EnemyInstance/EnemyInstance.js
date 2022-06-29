import React, { useState } from 'react';

export default function EnemyInstance() {
    const ENEMY_MAX_HP = 100;
    const [enemyHp, setEnemyHp] = useState(ENEMY_MAX_HP);

    const handleClickEnemy = () => {
        setEnemyHp(() => enemyHp - 10);
    };
    return (
        <div>
            <progress max={ENEMY_MAX_HP} value={enemyHp}>
                {enemyHp} hp
            </progress>

            <button onClick={() => handleClickEnemy()}>Enemy 2</button>
        </div>
    );
}
