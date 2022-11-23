

const Music = ({ track, handlePlay }) => {

    const { name, id, url } = track
    return (
        <div className="track-container">
            <h1>{name}</h1>
            <div className="img-music-container">
                <div className="circle-music">
                    <img src="./images/music-svg.svg" />
                </div>
            </div>
            <audio src={url} id={id}>
            </audio>
            <button className="listen" onClick={() => handlePlay(track)}>Listen</button>
        </div>
    )
}

export default Music