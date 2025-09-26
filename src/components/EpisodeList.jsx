export default function EpisodeList({ episodes, selectedId, onSelect }) {
  return (
    <ul className="episode-list">
      {episodes.map((ep) => (
        <EpisodeItem
          key={ep.id}
          episode={ep}
          isActive={ep.id === selectedId}
          onClick={() => onSelect(ep)}
        />
      ))}
    </ul>
  );
}

function EpisodeItem({ episode, isActive, onClick }) {
  return (
    <li
      className={`episode-item ${isActive ? "active" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <span className="ep-num">Ep {episode.id}</span>
      <span className="ep-name">{episode.title}</span>
    </li>
  );
}