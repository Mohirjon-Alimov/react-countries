import {Loader} from '../loader/loader'
import {Card} from '../cards';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme';

const Country = ({countries}) => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`${theme}`}>
      {countries.isLoading && <Loader />}
      {countries.data.status && <h1 className="text-center mt-4 ">Try again or enter the correct value</h1>}
      {
        countries.data.length &&
        <ul className='card-list'>
          {countries.data.map(country => (
            <Card key={country.cca3} img={country.flags.png} population={country.population}region={country.region} capital={country.capital} name={country.name.common}></Card>
          ))}
        </ul> 
      }
      
    </div>
    
  )
};
export default Country;