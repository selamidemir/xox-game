import { createSlice } from "@reduxjs/toolkit";

const findWinner = (items, sign) => {
    const winningMoves = ["012", "345", "678", "036", "147", "258", "048", "246"];
    const havingWinner = winningMoves.map(moves =>
        items[moves[0]] === sign
            && items[moves[1]] === sign
            && items[moves[2]] === sign
            ? sign : '');
    return havingWinner.includes(sign);
}

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        items: ['', '', '', '', '', '', '', '', ''],
        gamerOne: { name: 'Gamer (1)', sign: 'X', score: 0 },
        gamerTwo: { name: 'Gamer (2)', sign: 'O', score: 0 },
        currentGamer: { name: 'Gamer (1)', sign: 'X', score: 0 },
        lastWinner: '',
        isStarted: false,
    },
    reducers: {
        setItem: (state, action) => {
            // Tıklanan hücre işaretleniyor
            state.items[action.payload] = state.currentGamer.sign;
            const isWinner = findWinner(state.items, state.currentGamer.sign);
            if (isWinner) {
                state.currentGamer.sign === state.gamerOne.sign ? state.gamerOne.score += 1 : state.gamerTwo.score += 1;
                state.isStarted = false;
                state.lastWinner = `${state.currentGamer.name} Won!`;
            } else if (!state.items.includes('')) {
                state.isStarted = false;
                state.lastWinner = 'The Game is tied!';
            }
            state.currentGamer = state.currentGamer.sign === state.gamerOne.sign ? state.gamerTwo : state.gamerOne;
        },
        startGame: (state, action) => {
            state.items = ['', '', '', '', '', '', '', '', ''];
            state.currentGamer = { name: 'Gamer (1)', sign: 'X', score: 0 };
            state.lastWinner = '';
            state.isStarted = true;
        }
    }
});

export const selectItems = state => state.game.items;
export const selectGamerOne = state => state.game.gamerOne;
export const selectGamerTwo = state => state.game.gamerTwo;
export const selectCurrentGamer = state => state.game.currentGamer;
export const selectLastWinner = state => state.game.lastWinner;
export const selectIsStarted = state => state.game.isStarted;

export const { setItem, startGame } = gameSlice.actions;
export default gameSlice.reducer;