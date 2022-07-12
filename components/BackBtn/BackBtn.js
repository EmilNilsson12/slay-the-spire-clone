import React from 'react';

export default function BackBtn({ prevScreen, cb }) {
    const { path, name } = prevScreen;
    return <button onClick={() => cb(path)}>Return to: {name}</button>;
}
