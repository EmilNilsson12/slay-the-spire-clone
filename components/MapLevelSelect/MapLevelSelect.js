import React, { useEffect, useRef } from 'react';
import { MapLevelSelectWrapper } from './MapLevelSelect.styled';

export default function MapLevelSelect() {
    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    return (
        <>
            <MapLevelSelectWrapper>Select a level</MapLevelSelectWrapper>
            <div ref={divRef}>Select a starting point</div>
        </>
    );
}
