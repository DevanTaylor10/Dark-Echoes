export default function EpisodeDetails({ episode }) {
  return (
    <section className="details">
      <h2 className="ep-title">Episode {episode.number}</h2>
      <h3 className="ep-name">{episode.title}</h3>       
      <p className="ep-desc">{episode.description}</p>    
      <button className="watch-btn">Watch now</button>
    </section>
  );
}