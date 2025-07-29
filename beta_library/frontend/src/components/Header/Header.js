import './style.css';
import Logo from '../Logo/LogoBeta';
import IconesMenu from '../IconesHeader/livros'; // ícone livro (ex: menu)
import UsuarioMenu from '../usuario'; // ícone usuário
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 2rem; // Adicionado um padding para espaçamento
  background-color: #fff; // Fundo de exemplo
`;

// Divisão da esquerda (Logo)
const HeaderLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

// Divisão central (Menu de navegação)
const HeaderCenter = styled.nav`
  flex: 2;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

// Links de navegação (<a>)
const NavLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #b386ce;
  transition: color 0.3s;

  &:hover {
    color: #e91e63;
  }
`;

// Divisão da direita (Ícones)
const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

// Imagem do ícone (<img>)
const Icon = styled.img`
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;



const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        {/* Adicione o caminho para sua logo aqui */}
        <img src="https://via.placeholder.com/150x50.png?text=Logo" alt="Logo" style={{ height: '50px' }} />
      </HeaderLeft>

      <HeaderCenter>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Sobre</NavLink>
        <NavLink href="#">Serviços</NavLink>
      </HeaderCenter>


      );
};

      export default Header;