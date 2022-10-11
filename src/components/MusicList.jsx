import { music } from "../data/music"
import Music from "./Music"
const MusicList = ({ handlePlay }) => {
    return (
        <div className="music-list-container" id="demos">
            <h2>LISTEN MY DEMOS</h2>
            <div className="music-list container">
                {music.map((track) => (
                    <Music
                        track={track}
                        key={track.id}
                        handlePlay={handlePlay}
                    />
                ))}
            </div>
        </div>
    )
}

export default MusicList