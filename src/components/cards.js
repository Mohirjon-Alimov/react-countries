import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme';

export let Card = ({img, name, population, region, capital}) => {

  const {theme} = useContext(ThemeContext)
  return (
    
    <Link to={'/country/' + name} className=' text-decoration-none text-black'>
      <li className={`card ${theme}`}>
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
