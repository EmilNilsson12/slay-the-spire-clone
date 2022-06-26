import React, { useEffect, useRef, useState } from 'react';
import {
    LevelIcon,
    MapGrid,
    MapLevelSelectWrapper,
} from './MapLevelSelect.styled';

export default function MapLevelSelect() {
    const [currentRow, setCurrentRow] = useState(1);
    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    const levels = [...new Array(100)].map((index, i) => i + 1);
    console.log('levels');
    console.log(levels);

    const reversed = [...levels].reverse();
    console.log('levels reversed');
    console.log(reversed);

    const getRandomNum = () => {
        const configs = [
            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4],
            [2, 1],
            [2, 2],
            [2, 3],
            [3, 1],
            [3, 2],
            [4, 1],
        ];
        const max = configs.length;
        const min = 1;
        const ans = Math.floor(Math.random() * (max - min + 1) + min) - 1;
        console.log('ans');
        console.log(ans);
        console.log('configs[ans]');
        console.log(configs[ans]);
        const ret = configs[ans];

        console.log('ret');
        console.log(ret);
        return ret;
    };

    return (
        <>
            <MapLevelSelectWrapper>
                <MapGrid>
                    {reversed.map((level, i) => {
                        const [startNum, spanNum] = getRandomNum();
                        return (
                            <LevelIcon
                                key={i}
                                startNum={startNum}
                                spanNum={spanNum}
                            >
                                Level {level}
                            </LevelIcon>
                        );
                    })}
                </MapGrid>
            </MapLevelSelectWrapper>
            <div ref={divRef}>Select a starting point</div>
        </>
    );
}
