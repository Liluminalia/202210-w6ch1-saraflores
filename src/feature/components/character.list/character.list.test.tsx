import { render, screen } from '@testing-library/react';

import { CharacterList } from './character.list';

describe('Given ItemList component', () => {
    describe('When we render the component', () => {
        test('Then it should display the starring name of any in the list', () => {
            render(<CharacterList />);
            const element = screen.getByText(/Joffrey/i);
            expect(element).toBeInTheDocument();
        });
    });
});
