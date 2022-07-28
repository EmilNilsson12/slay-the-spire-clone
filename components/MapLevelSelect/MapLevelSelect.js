import React, { useEffect, useRef, useState } from 'react';
import { getRandomNum } from '../../helperFunctions/getRandomNum';
import BackBtn from '../BackBtn/BackBtn';
import {
    LevelIcon,
    LevelIconWrapper,
    MapGrid,
    MapLegend,
    MapLevelSelectWrapper,
    RowInMap,
} from './MapLevelSelect.styled';

export default function MapLevelSelect({
    prevScreen,
    callBackFunc,
    generatedLevels,
    levelTypes,
}) {
    const [highlightedLevelType, setHighlightedLevelType] = useState('Mystery');

    const handleClick = ({ isOnCurrentRow, levelNumber }) => {
        console.log(`levelNumber "${levelNumber}" clicked`);
        if (!isOnCurrentRow) return;
        callBackFunc('encounter-enemy');
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

    let levelNumber = 1;

    const getLevelsForRow = (levelsInRow, isOnCurrentRow, isOldRow) => {
        const levelsInThisRow = [];

        for (let i = 1; i <= levelsInRow; i++) {
            const levelType = levelTypes[getRandomNum(0, 3)];

            levelsInThisRow.push(
                <LevelIconWrapper>
                    <LevelIcon
                        key={i}
                        levelType={levelType}
                        isHighlighted={levelType.name === highlightedLevelType}
                        isCurrentRow={isOnCurrentRow}
                        isOldRow={isOldRow}
                        onClick={() =>
                            handleClick({ isOnCurrentRow, levelNumber })
                        }
                    >
                        {levelType.name}: <br /> Level {levelNumber}
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
                <div>
                    <MapGrid>
                        {generatedLevels?.map((levelRow) => (
                            <RowInMap key={levelRow.toString()}>
                                {levelRow?.map((level, i) => (
                                    <LevelIconWrapper key={i}>
                                        <LevelIcon
                                            levelType={level.type}
                                            isHighlighted={
                                                level.type.name ===
                                                highlightedLevelType
                                            }
                                            isCurrentRow={level.isOnCurrentRow}
                                            isOldRow={level.isOldRow}
                                            onClick={() =>
                                                handleClick({
                                                    isOnCurrentRow:
                                                        level.isOnCurrentRow,
                                                    levelNumber:
                                                        level.levelNumber,
                                                })
                                            }
                                        >
                                            {level.type.name}: <br /> Level{' '}
                                            {level.level}
                                        </LevelIcon>
                                    </LevelIconWrapper>
                                ))}
                            </RowInMap>
                        ))}
                    </MapGrid>
                </div>
                <MapLegend>
                    About the different types of levels
                    <ul>
                        {levelTypes.map((lvlType) => (
                            <li
                                key={lvlType.name}
                                onMouseOver={() =>
                                    setHighlightedLevelType(lvlType.name)
                                }
                                onMouseLeave={() => setHighlightedLevelType('')}
                            >
                                {lvlType.name}
                            </li>
                        ))}
                    </ul>
                </MapLegend>
            </MapLevelSelectWrapper>
        </>
    );
}
