import React, { useEffect, useState } from 'react';
import { getRandomNum } from '../../helperFunctions/getRandomNum';
import MapLevelSelect from './MapLevelSelect';

const levelTypes = [
    { name: 'Encounter', color: 'orange' },
    { name: 'Shop', color: 'gold' },
    { name: 'Boss', color: 'red' },
    { name: 'Mystery', color: 'white' },
];

export default function MapLevelGenerator({ prevScreen, callBackFunc }) {
    const [currentRow, setCurrentRow] = useState(1);

    const [generatedLevels, setGeneratedLevels] = useState();

    // Number of rows of levels
    const _levelRows = 5;

    // Generate between 2 and 4 levels per row
    // Populate rowContainer
    const rowContainer = [4];

    for (let i = 1; i < _levelRows; i++) {
        rowContainer[i] = getRandomNum(1, 4);
    }

    let levelNumber = 1;

    const getLevelsForRow = (levelsInRow, isOnCurrentRow, isOldRow) => {
        const levelsInThisRow = [];

        for (let i = 1; i <= levelsInRow; i++) {
            const levelType = levelTypes[getRandomNum(0, 3)];

            levelsInThisRow.push({
                type: levelType,
                level: levelNumber,
                isOnCurrentRow,
                isOldRow,
            });

            levelNumber++;
        }

        return levelsInThisRow;
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

    console.log('getRows(rowContainer)');
    console.log(getRows(rowContainer));

    useEffect(() => {
        setGeneratedLevels(getRows(rowContainer));
    }, []);

    return (
        <MapLevelSelect
            prevScreen={prevScreen}
            callBackFunc={callBackFunc}
            generatedLevels={generatedLevels}
            levelTypes={levelTypes}
        />
    );
}
