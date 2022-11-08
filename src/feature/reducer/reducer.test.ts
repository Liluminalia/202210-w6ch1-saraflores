import * as ac from './action.creators';
import { characterReducer } from './reducer';

const mockCharacter = {
    id: 1,
    name: 'pepe',
    age: 33,
    family: 'flowers',
    lifeStatus: true,
    message: 'helou',
    image: '',
    partner: 'Ernesto',
    series: 'got',
    rol: 'figther',
};
const mockCharacter2 = {
    id: 2,
    name: 'Tomas',
    age: 25,
    family: 'flowers',
    lifeStatus: true,
    message: 'bye',
    image: '',
    partner: 'Ernesto',
    series: 'got',
    rol: 'figther',
};
describe('Given state and action', () => {
    describe('when actiontypes is loadCharacterAction', () => {
        test('then return payload as new state', () => {
            const newState = characterReducer([], ac.loadActionCreator([]));
            expect(newState).toEqual([]);
        });
    });
    describe('when actiontypes is add', () => {
        test('then return a new instance of the state plus a payload', () => {
            const newState = characterReducer(
                [],
                ac.addActionCreator(mockCharacter)
            );
            expect(newState).toEqual([mockCharacter]);
        });
    });
    describe('when actiontypes is update', () => {
        test('then return a updated instance of the state', () => {
            const newState = characterReducer(
                [mockCharacter],
                ac.updateActionCreator(mockCharacter2)
            );
            expect(newState).toEqual([mockCharacter]);
        });
        test('then if is not in the initialState then return the same instance', () => {
            const newState = characterReducer(
                [mockCharacter2],
                ac.updateActionCreator(mockCharacter2)
            );
            expect(newState).toEqual([mockCharacter2]);
        });
    });
    describe('when actiontypes is delete', () => {
        test('then return an instance of the state without the payload', () => {
            const newState = characterReducer(
                [mockCharacter, mockCharacter2],
                ac.deleteActionCreator(mockCharacter)
            );
            expect(newState).toEqual([mockCharacter2]);
        });
    });
    describe('when actiontypes is not any of the actions', () => {
        test('then return just a new instance of the state', () => {
            const newState = characterReducer([mockCharacter], {
                type: '',
                payload: [],
            });
            expect(newState).toEqual([mockCharacter]);
        });
    });
});
