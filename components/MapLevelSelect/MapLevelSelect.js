import React, { useEffect, useRef, useState } from 'react';
import {
    LevelIcon,
    LevelIconWrapper,
    MapGrid,
    MapLevelSelectWrapper,
    RowInMap,
} from './MapLevelSelect.styled';

export default function MapLevelSelect() {
    const [currentRow, setCurrentRow] = useState(0);

    const getRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // Number of rows of levels
    const _levelRows = 20;

    // Generate between 2 and 4 levels per row
    // Populate rowContainer
    const rowContainer = [4];

    for (let i = 1; i < _levelRows; i++) {
        rowContainer[i] = getRandomNum(1, 4);
    }

    console.log('rowContainer');

    console.log(rowContainer);

    // Render one row at a time

    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    // const levels = [...new Array(100)].map((index, i) => i + 1);
    // console.log('levels');
    // console.log(levels);

    // const reversed = [...levels].reverse();
    // console.log('levels reversed');
    // console.log(reversed);
    let levelNumber = 1;

    const getLevelsForRow = (levelsInRow, isOnCurrentRow) => {
        const levelsInThisRow = [];

        for (let i = 1; i <= levelsInRow; i++) {
            levelsInThisRow.push(
                <LevelIconWrapper>
                    <LevelIcon key={i} isCurrentRow={isOnCurrentRow}>
                        Level {levelNumber}
                    </LevelIcon>
                </LevelIconWrapper>
            );

            levelNumber++;
        }

        return <RowInMap>{levelsInThisRow}</RowInMap>;
    };

    const getRows = (rowContainer) => {
        const arrayOfRows = [];

        const iterations = rowContainer.length;
        for (let i = 0; i <= iterations; i++) {
            const isOnCurrentRow = currentRow === i;
            console.log('isOnCurrentRow');
            console.log(isOnCurrentRow);
            console.log('currentRow');
            console.log(currentRow);
            console.log('i');
            console.log(i);
            console.log('---------------');
            arrayOfRows.unshift(
                getLevelsForRow(rowContainer[i], isOnCurrentRow)
            );
        }
        return arrayOfRows;
    };

    return (
        <>
            <MapLevelSelectWrapper>
                <MapGrid>{getRows(rowContainer)}</MapGrid>
            </MapLevelSelectWrapper>
            <div ref={divRef}>Select a starting point</div>
        </>
    );
}
