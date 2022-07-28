import React, { useEffect, useRef, useState } from 'react';
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
    const [highlightedLevelType, setHighlightedLevelType] = useState('');

    const handleClick = ({ isOnCurrentRow, levelNumber }) => {
        console.log(`levelNumber "${levelNumber}" clicked`);
        if (!isOnCurrentRow) return;
        callBackFunc('encounter-enemy');
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
