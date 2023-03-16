export const Card = ({ data }) => {
  return (
    <div className="Vegetalcard">
      <div className="header">{data.nom}</div>
      <img src={`assets/${data.image}`} alt={data.nom } />
      <div className="overlay">
        {data.instructions.map((el, key) => <p key={key}>{ el }</p>)}
      </div>
    </div>
  )
}