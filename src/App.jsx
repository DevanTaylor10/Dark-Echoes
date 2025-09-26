import { useState } from "react";
import episodes from "./data";                    // or: import { episodeList as episodes } from "./data";
import EpisodeList from "./components/EpisodeList";
import EpisodeDetails from "./components/EpisodeDetails";
import "./App.css";

export default function App() {
  const [allEpisodes] = useState(episodes);
  const [selected, setSelected] = useState(null); // will hold the whole episode object

  return (
    <div className="app">
      <h1>Dark Echoes</h1>

      <EpisodeList
        episodes={allEpisodes}
        selectedId={selected?.id}
        onSelect={setSelected}
      />

      <EpisodeDetails episode={selected} />
    </div>
  );
}