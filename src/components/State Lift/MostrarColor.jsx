import style from './color.module.css';

function MostrarColor({ color }) {
    return (
        <>
        {color && <p className={style[color]}>El color es {color}</p>}
        </>
    )
}

export default MostrarColor;