
import Waveform from './WaveForm'

const Player = ({ trackListen }) => {
    const { url, id, name } = trackListen

    return (
        <div className='container-player'>
            {trackListen.id ? (<Waveform url={url} play={play} />) : null}
        </div>
    )
}

export default Player