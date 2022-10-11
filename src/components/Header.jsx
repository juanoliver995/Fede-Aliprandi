import React from 'react'

const Header = () => {
    return (
        <div className='container header' id='hero'>
            <div>
                <div className='title-header'>
                    <h1>Hi, I'm <span>Fede Aliprandi</span></h1>
                    <h1>Professional Ghost <span>Producer</span></h1>
                </div>
                <div className='social-header'>
                    <p>DISCOVER ME IN</p>
                    <div className='container-social'>
                        <div>
                            <a target="_blank" src="https://www.facebook.com/FedeAliprandi/"><img alt="icono facebook" src="./images/redes/facebook.svg" /></a>
                        </div>
                        <div>
                            <a target="_blank" src="https://www.instagram.com/fedealiprandi/"><img alt="icono instagram" src="./images/redes/instagram.svg" /></a>
                        </div>
                        <div>
                            <a target="_blank" src="https://www.beatport.com/artist/fede-aliprandi/733181"><img alt="icono beatport" src="./images/redes/beatport.svg" /></a>
                        </div>
                        <div>
                            <a target="_blank" src="https://open.spotify.com/artist/6iURGquLjP3XERe3u4bZwB"><img alt="icono spotify" src="./images/redes/spotify.svg" /></a>
                        </div>
                        <div>
                            <a target="_blank" src="https://soundcloud.com/fedealiprandi"><img alt="icono soundcloud" src="./images/redes/soundcloud.svg" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header-img'>
                <img src='./images/header.png' />
            </div>
        </div>
    )
}

export default Header