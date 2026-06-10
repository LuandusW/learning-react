function EligirColor({ setColor }) {
    return (

        <div>
            <select id="color"
                onChange={(e) => setColor(e.target.value)}
            >
                <option>Elijes un color</option>
                <option value="red">Rojo</option>
                <option value="blue">Azul</option>
                <option value="pink">Rosa</option>
            </select>
        </div>

    )
}


export default EligirColor;