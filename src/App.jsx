import { useState } from "react"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Slider from "./components/Slider"
import Description from "./components/Description"
import MusicList from "./components/MusicList"

function App() {
  const [trackListen, setTrackListen] = useState({})

  const handlePlay = (track) => {
    if (trackListen.id !== track.id) {
      setTrackListen(track)
      setPlay(true)
    }
  }

  return (
    <div className="container">
      <Nav />
      <Header />
      <Slider />
      <Description />
      <MusicList handlePlay={handlePlay} />


    </div>
  )
}

export default App
