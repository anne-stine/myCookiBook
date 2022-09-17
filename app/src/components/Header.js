import Logo from './Logo.js';
import Hero from './Hero.js';
import Navbar from './Navbar.js';
import img from '../images/pexels-cottonbro-3992206.jpg'

const Header = () =>
(
    <header className='header'>
        <Logo />
        <Hero src={img} />
        <Navbar />
    </header>
);

export default Header;