import styled from 'styled-components'



const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-family: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']
function OptionHeader(){
return (
  <Opcoes>
        {
            textoOpcoes.map((texto) => (
                < Opcao><p>{texto}</p></Opcao>
            ))}
</Opcoes>
)

}

export default OptionHeader