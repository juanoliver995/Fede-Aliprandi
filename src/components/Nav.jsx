import { Link } from 'react-scroll'
import { useState } from "react";
import { HeaderWrapper } from "../styles/Header";
import Navbar from "../components/NavBar";
import MenuButton from "./MenuButton";
const Nav = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <HeaderWrapper>
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
                LOGO
            </Link>
            <Navbar open={open} handleClick={handleClick} />
            <MenuButton open={open} handleClick={handleClick} />
        </HeaderWrapper>
    )
}

export default Nav