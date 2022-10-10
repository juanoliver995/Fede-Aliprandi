import { useState } from "react"

const Music = ({ track, handlePlay }) => {

    const { name, id, url } = track
    return (
        <div className="track-container">
            <h1>{name}</h1>
            <div className="img-music-container">
                <img src="./public/images/sonido.png" />
            </div>
            <audio src={url} id={id}>
            </audio>
            <button className="listen" onClick={() => handlePlay(track)}>Listen</button>
        </div>
    )
}

export default Music