import EpisodeListItem from "./EpisodeListItem.jsx";

export default function EpisodeList({ episodes, selectedId, onSelect }) {
  return (
    <ul className="episode-list">
      {episodes.map((ep) => (
        <EpisodeListItem
          key={ep.id}
          episode={ep}
          isActive={ep.id === selectedId}
          onClick={() => onSelect(ep.id)}
        />
      ))}
    </ul>
  );
}
