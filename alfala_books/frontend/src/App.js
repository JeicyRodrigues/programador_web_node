import Header from './components/Header';
import styled from 'styled-components'
import Pesquisa from './components/Pesquisa';
import UltimosLancamentos from './components/UltimosLancamentos';

const AppContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165% );

li {
    list-style: none;
}
`

function App () {
  return (

      <div className="App">
        <Header />
        <Pesquisa/>
        <AppContainer/>
        <UltimosLancamentos/>
      </div>
      )}


export default App





