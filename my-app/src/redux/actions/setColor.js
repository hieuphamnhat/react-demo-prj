export const setColor = function (newColor) {
    return {
        type: 'SET_COLOR',
        payload: newColor,
    };
};