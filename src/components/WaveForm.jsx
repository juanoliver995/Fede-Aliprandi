import Wavesurfer from "wavesurfer.js";
import { useEffect, useRef, useState } from "react";



const Waveform = ({ url }) => {
    const waveform = useRef(null);

    useEffect(() => {
        if (!waveform.current) {
            waveform.current = Wavesurfer.create({
                container: "#waveform",
                waveColor: "#567FFF",
                barGap: 2,
                barWidth: 2,
                barRadius: 3,
                cursorWidth: 1,
                cursorColor: "#567FFF",

            });
            waveform.current.load(url);

        }
        waveform.current.load(url);

    }, [url]);




    const playAudio = () => {
        if (waveform.current.isPlaying()) {
            waveform.current.pause();
        } else {
            waveform.current.play();
        }
    };

    return (
        <>
            <div>
                <button onClick={playAudio}>
                    Play / Pause
                </button>
            </div>
            <div id="waveform" className="waveForm" />
        </>
    );
};

export default Waveform;