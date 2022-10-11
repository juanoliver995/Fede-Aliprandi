
import Waveform from './WaveForm'

const Player = ({ trackListen }) => {
    const { url, id, name } = trackListen

    return (
        <div className='container-player'>
            {trackListen.id ? (<Waveform url={url} />) : null}
        </div>
    )
}

export default Player