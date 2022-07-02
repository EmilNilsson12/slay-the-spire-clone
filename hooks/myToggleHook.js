export const myToggleHook = (reactStateSetter, toggleDuration) => {
    reactStateSetter(true);
    setTimeout(() => {
        reactStateSetter(false);
    }, toggleDuration);
};
