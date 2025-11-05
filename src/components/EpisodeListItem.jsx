export default function EpisodeListItem({ episode, isActive, onClick }) {
  return (
    <li>
      <button
        className={`episode-item ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {episode.title}   {/* <-- was episode.name */}
      </button>
    </li>
  );
}