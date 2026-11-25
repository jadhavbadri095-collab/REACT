
function PracticalCard({ title, description, img, link }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <img className="card-image" src={img} alt={title} />
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer" style={{backgroundColor:'pink', color: 'RED', textDecoration: 'underline' }}>
        VENOM LAST DANCE
      </a>
    </article>
  )
}

export default PracticalCard;