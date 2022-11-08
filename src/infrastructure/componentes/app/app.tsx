import { CharacterList } from '../../../feature/components/character.list/character.list';
import { Form } from '../../../feature/components/form/form';
import './app.css';

export function App() {
    return (
        <div className="app">
            <Form></Form>
            <CharacterList></CharacterList>
        </div>
    );
}
