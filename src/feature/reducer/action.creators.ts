import { createAction } from '@reduxjs/toolkit';
import { character } from '../models/data';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<Array<character>>(
    actionTypes.load
);

export const addActionCreator = createAction<character>(actionTypes.add);

export const updateActionCreator = createAction<character>(actionTypes.update);

export const deleteActionCreator = createAction<character>(actionTypes.delete);
