import {Link} from 'react-router-dom';

export let Card = ({img, name, population, region, capital}) => {

  return (
    
    <Link to={'/country/' + name} className=' text-decoration-none text-black'>
      <li className="card">
        <img src={img} alt='flag' className="cardImg"  style={{borderRadius: 6,}}/>
        <div className="innerCard h-100">
          <h4>{name}</h4>
          <p>Population:{population}</p>
          <p>Region:{region}</p>
          <p>Capital:{capital}</p>
        </div>
      </li> 
    </Link>
    
  )
}
