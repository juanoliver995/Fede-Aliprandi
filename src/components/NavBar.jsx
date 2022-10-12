import { NavbarWrapper } from "../styles/NavBarStyles";
import { Link } from 'react-scroll'

function Navbar({ open, handleClick }) {
    return (
        <NavbarWrapper className="container-nav" open={open}>
            <Link to="description" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                Description
            </Link>
            <Link to="demos" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                Demos
            </Link>
            <Link to="packs" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                Services
            </Link>
        </NavbarWrapper>
    );
}

export default Navbar;