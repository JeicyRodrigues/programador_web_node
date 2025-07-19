import './style.css';
import livros from '../../img/livros.svg'

const icones = [livros];

function IconesMenu() {
  return (
    <ul className='icones'>
      {icones.map((icone, index) => (
        <li key={index} className='icone'>
          <img src={icone} alt={`Ícone ${index}`} />
        </li>
      ))}
    </ul>
  );
}

export default IconesMenu;
