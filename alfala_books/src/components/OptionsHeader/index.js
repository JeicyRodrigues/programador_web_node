
const textoOpcoes = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']


function OptionHeader(){
return (
    < ul className='opcoes' >
        {
            textoOpcoes.map((texto) => (
                < li className='opcao'><p>{texto}</p></li>
            ))
        }
    </ul >
)

}

export default OptionHeader