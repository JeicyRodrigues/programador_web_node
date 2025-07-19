import Header from './components/Header';
import styled from 'styled-components'
import Pesquisa from './components/Pesquisa';

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  background-color: #ffeef3; 
  font-family: Arial, sans-serif;

`


function App() {
  return (
    <div className="App">
      <Header />
      <Pesquisa/>
      <AppContainer/>
    </div>
  )}

export default App;
