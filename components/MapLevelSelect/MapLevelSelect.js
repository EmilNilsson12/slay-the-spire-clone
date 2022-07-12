import React, { useEffect, useRef, useState } from 'react';
import BackBtn from '../BackBtn/BackBtn';
import {
    LevelIcon,
    LevelIconWrapper,
    MapGrid,
    MapLevelSelectWrapper,
    RowInMap,
} from './MapLevelSelect.styled';

export default function MapLevelSelect({ prevScreen, callBackFunc }) {
    const [currentRow, setCurrentRow] = useState(1);

    const handleClick = ({ isOnCurrentRow, levelNumber }) => {
        console.log(`levelNumber "${levelNumber}" clicked`);
        if (!isOnCurrentRow) return;
        callBackFunc('encounter-enemy');
    };

    const getRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // Number of rows of levels
    const _levelRows = 5;

    // Generate between 2 and 4 levels per row
    // Populate rowContainer
    const rowContainer = [4];

    for (let i = 1; i < _levelRows; i++) {
        rowContainer[i] = getRandomNum(1, 4);
    }

    // Render one row at a time

    const divRef = useRef(null);

    useEffect(() => {
        if (currentRow !== 0) return;
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    let levelNumber = 1;

    const getLevelsForRow = (levelsInRow, isOnCurrentRow, isOldRow) => {
        const levelsInThisRow = [];

        for (let i = 1; i <= levelsInRow; i++) {
            levelsInThisRow.push(
                <LevelIconWrapper>
                    <LevelIcon
                        key={i}
                        isCurrentRow={isOnCurrentRow}
                        isOldRow={isOldRow}
                        onClick={() =>
                            handleClick({ isOnCurrentRow, levelNumber })
                        }
                    >
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
            const row = i + 1;
            const isOnCurrentRow = currentRow === row;
            const isOldRow = row < currentRow;
            arrayOfRows.unshift(
                getLevelsForRow(rowContainer[i], isOnCurrentRow, isOldRow)
            );
        }
        return arrayOfRows;
    };

    return (
        <>
            <BackBtn prevScreen={prevScreen} cb={callBackFunc} />
            <MapLevelSelectWrapper>
                <MapGrid>{getRows(rowContainer)}</MapGrid>
            </MapLevelSelectWrapper>
            <div ref={divRef}>Select a starting point</div>
        </>
    );
}
