

export let Card = ({img, name, population, region, capital}) => {

  return (
    <li className="card">
      <img src={img} alt='flag' style={{borderRadius: 6}}/>
      <div className="innerCard">
        <h4>{name}</h4>
        <p>Population:{population}</p>
        <p>Region:{region}</p>
        <p>Capital:{capital}</p>
      </div>
      
    </li>


  )
}
