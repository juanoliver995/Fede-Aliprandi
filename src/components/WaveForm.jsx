import Wavesurfer from "wavesurfer.js";
import { useEffect, useRef, useState } from "react";

const Waveform = ({ url }) => {
    const waveform = useRef(null);
    const [play, setPlay] = useState(false)

    useEffect(() => {
        if (!waveform.current) {
            waveform.current = Wavesurfer.create({
                container: "#waveform",
                waveColor: "#c18a8e",
                barGap: 2,
                barWidth: 2,
                barRadius: 3,
                cursorWidth: 1,
                cursorColor: "#c9b6b4",
                height: 50,
                hideScrollbar: true

            });
            waveform.current.load(url);

        }
        waveform.current.load(url);

    }, [url]);

    useEffect(() => {
        waveform.current.on("ready", () => {
            waveform.current.play()
            setPlay(true)
        })
    })

    const playAudio = () => {
        if (waveform.current.isPlaying()) {
            waveform.current.pause();
            setPlay(false)
        } else {
            waveform.current.play();
            setPlay(true)
        }
    };

    return (
        <>
            <div className="container-btn-play">
                <button onClick={playAudio}>{play ? <img src="./images/pause.svg" /> : <img src="./images/play.svg" />}</button>
            </div>
            <div id="waveform" className="waveForm" />
        </>
    );
};

export default Waveform;