import { useEffect, useState } from "react";
import data from "./data"; 
import EpisodeList from "./components/EpisodeList.jsx";
import EpisodeDetails from "./components/EpisodeDetails.jsx";
import EmptyState from "./components/EmptyState.jsx";
import "./index.css";

export default function App() {
  
  const [episodes, setEpisodes] = useState([]);
  
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    
    const normalized = data.map((ep, idx) => ({
      id: ep.id ?? idx + 1,
      number: ep.number ?? idx + 1,
      ...ep,
    }));
    setEpisodes(normalized);
  }, []);

  const selected = episodes.find((e) => e.id === selectedId) ?? null;

  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="brand">Dark Echoes</h1>
        <EpisodeList
          episodes={episodes}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </aside>

      <main className="content">
        {selected ? (
          <EpisodeDetails episode={selected} />
        ) : (
          
          <EmptyState />
        )}
      </main>
    </div>
  );
}