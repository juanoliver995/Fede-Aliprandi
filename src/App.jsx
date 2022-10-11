import { useState } from "react"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Slider from "./components/Slider"
import Description from "./components/Description"
import MusicList from "./components/MusicList"
import Player from "./components/Player"
import Packs from "./components/Packs"
import Footer from "./components/Footer"
function App() {
  const [trackListen, setTrackListen] = useState({})

  const handlePlay = (track) => {
    if (trackListen.id !== track.id) {
      setTrackListen(track)
    }
  }

  return (
    <div className="container">
      <Nav />
      <Header />
      <Slider />
      <Description />
      <MusicList handlePlay={handlePlay} />
      <Packs />
      <Footer />
      {trackListen.id ? <Player trackListen={trackListen} /> : ""}
    </div>
  )
}

export default App
