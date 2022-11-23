import React from 'react'
import { motion } from 'framer-motion'
const Header = () => {
    return (
        <div className='container header' id='hero'>
            <div>
                <motion.div
                    animate={{
                        opacity: 1,
                        y: 0

                    }}
                    initial={{
                        y: -100
                    }}
                    transition={{
                        duration: 2
                    }}
                    className='title-header'
                >
                    <h1>Professional</h1>
                    <h1>Ghost <strong>Producer</strong></h1>
                </motion.div>
                <div className='social-header'>
                    <p>DISCOVER ME IN</p>
                    <div className='container-social'>
                        <div>
                            <a target="_blank" href="https://www.facebook.com/FedeAliprandi/"><img alt="icono facebook" src="./images/redes/facebook.svg" /></a>
                        </div>
                        <div>
                            <a target="_blank" href="https://www.instagram.com/fedealiprandi/"><img alt="icono instagram" src="./images/redes/instagram.svg" /></a>
                        </div>
                        <div>
                            <a target="_blank" href="https://www.beatport.com/artist/fede-aliprandi/733181"><img alt="icono beatport" src="./images/redes/beatport.svg" /></a>
                        </div>
                        <div>
                            <a target="_blank" href="https://open.spotify.com/artist/6iURGquLjP3XERe3u4bZwB"><img alt="icono spotify" src="./images/redes/spotify.svg" /></a>
                        </div>
                        <div>
                            <a target="_blank" href="https://soundcloud.com/fedealiprandi"><img alt="icono soundcloud" src="./images/redes/soundcloud.svg" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                animate={{
                    x: 0

                }}
                initial={{
                    x: 500
                }}

                transition={{
                    duration: 2
                }}
                className='header-img'
            >
                <img src='./images/header.png' />
            </motion.div>
        </div>
    )
}

export default Header