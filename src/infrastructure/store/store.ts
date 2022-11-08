import { configureStore } from '@reduxjs/toolkit';
import { characterReducer } from '../../feature/reducer/reducer';

export const appStore = configureStore({
    reducer: {
        characters: characterReducer,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
