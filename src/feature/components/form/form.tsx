export const Form = () => {
    return (
        <form>
            <h2>Crea tu propio personaje</h2>
            <div>
                <input
                    type="text"
                    id="title"
                    placeholder="nombre del personaje"
                    required
                />
            </div>
            <div>
                <input
                    type="text"
                    id="resp"
                    placeholder="a que familia pertenece"
                />
            </div>
            <div>
                <input type="text" id="resp" placeholder="cual es la edad" />
            </div>
            <div>
                <input type="text" id="resp" placeholder="cual es el role" />
            </div>
            <div>
                <input type="text" id="resp" placeholder="cual es el mensaje" />
            </div>
            <div>
                <input
                    type="text"
                    id="resp"
                    placeholder="añade una url (imagen)"
                />
            </div>
            <button type="submit">Crear personaje</button>
        </form>
    );
};
