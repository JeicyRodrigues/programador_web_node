import './style.css';
import Logo from '../LogoBeta';
import IconesMenu from '../livros'; // certifique-se de que exporta como IconesMenu

function Inicio() {
  return <div>Início</div>;
}
function Catalogo() {
  return <div>Catálogo</div>;
}
function Sobre() {
  return <div>Sobre</div>;
}

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <IconesMenu />
      <Inicio />
      <Catalogo />
      <Sobre />
    </header>
  );
}

export default Header;
