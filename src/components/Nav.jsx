import { Link } from 'react-scroll'

const Nav = () => {
    return (
        <div className='container nav'>
            <div>
                <div>
                    <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
                        FEDE ALIPRANDI
                    </Link>
                </div>
            </div>
            <div>
                <nav>
                    <Link to="description" spy={true} smooth={true} offset={50} duration={500}>
                        Description
                    </Link>
                    <Link to="demos" spy={true} smooth={true} offset={50} duration={500}>
                        Demos
                    </Link>
                    <Link to="packs" spy={true} smooth={true} offset={50} duration={500}>
                        Services
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Nav