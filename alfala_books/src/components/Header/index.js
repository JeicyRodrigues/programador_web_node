import '../Header/style.css'
import Logo from '../Logo'
import OptionHeader from '../OptionsHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    backgroud-color: #FFF;
    display:flex;
    justify-content: center;

`

function Header() {
    return (

        <header className="App-header">
            <HeaderContainer>
            <Logo />
                <OptionHeader />
                <IconesHeader />
                </HeaderContainer>

        </header>
    )
}


export default Header