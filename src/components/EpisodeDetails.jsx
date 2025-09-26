export default function EpisodeDetails({ episode }) {
  if (!episode) {
    return (
      <div className="episode-details empty">
        <p>Pick an episode to see more…</p>
      </div>
    );
  }

  return (
    <div className="episode-details">
      <h3 className="ep-number">Episode {episode.id}</h3>
      <h2 className="ep-title">{episode.title}</h2>
      <p className="ep-desc">{episode.description}</p>

      <button className="watch-btn" onClick={() => alert(`Playing ${episode.title}...`)}>
        Watch now
      </button>
    </div>
  );
}