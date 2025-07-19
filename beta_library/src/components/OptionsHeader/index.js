import styled from 'styled-components';

// 1. CAMINHOS DE IMPORTAÇÃO CORRIGIDOS
// De: src/components/Header/
// Para: src/img/
import iconeUsuario from '../../img/icone.svg';
import iconeLivros from '../../img/livros.svg';
import logoImg from '../../img/logo.svg'; // Usando sua logo!

// --- STYLED COMPONENTS (não precisam de alteração) ---

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
`;

const HeaderLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

// Adicionei um estilo para a Logo para ficar mais parecido com o Icon
const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const HeaderCenter = styled.nav`
  flex: 2;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #b386ce;
  transition: color 0.3s;

  &:hover {
    color: #e91e63;
  }
`;

const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

// --- COMPONENTE REACT ---

const Header = () => {
  const iconesDireita = [iconeUsuario, iconeLivros];

  return (
    <HeaderContainer>
      <HeaderLeft>
        {/* Usando sua logo importada com o componente Logo estilizado */}
        <Logo src={logoImg} alt="Logo Alura Books" />
      </HeaderLeft>

      <HeaderCenter>
        <NavLink href="#">CATEGORIAS</NavLink>
        <NavLink href="#">FAVORITOS</NavLink>
        <NavLink href="#">MINHA ESTANTE</NavLink>
      </HeaderCenter>

      <HeaderRight>
        {iconesDireita.map((icone, index) => (
          <Icon key={index} src={icone} alt={`Ícone ${index + 1}`} />
        ))}
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;