import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        // essa 'props.X.length' é para esconder os times que não possuem colaboradores é como se fosse um 'if', se ele for maior que zero, eu preciso ver
        props.colaboradores.length > 0 && 
        <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    )

}

export default Time;